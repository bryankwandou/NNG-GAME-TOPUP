"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardFlow = void 0;
const pricing_config_1 = require("../config/pricing.config");
class DashboardFlow {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async handleDashboardCommand(ctx) {
        if (!ctx.userId) {
            await ctx.send('❌ You must be registered to view the dashboard.');
            return;
        }
        const reseller = await this.prisma.reseller.findUnique({
            where: { id: ctx.userId }
        });
        if (!reseller) {
            await ctx.send('❌ Account not found. Please register first.');
            return;
        }
        const config = pricing_config_1.pricingConfigManager.getConfig();
        const currentTier = reseller.tier.toLowerCase();
        // Determine the next tier threshold
        let nextTier = null;
        if (currentTier === 'bronze')
            nextTier = 'silver';
        else if (currentTier === 'silver')
            nextTier = 'gold';
        else if (currentTier === 'gold')
            nextTier = 'agency';
        const currentTurnover = Number(reseller.monthlyTurnover);
        const balance = Number(reseller.balance);
        let progressSection = '';
        if (nextTier) {
            const requiredTurnover = config.tiers[nextTier].minMonthlyTurnover;
            const amountRemaining = requiredTurnover - currentTurnover;
            const progressPct = Math.min((currentTurnover / requiredTurnover) * 100, 100);
            // ASCII Progress Bar generation
            const totalBlocks = 10;
            const filledBlocks = Math.round((progressPct / 100) * totalBlocks);
            const progressBar = '█'.repeat(filledBlocks) + '░'.repeat(totalBlocks - filledBlocks);
            progressSection = `
**Unlock ${nextTier.toUpperCase()} Tier Discounts:**
[${progressBar}] ${progressPct.toFixed(1)}% 
_You are Rp ${amountRemaining.toLocaleString('id-ID')} away from permanent discounted wholesale prices next month!_
      `.trim();
        }
        else {
            progressSection = `🌟 **Maximum Tier Reached!** You currently enjoy the lowest possible agency prices.`;
        }
        const dashboardMessage = `
📈 **Reseller Analytics Dashboard**
━━━━━━━━━━━━━━━━━━━━━━━━━━
**Account:** ${reseller.username}
**Current Tier:** ${reseller.tier}
**Wallet Balance:** Rp ${balance.toLocaleString('id-ID')}
**Monthly Volume:** Rp ${currentTurnover.toLocaleString('id-ID')}

${progressSection}

_Turnover resets automatically at the end of the month._
    `.trim();
        if (ctx.sendEmbed) {
            await ctx.sendEmbed({
                embeds: [{
                        title: 'Your Agent Dashboard',
                        description: dashboardMessage,
                        color: '#3498db'
                    }]
            });
        }
        else {
            await ctx.send(dashboardMessage);
        }
    }
}
exports.DashboardFlow = DashboardFlow;
//# sourceMappingURL=dashboard.flow.js.map