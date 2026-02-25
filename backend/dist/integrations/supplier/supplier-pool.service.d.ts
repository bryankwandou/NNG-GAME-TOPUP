/**
 * Supplier Pool Service (Phase G.2)
 *
 * Implements multi-supplier failover and load balancing.
 * Selects best available supplier based on:
 * - Health status (healthy > degraded > down)
 * - Priority (primary > secondary > tertiary)
 */
import { PrismaClient } from '@prisma/client';
export interface SupplierHealthCheckResult {
    panelId: string;
    panelName: string;
    isHealthy: boolean;
    responseTimeMs: number;
    statusCode?: number;
    errorMessage?: string;
    timestamp: Date;
}
export interface SupplierSelectionCriteria {
    productCode: string;
    preferredPanelId?: string;
    excludedPanelIds?: string[];
}
export interface SupplierOrderResponse {
    success: boolean;
    panelId: string;
    panelName: string;
    externalRef?: string;
    status: 'success' | 'processing' | 'failed';
    errorMessage?: string;
    responseTimeMs: number;
}
export declare class SupplierPoolService {
    private prisma;
    private readonly MOVING_AVERAGE_WINDOW;
    constructor(prisma: PrismaClient);
    selectSupplier(criteria: SupplierSelectionCriteria): Promise<any>;
    /**
     * Execute an order with automatic failover across the pool
     */
    executeWithFailover(criteria: SupplierSelectionCriteria, executionFn: (panel: any) => Promise<SupplierOrderResponse>): Promise<SupplierOrderResponse>;
    recordSupplierMetric(panelId: string, responseTimeMs: number, isSuccess: boolean): Promise<void>;
}
export declare function initializeSupplierPoolService(prisma: PrismaClient): SupplierPoolService;
export declare function getSupplierPoolService(): SupplierPoolService;
//# sourceMappingURL=supplier-pool.service.d.ts.map