import { PrismaClient } from '@prisma/client';
import { PricingConfigManager } from '../../config/pricing.config';
export interface SustainabilityMetrics {
    periodStart: Date;
    periodEnd: Date;
    totalOrders: number;
    totalOrderValue: number;
    totalProfit: number;
    isBreakEven: boolean;
    netProfitAfterCosts: number;
    profitMarginRate: number;
    estimatedElectricityCost: number;
    estimatedHostingCost: number;
    estimatedMaintenanceCost: number;
    totalOperatingCost: number;
    ordersNeededToBreakEven: number;
    daysUntilBreakEven: number;
}
export declare class SustainabilityService {
    private prisma;
    private configManager;
    constructor(prisma: PrismaClient, configManager: PricingConfigManager);
    calculateMetrics(startDate: Date, endDate: Date): Promise<SustainabilityMetrics>;
}
//# sourceMappingURL=sustainability.service.d.ts.map