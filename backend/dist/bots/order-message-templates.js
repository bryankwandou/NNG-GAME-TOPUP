"use strict";
// src/bots/order-message-templates.ts
/**
 * Guided Order Message Templates
 * Platform-agnostic templates for the multi-step order flow
 * Render with price breakdown and fairness indicators
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFairnessEmoji = getFairnessEmoji;
exports.formatOrderPreview = formatOrderPreview;
exports.formatOrderPreviewDiscord = formatOrderPreviewDiscord;
exports.formatOrderPreviewTelegram = formatOrderPreviewTelegram;
exports.formatOrderPreviewWhatsApp = formatOrderPreviewWhatsApp;
exports.formatOrderComplete = formatOrderComplete;
exports.formatOrderFailed = formatOrderFailed;
exports.formatGameSelection = formatGameSelection;
exports.formatDenominationSelection = formatDenominationSelection;
exports.formatSystemHealth = formatSystemHealth;
exports.formatSystemHealthDiscord = formatSystemHealthDiscord;
exports.formatSustainabilityReport = formatSustainabilityReport;
exports.formatSustainabilityReportDiscord = formatSustainabilityReportDiscord;
/**
 * Get fairness emoji for rating
 */
function getFairnessEmoji(rating) {
    const emojis = {
        excellent: '✨',
        good: '✅',
        fair: '👍',
        concerning: '🤔',
        warn: '⚠️',
        blocked: '⛔',
    };
    return emojis[rating];
}
/**
 * Format order preview message (plain text for all platforms)
 */
function formatOrderPreview(data) {
    const { gameName, denomination, playerId, breakdown, estimatedTime } = data;
    const emoji = getFairnessEmoji(breakdown.fairnessRating);
    return `
🎮 **Order Preview: ${gameName}**
━━━━━━━━━━━━━━━━━━━━━━━━━━

**Order Details:**
• **Denomination:** ${denomination}
• **Player ID:** \`${playerId}\`
• **Account Tier:** ${breakdown.tierLabel}

**💰 Fair Price Breakdown:**
┌─────────────────────────────────────┐
│ 🏭 Supplier Cost:    Rp ${Number(breakdown.supplierCost).toLocaleString('id-ID')}
│ ⚡ System Overhead:  Rp ${Number(breakdown.overheadPerOrder).toLocaleString('id-ID')}
│ 📈 Tax (PPN+PPh):   Rp ${Number(breakdown.ppnAmount + breakdown.pphAmount).toLocaleString('id-ID')}
│ 🎯 Our Margin (${(breakdown.targetMarginRate * 100).toFixed(0)}%):  Rp ${Number(breakdown.actualMarginAmount).toLocaleString('id-ID')}
├─────────────┬───────────────────────┤
│ **TOTAL PRICE** │ **Rp ${Number(breakdown.finalPrice).toLocaleString('id-ID')}** │
└─────────────┴───────────────────────┘

${emoji} **Fairness Rating: ${breakdown.fairnessRating.toUpperCase()}**
_${breakdown.fairnessMessage}_

⏱️ **Est. Completion:** ${estimatedTime}

⚠️ **Action Required:**
Please double-check your **Player ID** above. 
By confirming, you agree to our community standards.

**Commands:**
✅ Confirm: Type "confirm" or react
❌ Cancel: Type "cancel" or react
  `.trim();
}
/**
 * Format order preview for Discord (with embed)
 */
