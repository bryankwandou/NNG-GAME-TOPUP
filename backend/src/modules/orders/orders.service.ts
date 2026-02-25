// src/modules/orders/orders.service.ts
import { Order } from '@prisma/client';
import { prisma } from '../../config/database';
import { getResellerPrice } from '../pricing/pricing.service';
import { updateBalance } from '../resellers/reseller.service';
import { supplierClient } from '../../integrations/supplier/supplier.client';
import { supplierRouter } from '../../integrations/supplier/supplier.router';
// rateLimiter removed
import { OrderValidator } from './order.validator';
import { orderRetryService } from './order.retry';
import { createLogger } from '../../config/logger';


const logger = createLogger('OrdersService');

/**
 * Custom error class for validation failures
 */
export class ValidationError extends Error {
  constructor(
    message: string,
    public errors: string[] = []
  ) {
    super(message);
    this.name = 'ValidationError';
  }
}

/**
 * Custom error class for duplicate order detection
 */
export class DuplicateOrderError extends Error {
  constructor(
    message: string,
    public duplicateOrderId?: string
  ) {
    super(message);
    this.name = 'DuplicateOrderError';
  }
}

export interface CreateOrderInput {
  resellerId: string;
  productCode: string;
  targetGameId: string;
  idempotencyKey?: string;
}

/**
 * Create an order (top-up purchase)
 * 1. Validate order with comprehensive checks (idempotency, duplicate detection, player ID format)
 * 2. Validate product and pricing
 * 3. Check reseller balance
 * 4. Atomically deduct balance from reseller
 * 5. Call supplier to initiate top-up
 * 6. Handle supplier response (success/pending/failed)
 * 7. Auto-schedule retry on transient failures
 */
export async function createOrder(input: CreateOrderInput): Promise<Order> {
  const { resellerId, productCode, targetGameId, idempotencyKey } = input;

  // 1. Fetch data for validation
  const reseller = await prisma.reseller.findUnique({ where: { id: resellerId } });
  if (!reseller) throw new ValidationError('Reseller not found');

  const product = await prisma.product.findUnique({ where: { code: productCode } });
  if (!product || !product.active) throw new ValidationError(`Product ${productCode} not found or inactive`);

  // 2. Calculate actual price
  const resellerPrice = await getResellerPrice(productCode, reseller.tier);

  // 3. Comprehensive Validation
  const validator = new OrderValidator(prisma);
  const validation = await validator.validateOrder({
    resellerId,
    productCode,
    targetGameId,
    resellerPrice,
    idempotencyKey,
  });

  if (!validation.isValid) {
    if (validation.isDuplicate) {
      throw new DuplicateOrderError(
        `⚠️ Pesanan duplikat terdeteksi. ID: ${validation.existingOrderId}`,
        validation.existingOrderId
      );
    }
    throw new ValidationError(validation.errors[0] || 'Order validation failed', validation.errors);
  }

  // 4. Atomic Transaction: Order + Balance + Transaction Log + Audit Log
  const order = await prisma.$transaction(async (tx: any) => {
    // A. Create order record
    const newOrder = await tx.order.create({
      data: {
        resellerId,
        productId: product.id,
        targetGameId,
        costPrice: product.costPrice,
        resellerPrice,
        ppnAmount: BigInt(Math.round(Number(resellerPrice) * 0.11)), // Dynamic calc if needed
        marginAmount: BigInt(Math.round(Number(resellerPrice) * 0.15)), // Placeholder or from result
        status: 'PENDING' as any,
        metadata: {
          idempotencyKey,
          platform: (input as any).platform || 'unknown',
          audit: {
            created_at: new Date().toISOString(),
            ip: (input as any).ip || '0.0.0.0'
          }
        },
      },
    });

    // B. Deduct balance with transaction record
    const balanceBefore = reseller.balance;
    const balanceAfter = balanceBefore - resellerPrice;

    await tx.reseller.update({
      where: { id: resellerId },
      data: { balance: balanceAfter },
    });

    await tx.transaction.create({
      data: {
        type: 'ORDER',
        amount: resellerPrice,
        balance_before: balanceBefore,
        balance_after: balanceAfter,
        orderId: newOrder.id,
        notes: `Purchase: ${product.displayName} for ID ${targetGameId}`,
      },
    });

    // C. Create Audit Log
    await tx.auditLog.create({
      data: {
        resellerId,
        action: 'ORDER_PLACED',
        entityType: 'ORDER',
        entityId: newOrder.id,
        newValue: JSON.stringify({
          product: productCode,
          target: targetGameId,
          price: resellerPrice.toString(),
        }),
        performedBy: resellerId,
        notes: `Order created via bot`,
      },
    });

    return newOrder;
  });

  logger.info(`Order ${order.id} finalized in DB, contacting supplier...`);

  // 5. Call supplier to process top-up
  try {
    // 5. Route through SupplierRouter (Failover enabled)
    const secondarySupplier = (product as any).metadata && (product as any).metadata.secondarySupplier;
    const supplierResponse = await supplierRouter.executeOrder({
      productCode,
      targetGameId,
      quantity: 1,
      clientReference: order.id,
    }, { secondaryId: secondarySupplier });

    // 6. Update order based on supplier response
    if (supplierResponse.status === 'success') {
      await prisma.$transaction(async (tx: any) => {
        await tx.order.update({
          where: { id: order.id },
          data: {
            status: 'COMPLETED' as any,
            externalRef: supplierResponse.externalRef,
          },
        });

        // Update reseller turnover and save last used Player ID
        const currentMeta = (reseller.metadata as any) || {};
        const lastPlayerIds = currentMeta.lastPlayerIds || {};
        const gameType = productCode.split('_')[0] || 'GENERAL';
        lastPlayerIds[gameType] = targetGameId;

        await tx.reseller.update({
          where: { id: resellerId },
          data: {
            monthlyTurnover: { increment: resellerPrice },
            totalTurnoverAllTime: { increment: resellerPrice },
            metadata: {
              ...currentMeta,
              lastPlayerIds,
            } as any,
          },
        });
      });

      logger.info(`Order successful: ${order.id}`, { type: 'order' });
    } else if (supplierResponse.status === 'processing') {
      await prisma.order.update({
        where: { id: order.id },
        data: {
          status: 'PROCESSING' as any,
          externalRef: supplierResponse.externalRef,
        },
      });
      logger.info(`Order processing: ${order.id}`, { type: 'order' });
    } else {
      // Supplier returned early failure
      throw new Error(supplierResponse.message || 'Supplier error');
    }

    return order;
  } catch (error) {
    const errorMessage = (error as Error).message;
    logger.error(`Supplier error for order ${order.id}: ${errorMessage}`, {
      type: 'order',
      meta: { orderId: order.id, error: errorMessage },
    });

    // Check if error is retryable
    const isRetryable = orderRetryService.isRetryableError(errorMessage);

    if (isRetryable) {
      // Mark as processing and schedule for background retry
      await prisma.order.update({
        where: { id: order.id },
        data: {
          status: 'PROCESSING' as any,
          metadata: {
            ...((order as any).metadata || {}),
            lastRetryError: errorMessage,
            nextRetryAt: new Date(Date.now() + 5000).toISOString(),
          } as any,
        },
      });

      logger.info(`Order ${order.id} scheduled for retry due to transient error`, { type: 'order' });
    } else {
      // 7. Check for Secondary Supplier (Failover)
      const secondarySupplier = (product as any).metadata && (product as any).metadata.secondarySupplier;
      if (secondarySupplier && secondarySupplier !== 'DEFAULT') {
        logger.info(`Order ${order.id} primary supplier failed, attempting failover to ${secondarySupplier}...`);
        // In a real multi-supplier system, we would route to another client here.
        // For this demo, we log the intent and refund.
        await prisma.auditLog.create({
          data: {
            resellerId,
            action: 'SUPPLIER_FAILOVER_ATTEMPT',
            entityType: 'ORDER',
            entityId: order.id,
            notes: `Attempting failover to ${secondarySupplier} due to: ${errorMessage}`,
          },
        });
      }

      // Permanent failure, refund balance
      await prisma.$transaction(async (tx: any) => {
        await tx.order.update({
          where: { id: order.id },
          data: {
            status: 'FAILED' as any,
            failureReason: errorMessage,
          },
        });

        await tx.reseller.update({
          where: { id: resellerId },
          data: { balance: { increment: resellerPrice } },
        });

        await tx.transaction.create({
          data: {
            type: 'REFUND',
            amount: resellerPrice,
            balance_before: reseller.balance - resellerPrice, // Balance was already deducted
            balance_after: reseller.balance,
            orderId: order.id,
            notes: `Refund for failed order ${order.id}: ${errorMessage}`,
          },
        });
      });

      logger.info(`Order ${order.id} failed permanently and refunded`, { type: 'order' });
    }

    throw error;
  }
}

