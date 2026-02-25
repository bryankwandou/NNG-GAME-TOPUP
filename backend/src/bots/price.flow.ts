import { PrismaClient } from '@prisma/client';
import { CommandContext } from './command.registry';
import { PriceBreakdownService } from '../modules/pricing/price-breakdown.service';
import { getFairnessEmoji } from './order-message-templates';

export class PriceFlow {
    constructor(
        private prisma: PrismaClient,
        private priceBreakdownService: PriceBreakdownService
    ) { }

    async handlePriceCommand(ctx: CommandContext): Promise<void> {
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
        let userTier: any = 'BRONZE';
        if (ctx.userId) {
            const reseller = await this.prisma.reseller.findUnique({ where: { id: ctx.userId } });
            if (reseller) userTier = reseller.tier;
        }

        const breakdown = await this.priceBreakdownService.generatePriceBreakdown(
            productCode,
            0,
            userTier
        );

        const emoji = getFairnessEmoji(breakdown.fairnessRating);

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
        } else {
            await ctx.send(pricingMessage + `\n\nReply with \`/order ${productCode}\` to purchase.`);
        }
    }
}
