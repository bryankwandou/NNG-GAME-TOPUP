"use strict";
/**
 * Price Breakdown Service (Full Implementation)
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.priceBreakdownService = exports.PriceBreakdownService = void 0;
const client_1 = require("@prisma/client");
const pricing_config_1 = require("../../config/pricing.config");
class PriceBreakdownService {
    constructor(prisma, pricingConfig) {
        this.prisma = prisma;
        this.pricingConfig = pricingConfig;
    }
    async generatePriceBreakdown(productCode, denomination, tier) {
        const product = await this.prisma.product.findUnique({
            where: { code: productCode },
        });
        if (!product)
            throw new Error(`Product not found: ${productCode}`);
        const costBase = Number(product.costPrice);
        const config = this.pricingConfig;
        const overhead = Math.round((config.overhead.monthlyElectricity +
            config.overhead.monthlyHosting +
            config.overhead.monthlyDomain +
            config.overhead.monthlyBotMaintenance) /
            config.overhead.estimatedMonthlyOrders);
        const subtotalPreTax = costBase + overhead;
        const ppn = Math.round(subtotalPreTax * config.tax.ppn);
        const tierMap = {
            BRONZE: 'endUser',
            SILVER: 'reseller',
            GOLD: 'distributor',
            AGENCY: 'agency',
        };
        const marginRate = config.margins[tierMap[tier]].targetMarginRate;
        const margin = Math.round((subtotalPreTax + ppn) * marginRate);
        const pph = Math.round(margin * config.tax.pph);
        const finalPrice = subtotalPreTax + ppn + margin + pph;
        const fairnessRating = marginRate <= 0.05 ? 'excellent' : marginRate <= 0.1 ? 'good' : 'fair';
        const fairnessMessage = fairnessRating === 'excellent'
            ? 'This price is strictly regulated for maximum community benefit.'
            : 'Fair pricing guaranteed with transparent margin.';
        return {
            product: {
                code: productCode,
                gameName: product.gameName,
                denomination,
            },
            tier,
            tierLabel: tier.charAt(0) + tier.slice(1).toLowerCase(),
            costComponents: {
                supplierPrice: BigInt(costBase),
                overhead: BigInt(overhead),
                subtotalPreTax: BigInt(subtotalPreTax),
            },
            taxComponents: {
                ppn: BigInt(ppn),
                pph: BigInt(pph),
            },
            margin: BigInt(margin),
            finalPrice: BigInt(finalPrice),
            targetMarginRate: marginRate,
            actualMarginAmount: BigInt(margin),
            ppnAmount: BigInt(ppn),
            pphAmount: BigInt(pph),
            supplierCost: BigInt(costBase),
            overheadPerOrder: BigInt(overhead),
            fairnessRating,
            fairnessMessage,
        };
    }
}
exports.PriceBreakdownService = PriceBreakdownService;
exports.priceBreakdownService = new PriceBreakdownService(new client_1.PrismaClient(), pricing_config_1.pricingConfigManager.getConfig());
//# sourceMappingURL=price-breakdown.service.js.map