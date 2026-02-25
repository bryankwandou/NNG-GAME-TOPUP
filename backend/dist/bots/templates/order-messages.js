"use strict";
/**
 * Phase A: Frontend UX Message Templates
 *
 * Platform-agnostic message templates for consistent user experience.
 * Each template can be rendered for Discord (embeds), Telegram (markdown),
 * or WhatsApp (plain text with emojis).
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderMessageTemplates = void 0;
class OrderMessageTemplates {
    /**
     * Welcome/Start order message with guided options
     */
    static getOrderStartMessage() {
        return {
            title: '🛒 Start Your Order',
            description: 'Choose how you want to proceed with your game top-up order:',
            options: [
                {
                    label: 'Browse Games',
                    value: 'browse_games',
                    emoji: '🎮',
                },
                {
                    label: 'Check Price First',
                    value: 'check_price',
                    emoji: '💰',
                },
                {
                    label: 'Start Guided Order',
                    value: 'guided_order',
                    emoji: '📝',
                },
                {
                    label: 'Need Help?',
                    value: 'help',
                    emoji: '❓',
                },
            ],
            footer: 'Fair pricing • Transparent breakdowns • Usually 1-5 min delivery',
        };
    }
    /**
     * Price breakdown quote message
     */
    static getPriceQuoteMessage(data) {
        const marginPercent = ((data.components.margin / data.finalPrice) * 100).toFixed(1);
        const fairnessEmoji = {
            excellent: '✅',
            good: '✅',
            fair: '⚠️',
            concerning: '⛔',
        }[data.fairnessRating];
        return `
📊 **Price Breakdown: ${data.game} – ${data.denomination}**

**Cost Components:**
├─ 🏭 Supplier:          Rp ${data.components.supplier.toLocaleString('id-ID')}
├─ 💡 Electricity:       Rp ${data.components.electricity.toLocaleString('id-ID')}
├─ 🖥️  Hosting:          Rp ${data.components.hosting.toLocaleString('id-ID')}
├─ 🔧 Maintenance:       Rp ${data.components.maintenance.toLocaleString('id-ID')}
├─ 📈 Tax (PPN):         Rp ${data.components.tax.toLocaleString('id-ID')}
├─ 💳 Payment Fee:       Rp ${data.components.paymentFee.toLocaleString('id-ID')}
└─ 🎯 Margin (${marginPercent}%):    Rp ${data.components.margin.toLocaleString('id-ID')}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
**💰 Your Price (${data.tier}):**
**Rp ${data.finalPrice.toLocaleString('id-ID')}**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${fairnessEmoji} **Fairness: ${data.fairnessRating.toUpperCase()}**
${data.fairnessNote}

${data.tierUpgradeHint || ''}
    `.trim();
    }
    /**
     * Order confirmation request with safety checks
     */
    static getOrderConfirmationMessage(data) {
        const warnings = data.warnings.length > 0
            ? `\n⚠️ **Important:**\n${data.warnings.map((w) => `• ${w}`).join('\n')}\n`
            : '';
        return `
🔍 **Order Review & Confirmation**

**Order Details:**
• **Game:** ${data.gameName}
• **Denomination:** ${data.denomination}
• **Player ID:** \`${data.playerId}\`
• **Total Price:** Rp ${data.finalPrice.toLocaleString('id-ID')} *(all fees included)*
• **ETA:** ${data.eta}
${warnings}
⚠️ **Please verify the Player ID is correct before confirming.**
This cannot be changed after confirmation.

🔒 **Confirmation Code:** \`${data.confirmationCode}\`
⏱️ **Expires in:** ${data.expiryMinutes} minutes

**To Confirm:**
✅ React/Click Confirm, or
✅ Reply: \`YES ${data.confirmationCode}\`

**To Cancel:**
❌ React/Click Cancel, or
❌ Reply: \`NO\`
    `.trim();
    }
    /**
     * Order status update message
     */
    static getOrderStatusMessage(data) {
        const statusEmoji = {
            pending: '⏳',
            processing: '🔄',
            completed: '✅',
            failed: '❌',
            refunded: '💰',
        }[data.status];
        let statusDetail = '';
        if (data.status === 'processing' && data.retryCount) {
            statusDetail = `\n🔄 **Retry:** ${data.retryCount}/3\n⏱️ **Next Check:** ~60s`;
        }
        else if (data.status === 'failed' && data.errorMessage) {
            statusDetail = `\n❌ **Error:** ${data.errorMessage}\n💰 **Balance refunded automatically**`;
        }
        else if (data.status === 'completed') {
            statusDetail = `\n✅ **Delivered successfully!**`;
        }
        else if (data.status === 'pending' && data.eta) {
            statusDetail = `\n⏱️ **ETA:** ${data.eta}`;
        }
        return `
${statusEmoji} **Order Status: ${data.status.toUpperCase()}**

**Order ID:** \`${data.orderId}\`
**Game:** ${data.game}
**Denomination:** ${data.denomination}
**Player ID:** \`${data.playerId}\`
**Created:** ${data.createdAt.toLocaleString('id-ID')}
**Updated:** ${data.updatedAt.toLocaleString('id-ID')}
${statusDetail}

${data.providerStatus ? `**Provider:** ${data.providerStatus}` : ''}

Need help? Contact support: /support
    `.trim();
    }
    /**
     * Game list with categories
     */
    static getGameListMessage(games) {
        const grouped = games.reduce((acc, game) => {
            if (!acc[game.category])
                acc[game.category] = [];
            acc[game.category].push(game);
            return acc;
        }, {});
        let message = '🎮 **Available Games**\n\n';
        for (const [category, items] of Object.entries(grouped)) {
            message += `**${category}:**\n`;
            items.forEach((game, i) => {
                message += `${i + 1}. ${game.name} (\`${game.code}\`)\n`;
            });
            message += '\n';
        }
        message += `\n💡 **Check price:** \`/price <game> <denom>\``;
        message += `\n🛒 **Start order:** \`/order\``;
        return message;
    }
    /**
     * Tier comparison table
     */
    static getTierComparisonMessage(game, denomination, tiers) {
        let message = `📊 **Tier Pricing: ${game} – ${denomination}**\n\n`;
        tiers.forEach((tier, i) => {
            const savings = tier.savings ? ` *(Save Rp ${tier.savings.toLocaleString('id-ID')})*` : '';
            const emoji = i === 0 ? '🥉' : i === 1 ? '🥈' : i === 2 ? '🥇' : '👑';
            message += `${emoji} **${tier.tier}:** Rp ${tier.price.toLocaleString('id-ID')} (${((tier.margin / tier.price) * 100).toFixed(1)}% margin)${savings}\n`;
        });
        message += `\n💡 **Upgrade your tier** to unlock better rates!`;
        message += `\n📈 **Become a reseller:** /reseller`;
        return message;
    }
    /**
     * Help/Tutorial message
     */
    static getHelpMessage() {
        return `
📖 **NNG Game Top-Up Bot – Quick Guide**

**🛒 Ordering:**
1. \`/order\` – Start guided order flow
2. Choose game → denomination → enter UID
3. Review price breakdown
4. Confirm and pay

**💰 Pricing:**
• \`/price <game> <denom>\` – Quick price check
• \`/breakdown <game> <denom>\` – Full cost breakdown
• \`/pricelist [game]\` – View all prices

**📦 Tracking:**
• \`/status <order_id>\` – Check order status
• \`/history\` – View your order history

**👤 Account:**
• \`/profile\` – View account & balance
• \`/balance\` – Check balance
• \`/topup <amount>\` – Add funds

**🤝 Reseller Program:**
• \`/reseller\` – Join reseller program
• Get better margins on bulk orders
• Earn commission on referrals

**🎮 Supported Games:**
• Mobile Legends (MLBB)
• Free Fire (FF)
• Genshin Impact
• Valorant
• Steam Wallet
• And more...

**❓ Need Help?**
• \`/support\` – Contact support
• Average response: < 1 hour

**💡 Fair Pricing Promise:**
✅ Transparent cost breakdown
✅ No hidden fees
✅ Competitive rates for all tiers
✅ Usually 1-5 min delivery

Start your first order: \`/order\`
    `.trim();
    }
    /**
     * Retry/provider failure notification
     */
    static getProviderRetryMessage(orderId, retryCount, maxRetries, nextCheckSeconds) {
        return `
⏳ **Still Processing...**

**Order ID:** \`${orderId}\`
**Status:** Provider pending (retry ${retryCount}/${maxRetries})
**Next Check:** ~${nextCheckSeconds}s

We're working on it! Your order will complete automatically.
You'll be notified when it's done.

💡 This usually happens during high traffic.
    `.trim();
    }
    /**
     * Auto-refund notification
     */
    static getAutoRefundMessage(orderId, amount, reason) {
        return `
💰 **Automatic Refund Processed**

**Order ID:** \`${orderId}\`
**Amount Refunded:** Rp ${amount.toLocaleString('id-ID')}
**Reason:** ${reason}

Your balance has been restored automatically.
No action needed from you.

Want to try again? \`/order\`
Need help? \`/support\`
    `.trim();
    }
}
exports.OrderMessageTemplates = OrderMessageTemplates;
//# sourceMappingURL=order-messages.js.map