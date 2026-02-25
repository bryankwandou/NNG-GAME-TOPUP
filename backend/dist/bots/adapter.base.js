"use strict";
// src/bots/adapter.base.ts
/**
 * Abstract base class for all bot platforms
 * Ensures consistency across Discord, Telegram, WhatsApp
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BotAdapterBase = void 0;
class BotAdapterBase {
    constructor(platform) {
        this.botName = 'NNG Game Top-Up Store Bot';
        this.platform = platform;
    }
    /**
     * Get platform-specific name for UI
     */
    getPlatformDisplayName() {
        const names = {
            discord: 'Discord',
            telegram: 'Telegram',
            whatsapp: 'WhatsApp',
        };
        return names[this.platform];
    }
    /**
     * Format a price for display (platform-agnostic)
     */
    formatPrice(amount) {
        return `Rp ${amount.toLocaleString('id-ID')}`;
    }
    /**
     * Create a standard embed for order confirmation
     */
    createOrderConfirmEmbed(data) {
        return {
            title: '🔍 Order Review',
            description: 'Please verify details before confirming',
            color: '#3498db',
            fields: [
                { name: 'Game', value: data.game, inline: true },
                { name: 'Denomination', value: data.denomination, inline: true },
                { name: 'Player ID', value: `\`${data.playerId}\``, inline: false },
                { name: 'Total Price', value: this.formatPrice(data.price), inline: false },
            ],
            footer: { text: '⚠️ Verify player ID is correct!' },
        };
    }
    /**
     * Create a standard embed for order status
     */
    createOrderStatusEmbed(data) {
        const statusEmoji = {
            PENDING: '⏳',
            PROCESSING: '🔄',
            COMPLETED: '✅',
            FAILED: '❌',
            REFUNDED: '💰',
        };
        return {
            title: `${statusEmoji[data.status] || '📦'} Order Status`,
            color: this.getStatusColor(data.status),
            fields: [
                { name: 'Order ID', value: `\`${data.orderId}\``, inline: false },
                { name: 'Status', value: data.status, inline: true },
                { name: 'Game', value: data.game, inline: true },
                { name: 'Price', value: this.formatPrice(data.price), inline: false },
                { name: 'Created', value: data.createdAt.toLocaleString('id-ID'), inline: false },
            ],
        };
    }
    getStatusColor(status) {
        const colors = {
            PENDING: '#f39c12', // Orange
            PROCESSING: '#3498db', // Blue
            COMPLETED: '#27ae60', // Green
            FAILED: '#e74c3c', // Red
            REFUNDED: '#9b59b6', // Purple
        };
        return colors[status] || '#95a5a6';
    }
}
exports.BotAdapterBase = BotAdapterBase;
//# sourceMappingURL=adapter.base.js.map