"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pricingService = exports.PricingService = void 0;
exports.getResellerPrice = getResellerPrice;
const pricing_config_1 = require("../../config/pricing.config");
class PricingService {
    constructor(prisma, pricingConfig = pricing_config_1.DEFAULT_PRICING_CONFIG) {
        this.prisma = prisma;
        this.configManager = new pricing_config_1.PricingConfigManager(pricingConfig);
    }
    getTierKey(tier) {
        switch (tier) {
            case 'BRONZE': return 'endUser';
            case 'SILVER': return 'reseller';
            case 'GOLD': return 'distributor';
            case 'AGENCY': return 'agency';
            default: return 'endUser';
        }
    }
    async calculatePriceWithTax(productCode, resellerTier, quantity = 1) {
        const product = await this.prisma.product.findUnique({
            where: { code: productCode },
        });
        if (!product) {
            throw new Error(`Product not found: ${productCode}`);
        }
        const costBase = Number(product.costPrice);
        const config = this.configManager.getConfig();
        // 1. Calculate Overhead (Electricity, Hosting, Maintenance, Domain)
        const overheadAllocation = Math.round(this.configManager.getPerOrderOverhead());
        // 2. Pre-Tax Subtotal
        const subtotalPreTax = costBase + overheadAllocation;
        // 3. Calculate PPN (Value Added Tax)
        const taxPPN = Math.round(subtotalPreTax * config.tax.ppn);
        // 4. Calculate Margin based on Tier
        const tierKey = this.getTierKey(resellerTier);
        const targetMarginRate = config.margins[tierKey].targetMarginRate;
        const margin = Math.round((subtotalPreTax + taxPPN) * targetMarginRate);
        // 5. Calculate PPh (Income Tax) on Margin
        const taxPPh = Math.round(margin * config.tax.pph);
        // 6. Payment Gateway Fee
        const costBeforeGateway = subtotalPreTax + taxPPN + margin + taxPPh;
        const paymentFee = config.overhead.paymentGatewayFeeSplit
            ? Math.round(costBeforeGateway * config.overhead.paymentGatewayFeeRate)
            : 0;
        const finalPriceUnit = costBeforeGateway + paymentFee;
        const totalFinalPrice = finalPriceUnit * quantity;
        // Validate if margin is ethical
        const validation = this.configManager.validatePrice(tierKey, costBase, finalPriceUnit);
        return {
            costPrice: BigInt(costBase),
            taxComponent: BigInt(taxPPN),
            overheadAllocation: BigInt(overheadAllocation),
            margin: BigInt(margin),
            finalPrice: BigInt(finalPriceUnit),
            totalPrice: BigInt(totalFinalPrice),
            marginRate: (finalPriceUnit - costBase) / costBase,
            breakdown: {
                supplier: costBase,
                tax: taxPPN,
                overhead: overheadAllocation,
                paymentFee,
                margin,
                pph: taxPPh,
            },
            warnings: validation.warnings,
        };
    }
}
exports.PricingService = PricingService;
const database_1 = require("../../config/database");
exports.pricingService = new PricingService(database_1.prisma);
async function getResellerPrice(productCode, tier) {
    const result = await exports.pricingService.calculatePriceWithTax(productCode, tier);
    return result.finalPrice;
}
//# sourceMappingURL=pricing.service.js.map