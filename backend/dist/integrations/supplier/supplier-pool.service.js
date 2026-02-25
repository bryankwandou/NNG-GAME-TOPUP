"use strict";
/**
 * Supplier Pool Service (Phase G.2)
 *
 * Implements multi-supplier failover and load balancing.
 * Selects best available supplier based on:
 * - Health status (healthy > degraded > down)
 * - Priority (primary > secondary > tertiary)
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierPoolService = void 0;
exports.initializeSupplierPoolService = initializeSupplierPoolService;
exports.getSupplierPoolService = getSupplierPoolService;
const logger_1 = require("../../config/logger");
class SupplierPoolService {
    constructor(prisma) {
        this.MOVING_AVERAGE_WINDOW = 100;
        this.prisma = prisma;
    }
    async selectSupplier(criteria) {
        const { productCode, excludedPanelIds = [] } = criteria;
        const availablePanels = await this.prisma.supplierPanel.findMany({
            where: {
                isActive: true,
                id: { notIn: excludedPanelIds },
                products: {
                    some: {
                        productCode,
                        isAvailable: true,
                    },
                },
            },
            orderBy: [
                { priority: 'asc' },
                { successRate: 'desc' },
            ],
        });
        if (!availablePanels.length) {
            throw new Error(`No available supplier found for product: ${productCode}`);
        }
        return availablePanels[0];
    }
    async recordSupplierMetric(panelId, responseTimeMs, isSuccess) {
        try {
            const panel = await this.prisma.supplierPanel.findUnique({
                where: { id: panelId },
            });
            if (!panel)
                return;
            const newSuccessCount = isSuccess ? 1 : 0;
            const newSuccessRate = (panel.successRate * (this.MOVING_AVERAGE_WINDOW - 1) + newSuccessCount) /
                this.MOVING_AVERAGE_WINDOW;
            const newAvgResponseTime = (panel.avgResponseTimeMs * (this.MOVING_AVERAGE_WINDOW - 1) + responseTimeMs) /
                this.MOVING_AVERAGE_WINDOW;
            await this.prisma.supplierPanel.update({
                where: { id: panelId },
                data: {
                    successRate: newSuccessRate,
                    avgResponseTimeMs: Math.round(newAvgResponseTime),
                    totalRequests: { increment: 1 },
                    totalSuccesses: isSuccess ? { increment: 1 } : undefined,
                    totalFailures: !isSuccess ? { increment: 1 } : undefined,
                },
            });
            await this.prisma.supplierHealthMetric.create({
                data: {
                    panelId,
                    responseTimeMs,
                    isHealthy: isSuccess,
                },
            });
        }
        catch (error) {
            logger_1.logger.error('Failed to record supplier metric', { panelId, error });
        }
    }
}
exports.SupplierPoolService = SupplierPoolService;
let supplierPoolServiceInstance = null;
function initializeSupplierPoolService(prisma) {
    if (!supplierPoolServiceInstance) {
        supplierPoolServiceInstance = new SupplierPoolService(prisma);
    }
    return supplierPoolServiceInstance;
}
function getSupplierPoolService() {
    if (!supplierPoolServiceInstance) {
        throw new Error('SupplierPoolService not initialized');
    }
    return supplierPoolServiceInstance;
}
//# sourceMappingURL=supplier-pool.service.js.map