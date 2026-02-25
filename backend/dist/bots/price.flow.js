"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceFlow = void 0;
const order_message_templates_1 = require("./order-message-templates");
class PriceFlow {
    constructor(prisma, priceBreakdownService) {
        this.prisma = prisma;
        this.priceBreakdownService = priceBreakdownService;
    }
    async handlePriceCommand(ctx) {
        const productCode = ctx.args[0]?.toUpperCase();
        if (!productCode) {
            await ctx.send('❌ Please specify a product code. \nExample: `/price MLBB_86`');
            return;
        }
        const product = await this.prisma.product.findUnique({
            where: { code: productCode },
        });
        if (!product || !product.active) {
            await ctx.send(`❌ Product \`${productCode}\` not found or currently inactive.`);
            return;
        }
        // Default to BRONZE (End User) tier if user isn't authenticated or to fetch standard prices
        let userTier = 'BRONZE';
        if (ctx.userId) {
            const reseller = await this.prisma.reseller.findUnique({ where: { id: ctx.userId } });
            if (reseller)
                userTier = reseller.tier;
        }
        const breakdown = await this.priceBreakdownService.generatePriceBreakdown(productCode, 0, userTier);
        const emoji = (0, order_message_templates_1.getFairnessEmoji)(breakdown.fairnessRating);
        const pricingMessage = `
🔍 **Price Lookup: ${product.gameName}**
━━━━━━━━━━━━━━━━━━━━━━━━━━

**Product:** \`${productCode}\`
**Name:** ${product.displayName}
**Your Tier:** ${breakdown.tierLabel}

**💰 Transparent Price Breakdown:**
┌─────────────────────────────────────┐
│ 🏭 Base Cost:      Rp ${Number(breakdown.supplierCost).toLocaleString('id-ID')}
│ ⚡ Overhead:       Rp ${Number(breakdown.overheadPerOrder).toLocaleString('id-ID')}
│ 📈 Tax (PPN+PPh):  Rp ${Number(breakdown.ppnAmount + breakdown.pphAmount).toLocaleString('id-ID')}
│ 🎯 Margin (${(breakdown.targetMarginRate * 100).toFixed(0)}%):  Rp ${Number(breakdown.actualMarginAmount).toLocaleString('id-ID')}
├─────────────┬───────────────────────┤
│ **FINAL PRICE** │ **Rp ${Number(breakdown.finalPrice).toLocaleString('id-ID')}** │
└─────────────┴───────────────────────┘

${emoji} **Fairness Rating: ${breakdown.fairnessRating.toUpperCase()}**
_${breakdown.fairnessMessage}_
    `.trim();
        if (ctx.sendEmbed) {
            await ctx.sendEmbed({
                text: pricingMessage,
                buttons: [
                    {
                        id: `cmd:order:${productCode}`,
                        label: '🛒 Buy Now',
                        style: 'success',
                        emoji: '💳'
                    }
                ]
            });
        }
        else {
            await ctx.send(pricingMessage + `\n\nReply with \`/order ${productCode}\` to purchase.`);
        }
    }
}
exports.PriceFlow = PriceFlow;
//# sourceMappingURL=price.flow.js.map