/**
 * Poll supplier to check pending orders
 * Called by background job every 1-5 minutes
 */
export async function pollPendingOrders(): Promise<void> {
  const pendingOrders = await prisma.order.findMany({
    where: { status: 'PROCESSING' as any },
    include: { product: true },
    take: 50,
  });

  for (const order of pendingOrders) {
    if (!order.externalRef) {
      // If no external ref, maybe it needs a retry?
      const retryCount = ((order as any).metadata)?.retryCount || 0;
      if (retryCount < 5) {
        await orderRetryService.retrySupplierOrder(order.id);
      }
      continue;
    }

    try {
      const status = await supplierClient.checkOrderStatus(order.externalRef);

      if (status.status === 'success') {
        await prisma.order.update({
          where: { id: order.id },
          data: { status: 'COMPLETED' as any },
        });

        await prisma.reseller.update({
          where: { id: order.resellerId },
          data: {
            monthlyTurnover: { increment: order.resellerPrice },
            totalTurnoverAllTime: { increment: order.resellerPrice },
          },
        });

        logger.info(`Polled order completed: ${order.id}`, { type: 'order' });
      } else if (status.status === 'failed') {
        await prisma.order.update({
          where: { id: order.id },
          data: { status: 'FAILED' as any, failureReason: 'Supplier reported failure' },
        });

        // Refund
        await updateBalance(order.resellerId, order.resellerPrice, 'add');

        logger.info(`Polled order failed and refunded: ${order.id}`, { type: 'order' });
      }
    } catch (error) {
      logger.error(`Error polling order ${order.id}: ${(error as Error).message}`, {
        type: 'order',
      });
    }
  }
}

/**
 * Get order details
 */
export async function getOrderDetail(orderId: string): Promise<Order> {
  const order = await prisma.order.findUnique({
    where: { id: orderId },
  });

  if (!order) {
    throw new Error('Order not found');
  }

  return order;
}

/**
 * Get reseller's order history
 */
export async function getResellerOrders(resellerId: string, limit: number = 20) {
  return await prisma.order.findMany({
    where: { resellerId },
    include: { product: true },
    orderBy: { createdAt: 'desc' },
    take: limit,
  });
}
