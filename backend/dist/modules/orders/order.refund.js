"use strict";
/**
 * Auto-Refund Service
 * Automatically processes refunds when orders fail permanently
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.autoRefundService = exports.AutoRefundService = void 0;
const database_1 = require("../../config/database");
const reseller_service_1 = require("../resellers/reseller.service");
const logger_1 = require("../../config/logger");
const logger = (0, logger_1.createLogger)('AutoRefund');
class AutoRefundService {
    /**
     * Process refund for a failed order
     * Returns the refunded amount
     */
    async refundOrder(orderId, reason) {
        try {
            const order = await database_1.prisma.order.findUnique({
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
            await database_1.prisma.order.update({
                where: { id: orderId },
                data: {
                    status: 'REFUNDED',
                    failureReason: reason,
                    metadata: {
                        ...(order.metadata || {}),
                        refundedAt: new Date().toISOString(),
                        refundReason: reason,
                    },
                },
            });
            // Refund balance to reseller
            const success = await (0, reseller_service_1.updateBalance)(order.resellerId, order.resellerPrice, 'add');
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
            }
            else {
                // If refund failed, mark order as failed
                await database_1.prisma.order.update({
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
        }
        catch (error) {
            logger.error(`Refund processing error for order ${orderId}`, {
                type: 'refund',
                meta: { orderId, error: error.message },
            });
            return {
                success: false,
                error: error.message,
            };
        }
    }
    /**
     * Batch process refunds for orders in failed state
     */
    async processPendingRefunds() {
        try {
            // Find orders that should be refunded
            const failedOrders = await database_1.prisma.order.findMany({
                where: {
                    status: 'FAILED',
                },
                take: 100,
            });
            let succeeded = 0;
            let failed = 0;
            for (const order of failedOrders) {
                const reason = order.metadata?.failureReason || 'Supplier error - automatic refund';
                const result = await this.refundOrder(order.id, reason);
                if (result.success) {
                    succeeded++;
                }
                else {
                    failed++;
                }
            }
            logger.info(`Refund batch processed`, {
                type: 'refund',
                meta: { processed: failedOrders.length, succeeded, failed },
            });
            return { processed: failedOrders.length, succeeded, failed };
        }
        catch (error) {
            logger.error('Pending refund processing error', {
                type: 'refund',
                meta: { error: error.message },
            });
            return { processed: 0, succeeded: 0, failed: 0 };
        }
    }
    /**
     * Notify reseller of refund via bot (if we have their chat ID stored)
     */
    async notifyResellerOfRefund(resellerId, orderId, amount, reason) {
        try {
            // TODO: Get bot adapters and send notification
            logger.info(`Refund notification queued for reseller ${resellerId}`, {
                type: 'refund',
                meta: { orderId, amount, reason },
            });
        }
        catch (error) {
            logger.error('Failed to notify reseller of refund', {
                type: 'refund',
                meta: { resellerId, error: error.message },
            });
        }
    }
    /**
     * Create refund audit record
     */
    async logRefundAudit(record) {
        try {
            // Store in audit log / database
            logger.info(`Refund audit logged: ${record.orderId}`, {
                type: 'refund_audit',
                meta: record,
            });
        }
        catch (error) {
            logger.error('Failed to log refund audit', {
                type: 'refund_audit',
                meta: { error: error.message },
            });
        }
    }
}
exports.AutoRefundService = AutoRefundService;
exports.autoRefundService = new AutoRefundService();
//# sourceMappingURL=order.refund.js.map