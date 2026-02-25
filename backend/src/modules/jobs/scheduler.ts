import cron from 'node-cron';
import { updateResellerTiers, resetMonthlyTurnover } from './tier.jobs';
import { pollPendingOrders, cleanupStaleOrders } from './order.jobs';
import { generateDailyProfitReport } from './analytics.jobs';
import { orderRetryService } from '../orders/order.retry';
import { MarginWatchdog } from '../pricing/margin.watchdog';
import { createLogger } from '../../config/logger';
import { PrismaClient } from '@prisma/client';

const logger = createLogger('Scheduler');
const prisma = new PrismaClient();

/**
 * Initialize all scheduled jobs
 */
export function initializeScheduler(): void {
  logger.info('Initializing job scheduler');

  // Run ethical margin watchdog every 12 hours (noon and midnight)
  cron.schedule('0 0,12 * * *', async () => {
    try {
      const watchdog = new MarginWatchdog(prisma);
      await watchdog.detectPredatoryMargins();
    } catch (error) {
      logger.error('Scheduled job failed: detectPredatoryMargins', { error });
    }
  });

  // Generate daily profit report at 23:55 every day
  cron.schedule('55 23 * * *', async () => {
    try {
      await generateDailyProfitReport();
    } catch (error) {
      logger.error('Scheduled job failed: generateDailyProfitReport', { error });
    }
  });

  // Process order retries with exponential backoff (every minute)
  cron.schedule('* * * * *', async () => {
    try {
      await orderRetryService.processPendingRetries();
    } catch (error) {
      logger.error('Scheduled job failed: processPendingRetries', { error });
    }
  });

  // Poll pending orders every 5 minutes
  cron.schedule('*/5 * * * *', async () => {
    try {
      await pollPendingOrders();
    } catch (error) {
      logger.error('Scheduled job failed: pollPendingOrders', { error });
    }
  });

  // Update reseller tiers daily at 1 AM
  cron.schedule('0 1 * * *', async () => {
    try {
      await updateResellerTiers();
    } catch (error) {
      logger.error('Scheduled job failed: updateResellerTiers', { error });
    }
  });

  // Cleanup stale orders daily at 2 AM
  cron.schedule('0 2 * * *', async () => {
    try {
      await cleanupStaleOrders();
    } catch (error) {
      logger.error('Scheduled job failed: cleanupStaleOrders', { error });
    }
  });

  // Reset monthly turnover on 1st of each month at midnight
  cron.schedule('0 0 1 * *', async () => {
    try {
      await resetMonthlyTurnover();
    } catch (error) {
      logger.error('Scheduled job failed: resetMonthlyTurnover', { error });
    }
  });

  logger.info('Job scheduler initialized successfully');
}
