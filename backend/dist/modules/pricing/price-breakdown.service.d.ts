/**
 * Price Breakdown Service (Full Implementation)
 */
import { PrismaClient, ResellerTier } from '@prisma/client';
import { PricingConfig } from '../../config/pricing.config';
export type FairnessRating = 'excellent' | 'good' | 'fair' | 'concerning' | 'warn' | 'blocked';
export interface DetailedPriceBreakdown {
    product: {
        code: string;
        gameName: string;
        denomination: number;
    };
    tier: ResellerTier;
    tierLabel: string;
    costComponents: {
        supplierPrice: bigint;
        overhead: bigint;
        subtotalPreTax: bigint;
    };
    taxComponents: {
        ppn: bigint;
        pph: bigint;
    };
    margin: bigint;
    finalPrice: bigint;
    targetMarginRate: number;
    actualMarginAmount: bigint;
    ppnAmount: bigint;
    pphAmount: bigint;
    supplierCost: bigint;
    overheadPerOrder: bigint;
    fairnessRating: FairnessRating;
    fairnessMessage: string;
}
export declare class PriceBreakdownService {
    private prisma;
    private pricingConfig;
    constructor(prisma: PrismaClient, pricingConfig: PricingConfig);
    generatePriceBreakdown(productCode: string, denomination: number, tier: ResellerTier): Promise<DetailedPriceBreakdown>;
}
export declare const priceBreakdownService: PriceBreakdownService;
//# sourceMappingURL=price-breakdown.service.d.ts.map