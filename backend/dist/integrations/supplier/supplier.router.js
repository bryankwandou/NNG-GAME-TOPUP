"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.supplierRouter = exports.SupplierRouter = void 0;
const supplier_client_1 = require("./supplier.client");
const supplier_pool_service_1 = require("./supplier-pool.service");
const logger_1 = require("../../config/logger");
const logger = (0, logger_1.createLogger)('SupplierRouter');
/**
 * SupplierRouter handles automatic failover between providers by leveraging SupplierPoolService.
 */
class SupplierRouter {
    /**
     * Route and execute an order with intelligent failover.
     */
    async executeOrder(payload, _options = {}) {
        const pool = (0, supplier_pool_service_1.getSupplierPoolService)();
        return pool.executeWithFailover({ productCode: payload.productCode }, async (panel) => {
            logger.info(`Routing order ${payload.clientReference} to supplier pool member: ${panel.name}`);
            // In a production environment, you would use panel-specific API clients here.
            // For this project, we use the standardized supplierClient.
            const response = await supplier_client_1.supplierClient.createOrder(payload);
            return {
                success: response.success,
                panelId: panel.id,
                panelName: panel.name,
                status: response.status,
                externalRef: response.externalRef || `PENDING-${Date.now()}`,
                errorMessage: response.message,
                responseTimeMs: 0
            };
        });
    }
    /**
     * Check status across suppliers
     */
    async checkStatus(externalRef) {
        return supplier_client_1.supplierClient.checkOrderStatus(externalRef);
    }
}
exports.SupplierRouter = SupplierRouter;
exports.supplierRouter = new SupplierRouter();
//# sourceMappingURL=supplier.router.js.map