function formatOrderPreviewDiscord(data) {
    const { gameName, denomination, playerId, breakdown, estimatedTime } = data;
    const emoji = getFairnessEmoji(breakdown.fairnessRating);
    const color = breakdown.fairnessRating === 'excellent' ? 0x00ff00 :
        breakdown.fairnessRating === 'good' ? 0x00cc00 :
            breakdown.fairnessRating === 'fair' ? 0xffaa00 :
                breakdown.fairnessRating === 'warn' ? 0xff6600 :
                    0xff0000;
    return {
        embeds: [
            {
                title: `🎮 Order Preview - ${gameName}`,
                color,
                fields: [
                    {
                        name: 'Denomination',
                        value: denomination,
                        inline: true,
                    },
                    {
                        name: 'Player ID',
                        value: `\`${playerId}\``,
                        inline: true,
                    },
                    {
                        name: 'Your Tier',
                        value: breakdown.tierLabel,
                        inline: true,
                    },
                    {
                        name: '💰 Price Breakdown',
                        value: `
Supplier Cost: Rp ${Number(breakdown.supplierCost).toLocaleString('id-ID')}
Overhead: Rp ${Number(breakdown.overheadPerOrder).toLocaleString('id-ID')}
Tax (PPN+PPh): Rp ${Number(breakdown.ppnAmount + breakdown.pphAmount).toLocaleString('id-ID')}
Margin (${(breakdown.targetMarginRate * 100).toFixed(0)}%): Rp ${Number(breakdown.actualMarginAmount).toLocaleString('id-ID')}
            `.trim(),
                        inline: false,
                    },
                    {
                        name: '💳 Total Price',
                        value: `**Rp ${Number(breakdown.finalPrice).toLocaleString('id-ID')}**`,
                        inline: false,
                    },
                    {
                        name: `${emoji} Fairness`,
                        value: breakdown.fairnessMessage,
                        inline: false,
                    },
                    {
                        name: '⏱️ Estimated Time',
                        value: estimatedTime,
                        inline: true,
                    },
                ],
                footer: {
                    text: '⚠️ Verify your Player ID before confirming. Once confirmed, this cannot be changed.',
                },
            },
        ],
        components: [
            {
                type: 1, // Action row
                components: [
                    {
                        type: 2, // Button
                        style: 3, // Green (success)
                        label: 'Confirm Order',
                        custom_id: 'order_confirm',
                        emoji: { name: '✅' },
                    },
                    {
                        type: 2,
                        style: 4, // Red (danger)
                        label: 'Cancel',
                        custom_id: 'order_cancel',
                        emoji: { name: '❌' },
                    },
                ],
            },
        ],
    };
}
/**
 * Format order preview for Telegram (with inline keyboard)
 */
function formatOrderPreviewTelegram(data) {
    const text = formatOrderPreview(data);
    return {
        text,
        parse_mode: 'Markdown',
        reply_markup: {
            inline_keyboard: [
                [
                    { text: '✅ Confirm Order', callback_data: 'order_confirm' },
                    { text: '❌ Cancel', callback_data: 'order_cancel' },
                ],
            ],
        },
    };
}
/**
 * Format order preview for WhatsApp (plain text with quick replies)
 */
function formatOrderPreviewWhatsApp(data) {
    return formatOrderPreview(data) + '\n\nReply "confirm" to proceed or "cancel" to abort.';
}
/**
 * Format order completion message
 */
function formatOrderComplete(orderId, status) {
    const emoji = status === 'completed' ? '✅' : '⏳';
    const statusText = status === 'completed' ? 'Completed' : 'Processing';
    return `
${emoji} **Order ${statusText}!**

**Order ID:** \`${orderId}\`
**Status:** ${statusText}

${status === 'completed'
        ? '✅ Top-up has been delivered to your game account.\nPlease check your in-game balance.'
        : '⏳ Your order is being processed. You will be notified when complete.\nUsually takes 1-5 minutes.'}

**Need Help?**
• Check status: /status ${orderId}
• Contact support: /support

Thank you for using NNG Game Top-Up Store! 🎮
  `.trim();
}
/**
 * Format order failed message (with refund info)
 */
function formatOrderFailed(orderId, reason, refundAmount) {
    return `
❌ **Order Failed**

**Order ID:** \`${orderId}\`
**Reason:** ${reason}

**Refund Issued:**
Rp ${refundAmount.toLocaleString('id-ID')} has been automatically refunded to your balance.

**What happened?**
${reason === 'Invalid Player ID'
        ? 'The Player ID you provided could not be verified. Please double-check and try again.'
        : reason === 'Supplier Error'
            ? 'Our supplier is temporarily unavailable. Your funds have been refunded.'
            : 'An unexpected error occurred. Your funds have been refunded.'}

**Next Steps:**
• Check your balance: /balance
• Try again: /order
• Contact support: /support

We apologize for the inconvenience. 🙏
  `.trim();
}
/**
 * Format game selection message
 */
function formatGameSelection(games) {
    const gameList = games
        .map((g, i) => `${i + 1}. ${g.icon || '🎮'} **${g.name}** (\`${g.code}\`)`)
        .join('\n');
    return `
🎮 **Select a Game**

Available games:
${gameList}

**How to Order:**
• Type the number (e.g., \`1\`)
• Or type the game name (e.g., \`MLBB\`)

Need help? Type /help
  `.trim();
}
/**
 * Format denomination selection message
 */
function formatDenominationSelection(gameName, denominations) {
    const denomList = denominations
        .map((d, i) => `${i + 1}. **${d.value}** - Rp ${d.price.toLocaleString('id-ID')} (${d.tier})`)
        .join('\n');
    return `
💎 **Select Denomination - ${gameName}**

Available options:
${denomList}

**How to proceed:**
• Type the number (e.g., \`1\`)
• Or type the amount (e.g., \`86\`)

Cancel: Type /cancel
  `.trim();
}
/**
 * Format System Health Report (Admin only)
 */
