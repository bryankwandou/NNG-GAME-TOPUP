/**
 * Auto-Refund Service
 * Automatically processes refunds when orders fail permanently
 */
export interface RefundRecord {
    orderId: string;
    resellerId: string;
    amount: number;
    reason: string;
    processedAt: Date;
    status: 'pending' | 'completed' | 'failed';
}
export declare class AutoRefundService {
    /**
     * Process refund for a failed order
     * Returns the refunded amount
     */
    refundOrder(orderId: string, reason: string): Promise<{
        success: boolean;
        refundedAmount?: number;
        error?: string;
    }>;
    /**
     * Batch process refunds for orders in failed state
     */
    processPendingRefunds(): Promise<{
        processed: number;
        succeeded: number;
        failed: number;
    }>;
    /**
     * Notify reseller of refund via bot (if we have their chat ID stored)
     */
    private notifyResellerOfRefund;
    /**
     * Create refund audit record
     */
    logRefundAudit(record: RefundRecord): Promise<void>;
}
export declare const autoRefundService: AutoRefundService;
//# sourceMappingURL=order.refund.d.ts.map