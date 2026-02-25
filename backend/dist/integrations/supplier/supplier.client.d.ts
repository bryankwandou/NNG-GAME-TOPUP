export interface SupplierOrderPayload {
    productCode: string;
    targetGameId: string;
    quantity: number;
    clientReference: string;
}
export interface SupplierOrderResponse {
    success: boolean;
    status: 'success' | 'processing' | 'failed';
    externalRef: string;
    message?: string;
    data?: any;
}
export interface SupplierStatusResponse {
    status: 'success' | 'processing' | 'failed' | 'unknown';
    externalRef: string;
    data?: any;
}
/**
 * SupplierClient is an abstraction layer that handles all supplier API calls.
 * This encapsulates authentication, retries, error handling, and payload signing.
 *
 * In production, you would swap this with your actual supplier's API details.
 * The interface remains the same, only the implementation details change.
 */
export declare class SupplierClient {
    private axios;
    private apiKey;
    private apiSecret;
    private baseUrl;
    constructor();
    /**
     * Generate signature for request authentication
     */
    private generateSignature;
    /**
     * Setup retry interceptor for transient failures
     */
    private setupRetryInterceptor;
    /**
     * Create an order with the supplier (top-up request)
     */
    createOrder(payload: SupplierOrderPayload): Promise<SupplierOrderResponse>;
    /**
     * Check status of an order
     */
    checkOrderStatus(externalRef: string): Promise<SupplierStatusResponse>;
    /**
     * Cancel an order
     */
    cancelOrder(externalRef: string): Promise<{
        success: boolean;
        message?: string;
    }>;
    /**
     * Get available products from supplier
     */
    getAvailableProducts(): Promise<any>;
    /**
     * Validate supplier credentials
     */
    validateConnection(): Promise<boolean>;
}
export declare const supplierClient: SupplierClient;
//# sourceMappingURL=supplier.client.d.ts.map