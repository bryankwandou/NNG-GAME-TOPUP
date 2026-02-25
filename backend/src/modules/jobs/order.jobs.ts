import { PrismaClient } from '@prisma/client';
import { SupplierClient } from '../../integrations/supplier/supplier.client';
import { logger } from '../../config/logger';

const prisma = new PrismaClient();

/**
 * Poll pending orders and update their status
 * This job should run every 5-10 minutes
 */
export async function pollPendingOrders(): Promise<void> {
  try {
    logger.info('Starting pending orders polling job');

    const pendingOrders = await prisma.order.findMany({
      where: {
        status: 'PROCESSING' as any,
        externalRef: { not: null }
      },
      include: {
        reseller: true,
        product: true
      }
    });

    let updated = 0;

    for (const order of pendingOrders) {
      try {
        if (!order.externalRef) continue;
        const status = await (SupplierClient as any).checkOrderStatus(order.externalRef);

        if (status.status === 'success') {
          await prisma.order.update({
            where: { id: order.id },
            data: {
              status: 'SUCCESS' as any,
              completedAt: new Date(),
              updatedAt: new Date()
            }
          });

          // Update reseller turnover
          await prisma.reseller.update({
            where: { id: order.resellerId },
            data: {
              monthlyTurnover: { increment: order.resellerPrice },
              totalTurnoverAllTime: { increment: order.resellerPrice }
            }
          });

          await prisma.auditLog.create({
            data: {
              resellerId: order.resellerId,
              action: 'ORDER_COMPLETED_POLL',
              entityType: 'ORDER',
              entityId: order.id,
              notes: `Order completed via polling. External Ref: ${order.externalRef}`
            }
          });

          logger.info('Order completed', { orderId: order.id });
          updated++;

        } else if (status.status === 'failed') {
          await prisma.order.update({
            where: { id: order.id },
            data: {
              status: 'FAILED' as any,
              failureReason: status.message || 'Supplier reported failure',
              updatedAt: new Date()
            },
          });

          // Refund reseller
          await prisma.reseller.update({
            where: { id: order.resellerId },
            data: {
              balance: {
                increment: order.resellerPrice
              }
            }
          });

          await prisma.auditLog.create({
            data: {
              resellerId: order.resellerId,
              action: 'ORDER_FAILED_POLL',
              entityType: 'ORDER',
              entityId: order.id,
              notes: `Order failed and refunded. Reason: ${status.message}`
            }
          });

          logger.warn('Order failed and refunded', {
            orderId: order.id,
            reason: status.message
          });
          updated++;
        }
      } catch (error) {
        logger.error('Error checking order status', {
          orderId: order.id,
          error
        });
      }
    }

    logger.info('Pending orders polling job completed', {
      checked: pendingOrders.length,
      updated
    });
  } catch (error) {
    logger.error('Error in pending orders polling job', { error });
    throw error;
  }
}

/**
 * Cleanup expired/stuck orders
 * This job should run daily
 */
export async function cleanupStaleOrders(): Promise<void> {
  try {
    logger.info('Starting stale orders cleanup job');

    const staleDate = new Date();
    staleDate.setHours(staleDate.getHours() - 24); // Orders older than 24 hours

    const staleOrders = await prisma.order.findMany({
      where: {
        status: 'PROCESSING' as any,
        createdAt: {
          lt: staleDate
        }
      }
    });

    let cleaned = 0;

    for (const order of staleOrders) {
      // Mark as failed and refund
      await prisma.order.update({
        where: { id: order.id },
        data: {
          status: 'FAILED' as any,
          failureReason: 'Stuck in processing too long',
          updatedAt: new Date()
        },
      });

      await prisma.reseller.update({
        where: { id: order.resellerId },
        data: {
          balance: {
            increment: order.resellerPrice
          }
        }
      });

      await prisma.auditLog.create({
        data: {
          resellerId: order.resellerId,
          action: 'ORDER_STUCK_CLEANUP',
          entityType: 'ORDER',
          entityId: order.id,
          notes: 'Automatic cleanup for stale order'
        }
      });

      cleaned++;
    }

    logger.info('Stale orders cleanup completed', { cleaned });
  } catch (error) {
    logger.error('Error in stale orders cleanup job', { error });
    throw error;
  }
}
