/**
 * Order Retry Strategy with Exponential Backoff
 * Handles provider failures gracefully with automatic retries
 */
export interface RetryConfig {
    maxRetries: number;
    initialDelayMs: number;
    maxDelayMs: number;
    backoffMultiplier: number;
    jitterFactor: number;
}
export declare const DEFAULT_RETRY_CONFIG: RetryConfig;
export interface RetryResult {
    success: boolean;
    attempt: number;
    nextRetryAt?: Date;
    error?: string;
    shouldRefund: boolean;
}
export declare class OrderRetryService {
    private config;
    constructor(config?: RetryConfig);
    /**
     * Calculate delay for next retry with exponential backoff + jitter
     * Formula: delay = min(initialDelay * multiplier^attempt, maxDelay) * (1 ± jitter)
     */
    private calculateBackoffDelay;
    /**
     * Retry supplier order with exponential backoff
     */
    retrySupplierOrder(orderId: string): Promise<RetryResult>;
    /**
     * Determine if an error is retryable (transient) or permanent
     */
    isRetryableError(errorMessage: string): boolean;
    /**
     * Process all pending retries (run by background job)
     */
    processPendingRetries(): Promise<{
        processed: number;
        succeeded: number;
        refunded: number;
    }>;
}
export declare const orderRetryService: OrderRetryService;
//# sourceMappingURL=order.retry.d.ts.map