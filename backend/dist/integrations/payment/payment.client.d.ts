export interface CreateInvoicePayload {
    externalRef: string;
    amount: bigint;
    description: string;
    customerEmail?: string;
    customerPhone?: string;
    expiryMinutes?: number;
}
export interface CreateInvoiceResponse {
    success: boolean;
    invoiceId: string;
    url?: string;
    qrCode?: string;
    virtualAccountNumber?: string;
    bankName?: string;
    expiresAt?: Date;
    message?: string;
}
export interface WebhookPayload {
    invoiceId: string;
    externalRef: string;
    status: 'paid' | 'failed' | 'expired';
    amount: bigint;
    paidAt?: string;
    signature?: string;
    [key: string]: any;
}
/**
 * PaymentClient is an abstraction layer for payment gateway operations.
 * This encapsulates all payment-related logic, signatures, and API calls.
 *
 * In production, you would implement this for your actual payment provider
 * (Midtrans, DOKU, Xendit, Stripe, etc.). The interface stays the same.
 */
export declare class PaymentClient {
    private axios;
    private merchantId;
    private apiKey;
    private apiSecret;
    private baseUrl;
    constructor();
    /**
     * Generate signature for webhook validation
     */
    private generateSignature;
    /**
     * Verify webhook signature
     */
    verifyWebhookSignature(payload: any, signature: string): boolean;
    /**
     * Create an invoice/payment request
     */
    createInvoice(payload: CreateInvoicePayload): Promise<CreateInvoiceResponse>;
    /**
     * Check payment status
     */
    checkPaymentStatus(invoiceId: string): Promise<{
        status: 'paid' | 'pending' | 'failed' | 'expired' | 'unknown';
        data?: any;
    }>;
    /**
     * Cancel an invoice
     */
    cancelInvoice(invoiceId: string): Promise<{
        success: boolean;
        message?: string;
    }>;
    /**
     * Validate payment gateway connection
     */
    validateConnection(): Promise<boolean>;
}
//# sourceMappingURL=payment.client.d.ts.map