function formatSystemHealth(data) {
    const dbEmoji = data.database === 'CONNECTED' ? '🟢' : '🔴';
    const supplierEmoji = data.supplier === 'ONLINE' ? '🟢' : '🔴';
    return `
🩺 **System Health Report**
━━━━━━━━━━━━━━━━━━━━━━━━━━

**Core Status:**
• **Database:** ${dbEmoji} ${data.database}
• **Supplier API:** ${supplierEmoji} ${data.supplier}

**Metrics:**
• **Bot Uptime:** \`${data.uptime}\`
• **Current Time:** \`${data.timestamp.toLocaleString('id-ID')}\`

**Diagnosis:**
${data.database === 'CONNECTED' && data.supplier === 'ONLINE'
        ? '✅ All systems operational. Ready for orders.'
        : '⚠️ Issues detected. Some commands may fail.'}

_Generated for: NNG Bot Admin_
  `.trim();
}
/**
 * Format health for Discord Embed
 */
function formatSystemHealthDiscord(data) {
    const color = (data.database === 'CONNECTED' && data.supplier === 'ONLINE') ? 0x00FF00 : 0xFF0000;
    return {
        embeds: [{
                title: '🩺 System Health Report',
                color,
                fields: [
                    { name: 'Database', value: data.database === 'CONNECTED' ? '🟢 Connected' : '🔴 Offline', inline: true },
                    { name: 'Supplier API', value: data.supplier === 'ONLINE' ? '🟢 Online' : '🔴 Offline', inline: true },
                    { name: 'Uptime', value: data.uptime, inline: true },
                    { name: 'Timestamp', value: data.timestamp.toISOString(), inline: false }
                ],
                footer: { text: 'NNG Bot Maintenance Cluster' }
            }]
    };
}
/**
 * Format Sustainability Report
 */
function formatSustainabilityReport(data) {
    const profitEmoji = data.isBreakEven ? '💹' : '⚠️';
    return `
📈 **Sustainability Report**
━━━━━━━━━━━━━━━━━━━━━━━━━━
**Period:** ${data.periodStart.toLocaleDateString()} - ${data.periodEnd.toLocaleDateString()}

**Revenue & Profit:**
• Total Orders: ${data.totalOrders}
• Total Revenue: Rp ${data.totalOrderValue.toLocaleString()}
• Gross Profit: Rp ${data.totalProfit.toLocaleString()}
• Net Profit: ${profitEmoji} Rp ${data.netProfitAfterCosts.toLocaleString()}
• Margin Rate: ${data.profitMarginRate.toFixed(2)}%

**Estimated Costs:**
• Electricity: Rp ${data.estimatedElectricityCost.toLocaleString()}
• Hosting: Rp ${data.estimatedHostingCost.toLocaleString()}
• Maintenance: Rp ${data.estimatedMaintenanceCost.toLocaleString()}
• Total Overhead: Rp ${data.totalOperatingCost.toLocaleString()}

**Sustainability:**
• Break-Even Status: ${data.isBreakEven ? '✅ PROFITABLE' : '❌ AT LOSS'}
• Target Orders: ${data.ordersNeededToBreakEven}/month
${!data.isBreakEven ? `• Days to Break-Even: ${data.daysUntilBreakEven} days` : ''}

**Status:** ${data.isBreakEven ? 'Business is sustainable.' : 'Volume increase recommended.'}
  `.trim();
}
/**
 * Format Sustainability Report for Discord Embed
 */
function formatSustainabilityReportDiscord(data) {
    const color = data.isBreakEven ? 0x27ae60 : 0xe74c3c;
    return {
        embeds: [
            {
                title: '📈 Sustainability Report',
                color: color,
                fields: [
                    { name: 'Revenue', value: `Rp ${data.totalOrderValue.toLocaleString()}`, inline: true },
                    { name: 'Gross Profit', value: `Rp ${data.totalProfit.toLocaleString()}`, inline: true },
                    { name: 'Net Profit', value: `**Rp ${data.netProfitAfterCosts.toLocaleString()}**`, inline: false },
                    { name: 'Margin', value: `${data.profitMarginRate.toFixed(2)}%`, inline: true },
                    { name: 'Orders', value: `${data.totalOrders}`, inline: true },
                    { name: 'Overhead', value: `Rp ${data.totalOperatingCost.toLocaleString()}`, inline: false },
                ],
                footer: { text: `Status: ${data.isBreakEven ? '✅ Profitable' : '❌ Needs Volume'}` },
            }
        ],
    };
}
//# sourceMappingURL=order-message-templates.js.map