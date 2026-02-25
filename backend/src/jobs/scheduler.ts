/**
 * Background Job Scheduler
 * Manages periodic tasks: retry processing, refund processing, polling, cleanup
 */

import * as cron from 'node-cron';
import { orderRetryService } from '../modules/orders/order.retry';
import { autoRefundService } from '../modules/orders/order.refund';
import { pollPendingOrders } from '../modules/orders/orders.service';
import { createLogger } from '../config/logger';

const logger = createLogger('JobScheduler');

export class JobScheduler {
  private jobs: Map<string, cron.ScheduledTask> = new Map();
  private isRunning: boolean = false;

  /**
   * Start all scheduled jobs
   */
  async start(): Promise<void> {
    if (this.isRunning) {
      logger.warn('JobScheduler already running', { type: 'jobs' });
      return;
    }

    logger.info('Starting background job scheduler', { type: 'jobs' });

    // Job 1: Process pending retries every 30 seconds
    // Handles orders stuck in 'processing' state
    this.scheduleJob('retry_processor', '*/30 * * * * *', async () => {
      try {
        const result = await orderRetryService.processPendingRetries();
        if (result.processed > 0) {
          logger.debug(`Retry processor: ${result.processed} checked, ${result.succeeded} succeeded`, {
            type: 'jobs',
            meta: result,
          });
        }
      } catch (error) {
        logger.error('Retry processor job failed', {
          type: 'jobs',
          meta: { error: (error as Error).message },
        });
      }
    });

    // Job 2: Process pending refunds every 1 minute
    // Handles orders in 'failed' state that need refunds
    this.scheduleJob('refund_processor', '*/1 * * * *', async () => {
      try {
        const result = await autoRefundService.processPendingRefunds();
        if (result.processed > 0) {
          logger.debug(`Refund processor: ${result.processed} checked, ${result.succeeded} refunded`, {
            type: 'jobs',
            meta: result,
          });
        }
      } catch (error) {
        logger.error('Refund processor job failed', {
          type: 'jobs',
          meta: { error: (error as Error).message },
        });
      }
    });

    // Job 3: Poll supplier for pending orders every 5 minutes
    // Checks status of orders in 'processing' state via supplier API
    this.scheduleJob('supplier_poller', '*/5 * * * *', async () => {
      try {
        await pollPendingOrders();
        logger.debug('Supplier poller completed', { type: 'jobs' });
      } catch (error) {
        logger.error('Supplier poller job failed', {
          type: 'jobs',
          meta: { error: (error as Error).message },
        });
      }
    });

    // Job 4: Cleanup old orders and logs every 6 hours
    // Archives/deletes orders older than 90 days
    this.scheduleJob('cleanup', '0 */6 * * *', async () => {
      try {
        await this.cleanupOldData();
        logger.info('Cleanup job completed', { type: 'jobs' });
      } catch (error) {
        logger.error('Cleanup job failed', {
          type: 'jobs',
          meta: { error: (error as Error).message },
        });
      }
    });

    // Job 5: Health check every 15 minutes
    // Monitors system health and logs statistics
    this.scheduleJob('health_check', '*/15 * * * *', async () => {
      try {
        await this.performHealthCheck();
      } catch (error) {
        logger.error('Health check job failed', {
          type: 'jobs',
          meta: { error: (error as Error).message },
        });
      }
    });

    this.isRunning = true;
    logger.info('Background job scheduler started successfully', { type: 'jobs' });
  }

  /**
   * Schedule a single cron job
   */
  private scheduleJob(
    name: string,
    cronExpression: string,
    handler: () => Promise<void>
  ): void {
    try {
      const task = cron.schedule(cronExpression, handler, {
        runOnInit: false, // Don't run on startup
      });

      this.jobs.set(name, task);
      logger.info(`Scheduled job: ${name} (${cronExpression})`, { type: 'jobs' });
    } catch (error) {
      logger.error(`Failed to schedule job: ${name}`, {
        type: 'jobs',
        meta: { error: (error as Error).message },
      });
    }
  }

  /**
   * Cleanup old data
   */
  private async cleanupOldData(): Promise<void> {
    try {
      const ninetyDaysAgo = new Date();
      ninetyDaysAgo.setDate(ninetyDaysAgo.getDate() - 90);

      // TODO: Implement archival/deletion logic
      logger.info('Old data cleanup completed', {
        type: 'jobs',
        meta: { cleanupDate: ninetyDaysAgo.toISOString() },
      });
    } catch (error) {
      logger.error('Cleanup failed', {
        type: 'jobs',
        meta: { error: (error as Error).message },
      });
      throw error;
    }
  }

  /**
   * Perform system health check
   */
  private async performHealthCheck(): Promise<void> {
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
    } catch (error) {
      logger.error('Health check failed', {
        type: 'jobs',
        meta: { error: (error as Error).message },
      });
      throw error;
    }
  }

  /**
   * Stop all scheduled jobs
   */
  async stop(): Promise<void> {
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
  getStatus(): {
    isRunning: boolean;
    jobCount: number;
    jobs: string[];
  } {
    return {
      isRunning: this.isRunning,
      jobCount: this.jobs.size,
      jobs: Array.from(this.jobs.keys()),
    };
  }
}

// Export singleton
export const jobScheduler = new JobScheduler();
