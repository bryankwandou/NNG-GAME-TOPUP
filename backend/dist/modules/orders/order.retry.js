"use strict";
/**
 * Order Retry Strategy with Exponential Backoff
 * Handles provider failures gracefully with automatic retries
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRetryService = exports.OrderRetryService = exports.DEFAULT_RETRY_CONFIG = void 0;
const client_1 = require("@prisma/client");
const supplier_client_1 = require("../../integrations/supplier/supplier.client");
const logger_1 = require("../../config/logger");
const logger = (0, logger_1.createLogger)('OrderRetry');
const prisma = new client_1.PrismaClient();
exports.DEFAULT_RETRY_CONFIG = {
    maxRetries: 5,
    initialDelayMs: 1000,
    maxDelayMs: 60000,
    backoffMultiplier: 2,
    jitterFactor: 0.2,
};
class OrderRetryService {
    constructor(config = exports.DEFAULT_RETRY_CONFIG) {
        this.config = config;
    }
    /**
     * Calculate delay for next retry with exponential backoff + jitter
     * Formula: delay = min(initialDelay * multiplier^attempt, maxDelay) * (1 ± jitter)
     */
    calculateBackoffDelay(attempt) {
        let baseDelay = Math.min(this.config.initialDelayMs * Math.pow(this.config.backoffMultiplier, attempt), this.config.maxDelayMs);
        // Add jitter to prevent thundering herd
        const jitter = baseDelay * this.config.jitterFactor * (Math.random() - 0.5) * 2;
        return Math.max(100, baseDelay + jitter);
    }
    /**
     * Retry supplier order with exponential backoff
     */
    async retrySupplierOrder(orderId) {
        const order = await prisma.order.findUnique({
            where: { id: orderId },
            include: { product: true },
        });
        if (!order) {
            return {
                success: false,
                attempt: 0,
                error: 'Order not found',
                shouldRefund: false,
            };
        }
        // Don't retry if already succeeded
        if (order.status === 'COMPLETED') {
            return {
                success: true,
                attempt: 0,
                shouldRefund: false,
            };
        }
        // Get retry count from metadata or default to 0
        const metadata = order.metadata || {};
        const retryCount = metadata.retryCount || 0;
        if (retryCount >= this.config.maxRetries) {
            logger.warn(`Order ${orderId} exceeded max retries (${this.config.maxRetries})`, {
                type: 'order_retry',
                meta: { orderId, retryCount },
            });
            return {
                success: false,
                attempt: retryCount,
                error: `Max retries exceeded (${this.config.maxRetries})`,
                shouldRefund: true, // Refund user after max retries
            };
        }
        try {
            // Attempt supplier call
            const supplierResponse = await supplier_client_1.supplierClient.createOrder({
                productCode: order.product.code,
                targetGameId: order.targetGameId,
                quantity: 1,
                clientReference: order.id,
            });
            if (supplierResponse.status === 'SUCCESS') {
                // Update order to COMPLETED
                await prisma.order.update({
                    where: { id: orderId },
                    data: {
                        status: 'COMPLETED',
                        externalRef: supplierResponse.externalRef,
                        metadata: {
                            ...(order.metadata || {}),
                            retryCount: 0, // Reset retry count on success
                            finalizedAt: new Date().toISOString(),
                            lastRetryError: null, // Clear any previous error
                        },
                    },
                });
                logger.info(`Order ${orderId} succeeded on retry attempt ${retryCount + 1}`, {
                    type: 'order_retry',
                    meta: { orderId, retryCount, externalRef: supplierResponse.externalRef },
                });
                return {
                    success: true,
                    attempt: retryCount + 1,
                    shouldRefund: false,
                };
            }
            else if (supplierResponse.status === 'processing') {
                // Still pending, schedule next retry
                const nextDelay = this.calculateBackoffDelay(retryCount);
                const nextRetryAt = new Date(Date.now() + nextDelay);
                await prisma.order.update({
                    where: { id: orderId },
                    data: {
                        status: 'PROCESSING',
                        externalRef: supplierResponse.externalRef,
                        metadata: {
                            ...(order.metadata || {}),
                            retryCount: retryCount + 1,
                            nextRetryAt: nextRetryAt.toISOString(),
                            lastRetryError: 'PENDING - will retry',
                        },
                    },
                });
                return {
                    success: false,
                    attempt: retryCount + 1,
                    nextRetryAt,
                    error: 'Still pending, scheduled for retry',
                    shouldRefund: false,
                };
            }
            else {
                // Supplier returned failure
                throw new Error(supplierResponse.message || 'Supplier returned failure status');
            }
        }
        catch (error) {
            const errorMessage = error.message;
            // Determine if this error is retryable
            const isRetryable = this.isRetryableError(errorMessage);
            if (isRetryable && retryCount < this.config.maxRetries) {
                // Schedule retry
                const nextDelay = this.calculateBackoffDelay(retryCount);
                const nextRetryAt = new Date(Date.now() + nextDelay);
                await prisma.order.update({
                    where: { id: orderId },
                    data: {
                        metadata: {
                            ...(order.metadata || {}),
                            retryCount: retryCount + 1,
                            nextRetryAt: nextRetryAt.toISOString(),
                            lastRetryError: errorMessage,
                        },
                    },
                });
                logger.warn(`Order ${orderId} retry ${retryCount + 1}/${this.config.maxRetries} scheduled`, {
                    type: 'order_retry',
                    meta: { orderId, retryCount, error: errorMessage, nextRetryAt },
                });
                return {
                    success: false,
                    attempt: retryCount + 1,
                    nextRetryAt,
                    error: errorMessage,
                    shouldRefund: false,
                };
            }
            else {
                // Non-retryable error or max retries reached
                logger.error(`Order ${orderId} failed permanently after ${retryCount} retries`, {
                    type: 'order_retry',
                    meta: { orderId, retryCount, error: errorMessage, isRetryable },
                });
                return {
                    success: false,
                    attempt: retryCount + 1,
                    error: errorMessage,
                    shouldRefund: true, // Trigger refund
                };
            }
        }
    }
    /**
     * Determine if an error is retryable (transient) or permanent
     */
    isRetryableError(errorMessage) {
        const retryablePatterns = [
            /timeout/i,
            /connection.*refused/i,
            /connection.*reset/i,
            /econnreset/i,
            /econnrefused/i,
            /temporarily unavailable/i,
            /service.*unavailable/i,
            /503/,
            /429/, // Rate limit
            /gateway.*timeout/i,
            /bad.*gateway/i,
        ];
        return retryablePatterns.some((pattern) => pattern.test(errorMessage));
    }
    /**
     * Process all pending retries (run by background job)
     */
    async processPendingRetries() {
        const now = new Date();
        // Find orders with PROCESSING or FAILED status
        const ordersToRetry = await prisma.order.findMany({
            where: {
                status: { in: ['PROCESSING', 'FAILED'] },
            },
            take: 100, // Fetch more to filter in memory
        });
        let succeeded = 0;
        let refunded = 0;
        for (const order of ordersToRetry) {
            const retryData = order.metadata || {};
            const nextRetryAt = retryData.nextRetryAt ? new Date(retryData.nextRetryAt) : null;
            if (!nextRetryAt || nextRetryAt > now) {
                continue; // Not yet time to retry
            }
            const result = await this.retrySupplierOrder(order.id);
            if (result.success) {
                succeeded++;
            }
            else if (result.shouldRefund) {
                refunded++;
                // Trigger refund (see auto-refund service)
            }
        }
        logger.info(`Retry batch processed: ${ordersToRetry.length} checked`, {
            type: 'order_retry',
            meta: { processed: ordersToRetry.length, succeeded, refunded },
        });
        return { processed: ordersToRetry.length, succeeded, refunded };
    }
}
exports.OrderRetryService = OrderRetryService;
// Export singleton
exports.orderRetryService = new OrderRetryService();
//# sourceMappingURL=order.retry.js.map