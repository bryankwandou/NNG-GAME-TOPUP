/**
 * Poll pending orders and update their status
 * This job should run every 5-10 minutes
 */
export declare function pollPendingOrders(): Promise<void>;
/**
 * Cleanup expired/stuck orders
 * This job should run daily
 */
export declare function cleanupStaleOrders(): Promise<void>;
//# sourceMappingURL=order.jobs.d.ts.map