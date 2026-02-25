import { PrismaClient, DepositStatus, PaymentChannel } from '@prisma/client';
import { prisma } from '../../config/database';
import { createLogger } from '../../config/logger';
import { NotFoundError, ValidationError } from '../../utils/errors';
import { PaymentClient } from '../../integrations/payment/payment.client';
import { QRISService } from '../payments/qris.service';

const logger = createLogger('DepositsService');

export interface CreateDepositInput {
  resellerId: string;
  amount: bigint;
  paymentChannel: PaymentChannel;
  expiryMinutes?: number;
}

export interface DepositWebhookPayload {
  invoiceId: string;
  externalRef: string; // Our deposit ID
  status: 'paid' | 'failed' | 'expired';
  amount: bigint;
  paidAt?: string;
}

export class DepositsService {
  private prisma: PrismaClient;
  private paymentClient: PaymentClient;

  constructor(prismaInstance: PrismaClient) {
    this.prisma = prismaInstance;
    this.paymentClient = new PaymentClient();
  }

  /**
   * Create a deposit request and generate payment instruction
   */
  async createDeposit(input: CreateDepositInput) {
    if (input.amount <= BigInt(0)) {
      throw new ValidationError('Deposit amount must be greater than 0');
    }

    // Verify reseller exists
    const reseller = await this.prisma.reseller.findUnique({
      where: { id: input.resellerId },
    });

    if (!reseller) {
      throw new NotFoundError(`Reseller not found: ${input.resellerId}`);
    }

    // Create deposit record
    const deposit = await this.prisma.deposit.create({
      data: {
        resellerId: input.resellerId,
        amount: input.amount,
        paymentChannel: input.paymentChannel,
        status: DepositStatus.PENDING,
      },
    });

    logger.info(`Deposit created: ${deposit.id} for reseller ${input.resellerId}`);

    if (input.paymentChannel === PaymentChannel.QRIS) {
      const qrisService = new QRISService();
      const qrisString = qrisService.generateQRIS({
        merchantName: 'NNG STORE',
        merchantCity: 'JAKARTA',
        amount: Number(input.amount),
        transactionId: deposit.id.substring(0, 8),
      });

      const updatedDeposit = await this.prisma.deposit.update({
        where: { id: deposit.id },
        data: {
          externalPaymentId: `QRIS-${deposit.id}`,
          qrCodeUrl: qrisString, // Store raw QRIS string here
          expiresAt: new Date(Date.now() + (input.expiryMinutes || 15) * 60 * 1000),
        },
      });

      logger.info(`QRIS generated for deposit: ${deposit.id}`);
      return updatedDeposit;
    }

    // Call payment gateway to generate payment instruction
    const paymentResult = await this.paymentClient.createInvoice({
      externalRef: deposit.id,
      amount: input.amount,
      description: `Top-up deposit for ${reseller.username}`,
      customerEmail: reseller.email || undefined,
      customerPhone: reseller.whatsappPhoneNumber || undefined,
      expiryMinutes: input.expiryMinutes || 1440,
    });

    if (!paymentResult.success) {
      // Mark deposit as failed if payment gateway call failed
      await this.prisma.deposit.update({
        where: { id: deposit.id },
        data: { status: DepositStatus.CANCELED },
      });

      throw new Error(`Failed to create payment: ${paymentResult.message}`);
    }

    // Update deposit with payment gateway info
    const updatedDeposit = await this.prisma.deposit.update({
      where: { id: deposit.id },
      data: {
        externalPaymentId: paymentResult.invoiceId,
        paymentUrl: paymentResult.url,
        qrCodeUrl: paymentResult.qrCode,
        virtualAccountNumber: paymentResult.virtualAccountNumber,
        bankName: paymentResult.bankName,
        expiresAt: paymentResult.expiresAt || new Date(Date.now() + 24 * 60 * 60 * 1000),
      },
    });

    logger.info(`Payment instruction generated for deposit: ${deposit.id}`);

    return updatedDeposit;
  }

  /**
   * Handle payment webhook callback from payment gateway
   */
  async handlePaymentWebhook(payload: DepositWebhookPayload) {
    logger.info(`Payment webhook received: ${payload.externalRef} - ${payload.status}`);

    // Find deposit by external ID (which is our deposit ID)
    const deposit = await this.prisma.deposit.findUnique({
      where: { id: payload.externalRef },
    });

    if (!deposit) {
      logger.warn(`Deposit not found for webhook: ${payload.externalRef}`);
      throw new NotFoundError(`Deposit not found: ${payload.externalRef}`);
    }

    if (payload.status === 'paid') {
      return this.markDepositAsPaid(payload.externalRef, new Date(payload.paidAt || new Date()));
    } else if (payload.status === 'failed') {
      return this.markDepositAsFailed(payload.externalRef);
    } else if (payload.status === 'expired') {
      return this.markDepositAsExpired(payload.externalRef);
    }

    return deposit;
  }

