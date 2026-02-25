"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeScheduler = initializeScheduler;
const node_cron_1 = __importDefault(require("node-cron"));
const tier_jobs_1 = require("./tier.jobs");
const order_jobs_1 = require("./order.jobs");
const analytics_jobs_1 = require("./analytics.jobs");
const order_retry_1 = require("../orders/order.retry");
const margin_watchdog_1 = require("../pricing/margin.watchdog");
const logger_1 = require("../../config/logger");
const client_1 = require("@prisma/client");
const logger = (0, logger_1.createLogger)('Scheduler');
const prisma = new client_1.PrismaClient();
/**
 * Initialize all scheduled jobs
 */
function initializeScheduler() {
    logger.info('Initializing job scheduler');
    // Run ethical margin watchdog every 12 hours (noon and midnight)
    node_cron_1.default.schedule('0 0,12 * * *', async () => {
        try {
            const watchdog = new margin_watchdog_1.MarginWatchdog(prisma);
            await watchdog.detectPredatoryMargins();
        }
        catch (error) {
            logger.error('Scheduled job failed: detectPredatoryMargins', { error });
        }
    });
    // Generate daily profit report at 23:55 every day
    node_cron_1.default.schedule('55 23 * * *', async () => {
        try {
            await (0, analytics_jobs_1.generateDailyProfitReport)();
        }
        catch (error) {
            logger.error('Scheduled job failed: generateDailyProfitReport', { error });
        }
    });
    // Process order retries with exponential backoff (every minute)
    node_cron_1.default.schedule('* * * * *', async () => {
        try {
            await order_retry_1.orderRetryService.processPendingRetries();
        }
        catch (error) {
            logger.error('Scheduled job failed: processPendingRetries', { error });
        }
    });
    // Poll pending orders every 5 minutes
    node_cron_1.default.schedule('*/5 * * * *', async () => {
        try {
            await (0, order_jobs_1.pollPendingOrders)();
        }
        catch (error) {
            logger.error('Scheduled job failed: pollPendingOrders', { error });
        }
    });
    // Update reseller tiers daily at 1 AM
    node_cron_1.default.schedule('0 1 * * *', async () => {
        try {
            await (0, tier_jobs_1.updateResellerTiers)();
        }
        catch (error) {
            logger.error('Scheduled job failed: updateResellerTiers', { error });
        }
    });
    // Cleanup stale orders daily at 2 AM
    node_cron_1.default.schedule('0 2 * * *', async () => {
        try {
            await (0, order_jobs_1.cleanupStaleOrders)();
        }
        catch (error) {
            logger.error('Scheduled job failed: cleanupStaleOrders', { error });
        }
    });
    // Reset monthly turnover on 1st of each month at midnight
    node_cron_1.default.schedule('0 0 1 * *', async () => {
        try {
            await (0, tier_jobs_1.resetMonthlyTurnover)();
        }
        catch (error) {
            logger.error('Scheduled job failed: resetMonthlyTurnover', { error });
        }
    });
    logger.info('Job scheduler initialized successfully');
}
//# sourceMappingURL=scheduler.js.map