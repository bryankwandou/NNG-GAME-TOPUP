/**
 * Auto-Refund Service
 * Automatically processes refunds when orders fail permanently
 */

import { prisma } from '../../config/database';
import { updateBalance } from '../resellers/reseller.service';
import { createLogger } from '../../config/logger';

const logger = createLogger('AutoRefund');


export interface RefundRecord {
  orderId: string;
  resellerId: string;
  amount: number;
  reason: string;
  processedAt: Date;
  status: 'pending' | 'completed' | 'failed';
}

export class AutoRefundService {
  /**
   * Process refund for a failed order
   * Returns the refunded amount
   */
  async refundOrder(orderId: string, reason: string): Promise<{ success: boolean; refundedAmount?: number; error?: string }> {
    try {
      const order = await prisma.order.findUnique({
        where: { id: orderId },
      });

      if (!order) {
        return {
          success: false,
          error: `Order not found: ${orderId}`,
        };
      }

      // Check if already refunded
      if (order.status === 'REFUNDED') {
        logger.warn(`Order ${orderId} already refunded`, { type: 'refund' });
        return {
          success: true,
          refundedAmount: Number(order.resellerPrice),
        };
      }

      // Mark order as refunded first (prevent double refund)
      await prisma.order.update({
        where: { id: orderId },
        data: {
          status: 'REFUNDED',
          failureReason: reason,
          metadata: {
            ...((order.metadata as any) || {}),
            refundedAt: new Date().toISOString(),
            refundReason: reason,
          },
        },
      });

      // Refund balance to reseller
      const success = await updateBalance(order.resellerId, order.resellerPrice, 'add');

      if (success) {
        logger.info(`Order ${orderId} refunded successfully`, {
          type: 'refund',
          meta: {
            orderId,
            resellerId: order.resellerId,
            amount: order.resellerPrice,
            reason,
          },
        });

        // Notify reseller via bot if possible
        await this.notifyResellerOfRefund(order.resellerId, orderId, Number(order.resellerPrice), reason);

        return {
          success: true,
          refundedAmount: Number(order.resellerPrice),
        };
      } else {
        // If refund failed, mark order as failed
        await prisma.order.update({
          where: { id: orderId },
          data: { status: 'FAILED' },
        });

        logger.error(`Order ${orderId} refund balance update failed`, {
          type: 'refund',
          meta: { orderId, resellerId: order.resellerId },
        });

        return {
          success: false,
          error: 'Failed to update reseller balance',
        };
      }
    } catch (error) {
      logger.error(`Refund processing error for order ${orderId}`, {
        type: 'refund',
        meta: { orderId, error: (error as Error).message },
      });

      return {
        success: false,
        error: (error as Error).message,
      };
    }
  }

  /**
   * Batch process refunds for orders in failed state
   */
  async processPendingRefunds(): Promise<{ processed: number; succeeded: number; failed: number }> {
    try {
      // Find orders that should be refunded
      const failedOrders = await prisma.order.findMany({
        where: {
          status: 'FAILED',
        },
        take: 100,
      });

      let succeeded = 0;
      let failed = 0;

      for (const order of failedOrders) {
        const reason = (order.metadata as any)?.failureReason || 'Supplier error - automatic refund';
        const result = await this.refundOrder(order.id, reason);

        if (result.success) {
          succeeded++;
        } else {
          failed++;
        }
      }

      logger.info(`Refund batch processed`, {
        type: 'refund',
        meta: { processed: failedOrders.length, succeeded, failed },
      });

      return { processed: failedOrders.length, succeeded, failed };
    } catch (error) {
      logger.error('Pending refund processing error', {
        type: 'refund',
        meta: { error: (error as Error).message },
      });

      return { processed: 0, succeeded: 0, failed: 0 };
    }
  }

  /**
   * Notify reseller of refund via bot (if we have their chat ID stored)
   */
  private async notifyResellerOfRefund(
    resellerId: string,
    orderId: string,
    amount: number,
    reason: string
  ): Promise<void> {
    try {
      // TODO: Get bot adapters and send notification
      logger.info(`Refund notification queued for reseller ${resellerId}`, {
        type: 'refund',
        meta: { orderId, amount, reason },
      });
    } catch (error) {
      logger.error('Failed to notify reseller of refund', {
        type: 'refund',
        meta: { resellerId, error: (error as Error).message },
      });
    }
  }

  /**
   * Create refund audit record
   */
  async logRefundAudit(record: RefundRecord): Promise<void> {
    try {
      // Store in audit log / database
      logger.info(`Refund audit logged: ${record.orderId}`, {
        type: 'refund_audit',
        meta: record,
      });
    } catch (error) {
      logger.error('Failed to log refund audit', {
        type: 'refund_audit',
        meta: { error: (error as Error).message },
      });
    }
  }
}

export const autoRefundService = new AutoRefundService();
