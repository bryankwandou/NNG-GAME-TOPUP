import { supplierClient, SupplierOrderPayload, SupplierOrderResponse } from './supplier.client';
import { getSupplierPoolService } from './supplier-pool.service';
import { createLogger } from '../../config/logger';

const logger = createLogger('SupplierRouter');

/**
 * SupplierRouter handles automatic failover between providers by leveraging SupplierPoolService.
 */
export class SupplierRouter {
    /**
     * Route and execute an order with intelligent failover.
     */
    async executeOrder(
        payload: SupplierOrderPayload,
        _options: { secondaryId?: string } = {}
    ): Promise<SupplierOrderResponse> {
        const pool = getSupplierPoolService();

        return pool.executeWithFailover(
            { productCode: payload.productCode },
            async (panel) => {
                logger.info(`Routing order ${payload.clientReference} to supplier pool member: ${panel.name}`);

                // In a production environment, you would use panel-specific API clients here.
                // For this project, we use the standardized supplierClient.
                const response = await supplierClient.createOrder(payload);

                return {
                    success: response.success,
                    panelId: panel.id,
                    panelName: panel.name,
                    status: response.status as any,
                    externalRef: response.externalRef || `PENDING-${Date.now()}`,
                    errorMessage: response.message,
                    responseTimeMs: 0
                } as any;
            }
        ) as any;
    }

    /**
     * Check status across suppliers
     */
    async checkStatus(externalRef: string): Promise<any> {
        return supplierClient.checkOrderStatus(externalRef);
    }
}

export const supplierRouter = new SupplierRouter();
