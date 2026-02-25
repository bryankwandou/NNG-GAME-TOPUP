"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pollPendingOrders = pollPendingOrders;
exports.cleanupStaleOrders = cleanupStaleOrders;
const client_1 = require("@prisma/client");
const supplier_client_1 = require("../../integrations/supplier/supplier.client");
const logger_1 = require("../../config/logger");
const prisma = new client_1.PrismaClient();
/**
 * Poll pending orders and update their status
 * This job should run every 5-10 minutes
 */
async function pollPendingOrders() {
    try {
        logger_1.logger.info('Starting pending orders polling job');
        const pendingOrders = await prisma.order.findMany({
            where: {
                status: 'PROCESSING',
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
                if (!order.externalRef)
                    continue;
                const status = await supplier_client_1.SupplierClient.checkOrderStatus(order.externalRef);
                if (status.status === 'success') {
                    await prisma.order.update({
                        where: { id: order.id },
                        data: {
                            status: 'SUCCESS',
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
                    logger_1.logger.info('Order completed', { orderId: order.id });
                    updated++;
                }
                else if (status.status === 'failed') {
                    await prisma.order.update({
                        where: { id: order.id },
                        data: {
                            status: 'FAILED',
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
                    logger_1.logger.warn('Order failed and refunded', {
                        orderId: order.id,
                        reason: status.message
                    });
                    updated++;
                }
            }
            catch (error) {
                logger_1.logger.error('Error checking order status', {
                    orderId: order.id,
                    error
                });
            }
        }
        logger_1.logger.info('Pending orders polling job completed', {
            checked: pendingOrders.length,
            updated
        });
    }
    catch (error) {
        logger_1.logger.error('Error in pending orders polling job', { error });
        throw error;
    }
}
/**
 * Cleanup expired/stuck orders
 * This job should run daily
 */
async function cleanupStaleOrders() {
    try {
        logger_1.logger.info('Starting stale orders cleanup job');
        const staleDate = new Date();
        staleDate.setHours(staleDate.getHours() - 24); // Orders older than 24 hours
        const staleOrders = await prisma.order.findMany({
            where: {
                status: 'PROCESSING',
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
                    status: 'FAILED',
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
        logger_1.logger.info('Stale orders cleanup completed', { cleaned });
    }
    catch (error) {
        logger_1.logger.error('Error in stale orders cleanup job', { error });
        throw error;
    }
}
//# sourceMappingURL=order.jobs.js.map