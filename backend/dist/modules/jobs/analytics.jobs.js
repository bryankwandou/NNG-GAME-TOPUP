"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateDailyProfitReport = generateDailyProfitReport;
const client_1 = require("@prisma/client");
const sustainability_service_1 = require("../analytics/sustainability.service");
const pricing_config_1 = require("../../config/pricing.config");
const logger_1 = require("../../config/logger");
const prisma = new client_1.PrismaClient();
const logger = (0, logger_1.createLogger)('AnalyticsJobs');
/**
 * Generate daily profit and sustainability report
 * This job should run daily at 23:55
 */
async function generateDailyProfitReport() {
    try {
        logger.info('Starting daily profit report generation');
        const sustainabilityService = new sustainability_service_1.SustainabilityService(prisma, pricing_config_1.pricingConfigManager);
        // Calculate for the current day
        const endDate = new Date();
        const startDate = new Date();
        startDate.setHours(0, 0, 0, 0);
        const metrics = await sustainabilityService.calculateMetrics(startDate, endDate);
        // Save report to database or log it for admin transparency
        logger.info(`DAILY PROFIT REPORT: ${startDate.toISOString().split('T')[0]}`, {
            type: 'sustainability_report',
            metrics: {
                totalOrders: metrics.totalOrders,
                totalOrderValue: metrics.totalOrderValue,
                totalProfit: metrics.totalProfit,
                netProfitAfterCostsDailyAvg: metrics.netProfitAfterCosts / 30, // Simplified daily overhead average
                isBreakEven: metrics.isBreakEven,
            }
        });
        // Option: If we had a discord webhook/admin channel configured, we would send this beautifully formatted embed there
    }
    catch (error) {
        logger.error('Error generating daily profit report', { error });
    }
}
//# sourceMappingURL=analytics.jobs.js.map