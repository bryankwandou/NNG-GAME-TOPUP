"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeScheduler = initializeScheduler;
const node_cron_1 = __importDefault(require("node-cron"));
const tier_jobs_1 = require("./tier.jobs");
const order_jobs_1 = require("./order.jobs");
const logger_1 = require("../../config/logger");
const logger = (0, logger_1.createLogger)('Scheduler');
/**
 * Initialize all scheduled jobs
 */
function initializeScheduler() {
    logger.info('Initializing job scheduler');
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