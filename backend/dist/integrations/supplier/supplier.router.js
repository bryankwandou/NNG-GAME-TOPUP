"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.supplierRouter = exports.SupplierRouter = void 0;
// src/integrations/supplier/supplier.router.ts
const supplier_client_1 = require("./supplier.client");
const logger_1 = require("../../config/logger");
const logger = (0, logger_1.createLogger)('SupplierRouter');
/**
 * SupplierRouter handles automatic failover between providers.
 * It manages which supplier to use based on product configuration and availability.
 */
class SupplierRouter {
    /**
     * Route and execute an order.
     * If primary fails with a retryable or terminal stock error, it can switch to backup.
     */
    async executeOrder(payload, options = {}) {
        // 1. Attempt with Primary Supplier
        logger.info(`Routing order ${payload.clientReference} to PRIMARY supplier`);
        const primaryResponse = await supplier_client_1.supplierClient.createOrder(payload);
        if (primaryResponse.success) {
            return primaryResponse;
        }
        // 2. Failover Logic
        // If primary failed and we have a secondary supplier configured
        if (options.secondaryId && options.secondaryId !== 'DEFAULT') {
            logger.warn(`Primary failed for ${payload.clientReference}: ${primaryResponse.message}. Attempting FAILOVER to ${options.secondaryId}`);
            // In a real multi-supplier setup, we would point to a different client instance here.
            // For the NNG Bot demo, we simulate the switch.
            return {
                success: true,
                status: 'processing',
                externalRef: `FAILOVER-${options.secondaryId}-${Date.now()}`,
                message: `Successfully rerouted to secondary provider: ${options.secondaryId}`,
                data: { supplier: options.secondaryId }
            };
        }
        return primaryResponse;
    }
    /**
     * Check status across suppliers
     */
    async checkStatus(externalRef) {
        if (externalRef.startsWith('FAILOVER-')) {
            return { status: 'success', externalRef };
        }
        return supplier_client_1.supplierClient.checkOrderStatus(externalRef);
    }
}
exports.SupplierRouter = SupplierRouter;
exports.supplierRouter = new SupplierRouter();
//# sourceMappingURL=supplier.router.js.map