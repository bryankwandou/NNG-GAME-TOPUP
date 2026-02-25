import { ResellerTier } from '@prisma/client';
import { CommandContext } from '../command.registry';
import { PricingService } from '../../modules/pricing/pricing.service';
export interface PriceCheckResult {
    productName: string;
    denomination: number;
    currentTierPrice: bigint;
    currentTier: ResellerTier;
    breakdown: {
        supplier: bigint;
        tax: bigint;
        overhead: bigint;
        margin: bigint;
    };
    tierComparison: {
        tier: ResellerTier;
        price: bigint;
        savingsPercent: number;
    }[];
    quickOrderCommand: string;
}
export declare class PriceCheckCommand {
    private prisma;
    private pricingService;
    constructor(prisma: any, pricingService: PricingService);
    execute(context: CommandContext): Promise<void>;
    private findProduct;
    private calculateTierComparison;
    private formatPriceResponse;
}
//# sourceMappingURL=price-check.command.d.ts.map