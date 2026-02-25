"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceCheckCommand = void 0;
// src/bots/commands/price-check.command.ts
const client_1 = require("@prisma/client");
class PriceCheckCommand {
    constructor(prisma, pricingService) {
        this.prisma = prisma;
        this.pricingService = pricingService;
    }
    async execute(context) {
        const [gameName, denomination] = context.args;
        if (!gameName || !denomination) {
            await context.send(`❌ Usage: \`${context.command} <game> <denomination>\`\n` +
                `Example: \`${context.command} mlbb 86\``);
            return;
        }
        const user = await this.prisma.reseller.findFirst({
            where: {
                OR: [
                    { discordUserId: context.userId },
                    { telegramUserId: context.userId },
                    { whatsappPhoneNumber: context.userId }
                ]
            },
        });
        const currentTier = user?.tier || client_1.ResellerTier.BRONZE;
        const product = await this.findProduct(gameName, parseInt(denomination));
        if (!product) {
            await context.send(`❌ Product not found: ${gameName} ${denomination}`);
            return;
        }
        const priceResult = await this.pricingService.calculatePriceWithTax(product.code, currentTier, 1);
        const tierPrices = await this.calculateTierComparison(product.code, currentTier, Number(priceResult.finalPrice));
        const reply = this.formatPriceResponse({
            productName: product.displayName || product.gameName,
            denomination: parseInt(denomination),
            currentTierPrice: priceResult.finalPrice,
            currentTier,
            breakdown: {
                supplier: priceResult.costPrice,
                tax: priceResult.taxComponent,
                overhead: priceResult.overheadAllocation,
                margin: priceResult.margin,
            },
            tierComparison: tierPrices,
            quickOrderCommand: `/order ${product.code} <your_uid>`,
        });
        if (context.sendEmbed) {
            await context.sendEmbed(reply);
        }
        else {
            await context.send(reply.text || 'Price information retrieved.');
        }
    }
    async findProduct(normalizedGame, denomination) {
        const searchTerms = [normalizedGame];
        const aliases = {
            'ml': ['MOBILE_LEGENDS', 'MLBB'],
            'ff': ['FREE_FIRE'],
            'val': ['VALORANT']
        };
        if (aliases[normalizedGame.toLowerCase()]) {
            searchTerms.push(...aliases[normalizedGame.toLowerCase()]);
        }
        return await this.prisma.product.findFirst({
            where: {
                active: true,
                displayName: { contains: denomination.toString() },
                OR: searchTerms.map(term => ({
                    gameName: { contains: term, mode: 'insensitive' },
                })),
            },
        });
    }
    async calculateTierComparison(productCode, currentTier, currentPrice) {
        const tiers = [client_1.ResellerTier.BRONZE, client_1.ResellerTier.SILVER, client_1.ResellerTier.GOLD, client_1.ResellerTier.AGENCY];
        const comparison = [];
        for (const tier of tiers) {
            if (tier === currentTier)
                continue;
            const priceResult = await this.pricingService.calculatePriceWithTax(productCode, tier, 1);
            const tierPrice = Number(priceResult.finalPrice);
            const savingsPercent = ((currentPrice - tierPrice) / currentPrice) * 100;
            if (savingsPercent > 0) {
                comparison.push({ tier, price: priceResult.finalPrice, savingsPercent });
            }
        }
        return comparison;
    }
    formatPriceResponse(result) {
        const formatIDR = (amount) => `Rp ${Number(amount).toLocaleString('id-ID')}`;
        const tierEmoji = { BRONZE: '🥉', SILVER: '🥈', GOLD: '🥇', AGENCY: '💎' };
        let text = `🎮 **${result.productName}** (${result.denomination} units)\n\n`;
        text += `💰 **Your Price** (${tierEmoji[result.currentTier]} ${result.currentTier}): **${formatIDR(result.currentTierPrice)}**\n\n`;
        text += `📊 **Breakdown:**\nSupplier: ${formatIDR(result.breakdown.supplier)}\nTax: ${formatIDR(result.breakdown.tax)}\nOverhead: ${formatIDR(result.breakdown.overhead)}\nMargin: ${formatIDR(result.breakdown.margin)}\n\n`;
        if (result.tierComparison.length > 0) {
            text += `💎 **Save More:**\n` + result.tierComparison.map(t => `${tierEmoji[t.tier]} ${t.tier}: ${formatIDR(t.price)} (-${t.savingsPercent.toFixed(1)}%)`).join('\n') + '\n\n';
        }
        text += `⚡ **Order:** \`${result.quickOrderCommand}\``;
        return { text };
    }
}
exports.PriceCheckCommand = PriceCheckCommand;
//# sourceMappingURL=price-check.command.js.map