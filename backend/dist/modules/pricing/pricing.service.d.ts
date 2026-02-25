import { PrismaClient, ResellerTier } from '@prisma/client';
export interface PriceCalculationResult {
    costPrice: bigint;
    taxComponent: bigint;
    overheadAllocation: bigint;
    margin: bigint;
    finalPrice: bigint;
    totalPrice: bigint;
    marginRate: number;
    breakdown: {
        supplier: number;
        tax: number;
        overhead: number;
        paymentFee: number;
        margin: number;
        pph: number;
    };
    warnings: string[];
}
export declare class PricingService {
    private prisma;
    private configManager;
    constructor(prisma: PrismaClient, pricingConfig?: import("../../config/pricing.config").PricingConfig);
    private getTierKey;
    calculatePriceWithTax(productCode: string, resellerTier: ResellerTier, quantity?: number): Promise<PriceCalculationResult>;
}
export declare const pricingService: PricingService;
export declare function getResellerPrice(productCode: string, tier: ResellerTier): Promise<bigint>;
//# sourceMappingURL=pricing.service.d.ts.map