  /**
   * Mark deposit as paid and credit reseller balance
   */
  async markDepositAsPaid(depositId: string, paidAt: Date) {
    const deposit = await this.prisma.deposit.findUnique({
      where: { id: depositId },
    });

    if (!deposit) {
      throw new NotFoundError(`Deposit not found: ${depositId}`);
    }

    if (deposit.status === DepositStatus.PAID) {
      logger.warn(`Deposit already paid: ${depositId}`);
      return deposit;
    }

    // Use transaction to ensure atomicity
    const result = await this.prisma.$transaction(async (tx) => {
      // Update deposit
      const updatedDeposit = await tx.deposit.update({
        where: { id: depositId },
        data: {
          status: DepositStatus.PAID,
          paidAt,
        },
      });

      // Credit reseller balance
      const reseller = await tx.reseller.findUnique({
        where: { id: deposit.resellerId },
      });

      if (!reseller) {
        throw new NotFoundError(`Reseller not found: ${deposit.resellerId}`);
      }

      const updatedReseller = await tx.reseller.update({
        where: { id: deposit.resellerId },
        data: {
          balance: reseller.balance + deposit.amount,
        },
      });

      // Create transaction log
      await tx.transaction.create({
        data: {
          type: 'DEPOSIT',
          amount: deposit.amount,
          balance_before: reseller.balance,
          balance_after: updatedReseller.balance,
          depositId: depositId,
        },
      });

      // Log audit trail
      await tx.auditLog.create({
        data: {
          resellerId: deposit.resellerId,
          action: 'DEPOSIT_COMPLETED',
          entityType: 'DEPOSIT',
          entityId: depositId,
          oldValue: JSON.stringify({ balance: reseller.balance.toString() }),
          newValue: JSON.stringify({ balance: updatedReseller.balance.toString() }),
          performedBy: 'SYSTEM',
          notes: `Deposit of ${deposit.amount.toString()} IDR processed via ${deposit.paymentChannel}`,
        },
      });

      return { deposit: updatedDeposit, reseller: updatedReseller };
    });

    logger.info(`Deposit marked as paid: ${depositId}, Reseller balance increased by ${deposit.amount.toString()}`);

    return result.deposit;
  }

  /**
   * Mark deposit as failed
   */
  async markDepositAsFailed(depositId: string) {
    const deposit = await this.prisma.deposit.findUnique({
      where: { id: depositId },
    });

    if (!deposit) {
      throw new NotFoundError(`Deposit not found: ${depositId}`);
    }

    const updated = await this.prisma.deposit.update({
      where: { id: depositId },
      data: { status: DepositStatus.CANCELED },
    });

    await this.prisma.auditLog.create({
      data: {
        resellerId: deposit.resellerId,
        action: 'DEPOSIT_FAILED',
        entityType: 'DEPOSIT',
        entityId: depositId,
        performedBy: 'SYSTEM',
        notes: `Deposit payment failed`,
      },
    });

    logger.info(`Deposit marked as failed: ${depositId}`);
    return updated;
  }

  /**
   * Mark deposit as expired
   */
  async markDepositAsExpired(depositId: string) {
    const deposit = await this.prisma.deposit.findUnique({
      where: { id: depositId },
    });

    if (!deposit) {
      throw new NotFoundError(`Deposit not found: ${depositId}`);
    }

    const updated = await this.prisma.deposit.update({
      where: { id: depositId },
      data: { status: DepositStatus.EXPIRED },
    });

    logger.info(`Deposit marked as expired: ${depositId}`);
    return updated;
  }

  /**
   * Get deposit by ID
   */
  async getDeposit(id: string) {
    const deposit = await this.prisma.deposit.findUnique({
      where: { id },
    });

    if (!deposit) {
      throw new NotFoundError(`Deposit not found: ${id}`);
    }

    return deposit;
  }

  /**
   * List deposits for a reseller
   */
  async listDeposits(
    resellerId: string,
    skip: number = 0,
    take: number = 50,
    status?: DepositStatus
  ) {
    const where: any = { resellerId };

    if (status) {
      where.status = status;
    }

    const [deposits, total] = await Promise.all([
      this.prisma.deposit.findMany({
        where,
        skip,
        take,
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.deposit.count({ where }),
    ]);

    return { deposits, total, skip, take };
  }

  /**
   * List all deposits (admin only)
   */
  async listAllDeposits(
    skip: number = 0,
    take: number = 50,
    filter?: { status?: DepositStatus; resellerId?: string }
  ) {
    const where: any = {};

    if (filter?.status) {
      where.status = filter.status;
    }

    if (filter?.resellerId) {
      where.resellerId = filter.resellerId;
    }

    const [deposits, total] = await Promise.all([
      this.prisma.deposit.findMany({
        where,
        skip,
        take,
        orderBy: { createdAt: 'desc' },
        include: { reseller: true },
      }),
      this.prisma.deposit.count({ where }),
    ]);

    return { deposits, total, skip, take };
  }

  /**
   * Clean up expired pending deposits
   */
  async cleanupExpiredDeposits() {
    const now = new Date();

    const result = await this.prisma.deposit.updateMany({
      where: {
        status: DepositStatus.PENDING,
        expiresAt: { lt: now },
      },
      data: {
        status: DepositStatus.EXPIRED,
      },
    });

    if (result.count > 0) {
      logger.info(`Cleaned up ${result.count} expired deposits`);
    }

    return result.count;
  }
}

export const depositsService = new DepositsService(prisma);
export const createDeposit = (input: CreateDepositInput) => depositsService.createDeposit(input);
export const listDeposits = (resellerId: string, skip?: number, take?: number, status?: DepositStatus) =>
  depositsService.listDeposits(resellerId, skip, take, status);
export const handlePaymentWebhook = (payload: DepositWebhookPayload) => depositsService.handlePaymentWebhook(payload);
