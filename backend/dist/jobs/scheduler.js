"use strict";
/**
 * Background Job Scheduler
 * Manages periodic tasks: retry processing, refund processing, polling, cleanup
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.jobScheduler = exports.JobScheduler = void 0;
const cron = __importStar(require("node-cron"));
const order_retry_1 = require("../modules/orders/order.retry");
const order_refund_1 = require("../modules/orders/order.refund");
const orders_service_1 = require("../modules/orders/orders.service");
const logger_1 = require("../config/logger");
const logger = (0, logger_1.createLogger)('JobScheduler');
class JobScheduler {
    constructor() {
        this.jobs = new Map();
        this.isRunning = false;
    }
    /**
     * Start all scheduled jobs
     */
    async start() {
        if (this.isRunning) {
            logger.warn('JobScheduler already running', { type: 'jobs' });
            return;
        }
        logger.info('Starting background job scheduler', { type: 'jobs' });
        // Job 1: Process pending retries every 30 seconds
        // Handles orders stuck in 'processing' state
        this.scheduleJob('retry_processor', '*/30 * * * * *', async () => {
            try {
                const result = await order_retry_1.orderRetryService.processPendingRetries();
                if (result.processed > 0) {
                    logger.debug(`Retry processor: ${result.processed} checked, ${result.succeeded} succeeded`, {
                        type: 'jobs',
                        meta: result,
                    });
                }
            }
            catch (error) {
                logger.error('Retry processor job failed', {
                    type: 'jobs',
                    meta: { error: error.message },
                });
            }
        });
        // Job 2: Process pending refunds every 1 minute
        // Handles orders in 'failed' state that need refunds
        this.scheduleJob('refund_processor', '*/1 * * * *', async () => {
            try {
                const result = await order_refund_1.autoRefundService.processPendingRefunds();
                if (result.processed > 0) {
                    logger.debug(`Refund processor: ${result.processed} checked, ${result.succeeded} refunded`, {
                        type: 'jobs',
                        meta: result,
                    });
                }
            }
            catch (error) {
                logger.error('Refund processor job failed', {
                    type: 'jobs',
                    meta: { error: error.message },
                });
            }
        });
        // Job 3: Poll supplier for pending orders every 5 minutes
        // Checks status of orders in 'processing' state via supplier API
        this.scheduleJob('supplier_poller', '*/5 * * * *', async () => {
            try {
                await (0, orders_service_1.pollPendingOrders)();
                logger.debug('Supplier poller completed', { type: 'jobs' });
            }
            catch (error) {
                logger.error('Supplier poller job failed', {
                    type: 'jobs',
                    meta: { error: error.message },
                });
            }
        });
        // Job 4: Cleanup old orders and logs every 6 hours
        // Archives/deletes orders older than 90 days
        this.scheduleJob('cleanup', '0 */6 * * *', async () => {
            try {
                await this.cleanupOldData();
                logger.info('Cleanup job completed', { type: 'jobs' });
            }
            catch (error) {
                logger.error('Cleanup job failed', {
                    type: 'jobs',
                    meta: { error: error.message },
                });
            }
        });
        // Job 5: Health check every 15 minutes
        // Monitors system health and logs statistics
        this.scheduleJob('health_check', '*/15 * * * *', async () => {
            try {
                await this.performHealthCheck();
            }
            catch (error) {
                logger.error('Health check job failed', {
                    type: 'jobs',
                    meta: { error: error.message },
                });
            }
        });
        this.isRunning = true;
        logger.info('Background job scheduler started successfully', { type: 'jobs' });
    }
    /**
     * Schedule a single cron job
     */
    scheduleJob(name, cronExpression, handler) {
        try {
            const task = cron.schedule(cronExpression, handler, {
                runOnInit: false, // Don't run on startup
            });
            this.jobs.set(name, task);
            logger.info(`Scheduled job: ${name} (${cronExpression})`, { type: 'jobs' });
        }
        catch (error) {
            logger.error(`Failed to schedule job: ${name}`, {
                type: 'jobs',
                meta: { error: error.message },
            });
        }
    }
    /**
     * Cleanup old data
     */
    async cleanupOldData() {
        try {
            const ninetyDaysAgo = new Date();
            ninetyDaysAgo.setDate(ninetyDaysAgo.getDate() - 90);
            // TODO: Implement archival/deletion logic
            logger.info('Old data cleanup completed', {
                type: 'jobs',
                meta: { cleanupDate: ninetyDaysAgo.toISOString() },
            });
        }
        catch (error) {
            logger.error('Cleanup failed', {
                type: 'jobs',
                meta: { error: error.message },
            });
            throw error;
        }
    }
    /**
     * Perform system health check
     */
    async performHealthCheck() {
        try {
            // TODO: Collect health metrics
            // - DB connection status
            // - Queue size
            // - Failed orders count
            // - Average response time
            logger.info('Health check completed', {
                type: 'jobs',
                meta: {
                    timestamp: new Date().toISOString(),
                    scheduledJobs: this.jobs.size,
                },
            });
        }
        catch (error) {
            logger.error('Health check failed', {
                type: 'jobs',
                meta: { error: error.message },
            });
            throw error;
        }
    }
    /**
     * Stop all scheduled jobs
     */
    async stop() {
        logger.info('Stopping background job scheduler', { type: 'jobs' });
        for (const [name, task] of this.jobs) {
            task.stop();
            logger.debug(`Stopped job: ${name}`, { type: 'jobs' });
        }
        this.jobs.clear();
        this.isRunning = false;
        logger.info('Background job scheduler stopped', { type: 'jobs' });
    }
    /**
     * Get job status
     */
    getStatus() {
        return {
            isRunning: this.isRunning,
            jobCount: this.jobs.size,
            jobs: Array.from(this.jobs.keys()),
        };
    }
}
exports.JobScheduler = JobScheduler;
// Export singleton
exports.jobScheduler = new JobScheduler();
//# sourceMappingURL=scheduler.js.map