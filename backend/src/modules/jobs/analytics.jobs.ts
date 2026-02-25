import { PrismaClient } from '@prisma/client';
import { SustainabilityService } from '../analytics/sustainability.service';
import { pricingConfigManager } from '../../config/pricing.config';
import { createLogger } from '../../config/logger';

const prisma = new PrismaClient();
const logger = createLogger('AnalyticsJobs');

/**
 * Generate daily profit and sustainability report
 * This job should run daily at 23:55
 */
export async function generateDailyProfitReport(): Promise<void> {
    try {
        logger.info('Starting daily profit report generation');

        const sustainabilityService = new SustainabilityService(prisma, pricingConfigManager);

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

    } catch (error) {
        logger.error('Error generating daily profit report', { error });
    }
}
