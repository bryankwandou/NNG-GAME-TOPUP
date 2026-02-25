import { SupplierOrderPayload, SupplierOrderResponse } from './supplier.client';
/**
 * SupplierRouter handles automatic failover between providers by leveraging SupplierPoolService.
 */
export declare class SupplierRouter {
    /**
     * Route and execute an order with intelligent failover.
     */
    executeOrder(payload: SupplierOrderPayload, _options?: {
        secondaryId?: string;
    }): Promise<SupplierOrderResponse>;
    /**
     * Check status across suppliers
     */
    checkStatus(externalRef: string): Promise<any>;
}
export declare const supplierRouter: SupplierRouter;
//# sourceMappingURL=supplier.router.d.ts.map