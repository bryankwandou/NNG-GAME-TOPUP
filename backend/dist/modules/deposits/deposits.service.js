"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlePaymentWebhook = exports.listDeposits = exports.createDeposit = exports.depositsService = exports.DepositsService = void 0;
const client_1 = require("@prisma/client");
const database_1 = require("../../config/database");
const logger_1 = require("../../config/logger");
const errors_1 = require("../../utils/errors");
const payment_client_1 = require("../../integrations/payment/payment.client");
const qris_service_1 = require("../payments/qris.service");
const logger = (0, logger_1.createLogger)('DepositsService');
class DepositsService {
    constructor(prismaInstance) {
        this.prisma = prismaInstance;
        this.paymentClient = new payment_client_1.PaymentClient();
    }
    /**
     * Create a deposit request and generate payment instruction
     */
    async createDeposit(input) {
        if (input.amount <= BigInt(0)) {
            throw new errors_1.ValidationError('Deposit amount must be greater than 0');
        }
        // Verify reseller exists
        const reseller = await this.prisma.reseller.findUnique({
            where: { id: input.resellerId },
        });
        if (!reseller) {
            throw new errors_1.NotFoundError(`Reseller not found: ${input.resellerId}`);
        }
        // Create deposit record
        const deposit = await this.prisma.deposit.create({
            data: {
                resellerId: input.resellerId,
                amount: input.amount,
                paymentChannel: input.paymentChannel,
                status: client_1.DepositStatus.PENDING,
            },
        });
        logger.info(`Deposit created: ${deposit.id} for reseller ${input.resellerId}`);
        if (input.paymentChannel === client_1.PaymentChannel.QRIS) {
            const qrisService = new qris_service_1.QRISService();
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
                data: { status: client_1.DepositStatus.CANCELED },
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
    async handlePaymentWebhook(payload) {
        logger.info(`Payment webhook received: ${payload.externalRef} - ${payload.status}`);
        // Find deposit by external ID (which is our deposit ID)
        const deposit = await this.prisma.deposit.findUnique({
            where: { id: payload.externalRef },
        });
        if (!deposit) {
            logger.warn(`Deposit not found for webhook: ${payload.externalRef}`);
            throw new errors_1.NotFoundError(`Deposit not found: ${payload.externalRef}`);
        }
        if (payload.status === 'paid') {
            return this.markDepositAsPaid(payload.externalRef, new Date(payload.paidAt || new Date()));
        }
        else if (payload.status === 'failed') {
            return this.markDepositAsFailed(payload.externalRef);
        }
        else if (payload.status === 'expired') {
            return this.markDepositAsExpired(payload.externalRef);
        }
        return deposit;
    }
    /**
     * Mark deposit as paid and credit reseller balance
     */
    async markDepositAsPaid(depositId, paidAt) {
        const deposit = await this.prisma.deposit.findUnique({
            where: { id: depositId },
        });
        if (!deposit) {
            throw new errors_1.NotFoundError(`Deposit not found: ${depositId}`);
        }
        if (deposit.status === client_1.DepositStatus.PAID) {
            logger.warn(`Deposit already paid: ${depositId}`);
            return deposit;
        }
        // Use transaction to ensure atomicity
        const result = await this.prisma.$transaction(async (tx) => {
            // Update deposit
            const updatedDeposit = await tx.deposit.update({
                where: { id: depositId },
                data: {
                    status: client_1.DepositStatus.PAID,
                    paidAt,
                },
            });
            // Credit reseller balance
            const reseller = await tx.reseller.findUnique({
                where: { id: deposit.resellerId },
            });
            if (!reseller) {
                throw new errors_1.NotFoundError(`Reseller not found: ${deposit.resellerId}`);
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
    async markDepositAsFailed(depositId) {
        const deposit = await this.prisma.deposit.findUnique({
            where: { id: depositId },
        });
        if (!deposit) {
            throw new errors_1.NotFoundError(`Deposit not found: ${depositId}`);
        }
        const updated = await this.prisma.deposit.update({
            where: { id: depositId },
            data: { status: client_1.DepositStatus.CANCELED },
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
    async markDepositAsExpired(depositId) {
        const deposit = await this.prisma.deposit.findUnique({
            where: { id: depositId },
        });
        if (!deposit) {
            throw new errors_1.NotFoundError(`Deposit not found: ${depositId}`);
        }
        const updated = await this.prisma.deposit.update({
            where: { id: depositId },
            data: { status: client_1.DepositStatus.EXPIRED },
        });
        logger.info(`Deposit marked as expired: ${depositId}`);
        return updated;
    }
    /**
     * Get deposit by ID
     */
    async getDeposit(id) {
        const deposit = await this.prisma.deposit.findUnique({
            where: { id },
        });
        if (!deposit) {
            throw new errors_1.NotFoundError(`Deposit not found: ${id}`);
        }
        return deposit;
    }
    /**
     * List deposits for a reseller
     */
    async listDeposits(resellerId, skip = 0, take = 50, status) {
        const where = { resellerId };
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
    async listAllDeposits(skip = 0, take = 50, filter) {
        const where = {};
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
                status: client_1.DepositStatus.PENDING,
                expiresAt: { lt: now },
            },
            data: {
                status: client_1.DepositStatus.EXPIRED,
            },
        });
        if (result.count > 0) {
            logger.info(`Cleaned up ${result.count} expired deposits`);
        }
        return result.count;
    }
}
exports.DepositsService = DepositsService;
exports.depositsService = new DepositsService(database_1.prisma);
const createDeposit = (input) => exports.depositsService.createDeposit(input);
exports.createDeposit = createDeposit;
const listDeposits = (resellerId, skip, take, status) => exports.depositsService.listDeposits(resellerId, skip, take, status);
exports.listDeposits = listDeposits;
const handlePaymentWebhook = (payload) => exports.depositsService.handlePaymentWebhook(payload);
exports.handlePaymentWebhook = handlePaymentWebhook;
//# sourceMappingURL=deposits.service.js.map