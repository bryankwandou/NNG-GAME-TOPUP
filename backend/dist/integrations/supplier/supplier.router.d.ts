import { SupplierOrderPayload, SupplierOrderResponse } from './supplier.client';
/**
 * SupplierRouter handles automatic failover between providers.
 * It manages which supplier to use based on product configuration and availability.
 */
export declare class SupplierRouter {
    /**
     * Route and execute an order.
     * If primary fails with a retryable or terminal stock error, it can switch to backup.
     */
    executeOrder(payload: SupplierOrderPayload, options?: {
        secondaryId?: string;
    }): Promise<SupplierOrderResponse>;
    /**
     * Check status across suppliers
     */
    checkStatus(externalRef: string): Promise<any>;
}
export declare const supplierRouter: SupplierRouter;
//# sourceMappingURL=supplier.router.d.ts.map