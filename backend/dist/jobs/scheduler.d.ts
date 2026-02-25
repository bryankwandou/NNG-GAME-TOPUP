/**
 * Background Job Scheduler
 * Manages periodic tasks: retry processing, refund processing, polling, cleanup
 */
export declare class JobScheduler {
    private jobs;
    private isRunning;
    /**
     * Start all scheduled jobs
     */
    start(): Promise<void>;
    /**
     * Schedule a single cron job
     */
    private scheduleJob;
    /**
     * Cleanup old data
     */
    private cleanupOldData;
    /**
     * Perform system health check
     */
    private performHealthCheck;
    /**
     * Stop all scheduled jobs
     */
    stop(): Promise<void>;
    /**
     * Get job status
     */
    getStatus(): {
        isRunning: boolean;
        jobCount: number;
        jobs: string[];
    };
}
export declare const jobScheduler: JobScheduler;
//# sourceMappingURL=scheduler.d.ts.map