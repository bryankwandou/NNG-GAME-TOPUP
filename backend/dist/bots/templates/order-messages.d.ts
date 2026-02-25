/**
 * Phase A: Frontend UX Message Templates
 *
 * Platform-agnostic message templates for consistent user experience.
 * Each template can be rendered for Discord (embeds), Telegram (markdown),
 * or WhatsApp (plain text with emojis).
 */
export interface OrderStartMessage {
    title: string;
    description: string;
    options: {
        label: string;
        value: string;
        emoji: string;
    }[];
    footer: string;
}
export interface PriceQuoteMessage {
    game: string;
    denomination: number;
    tier: string;
    components: {
        supplier: number;
        electricity: number;
        hosting: number;
        maintenance: number;
        tax: number;
        paymentFee: number;
        margin: number;
    };
    finalPrice: number;
    fairnessRating: 'excellent' | 'good' | 'fair' | 'concerning';
    fairnessNote: string;
    tierUpgradeHint?: string;
}
export interface OrderConfirmationMessage {
    game: string;
    gameName: string;
    denomination: number;
    playerId: string;
    finalPrice: number;
    confirmationCode: string;
    eta: string;
    expiryMinutes: number;
    warnings: string[];
}
export interface OrderStatusMessage {
    orderId: string;
    status: 'pending' | 'processing' | 'completed' | 'failed' | 'refunded';
    game: string;
    denomination: number;
    playerId: string;
    createdAt: Date;
    updatedAt: Date;
    eta?: string;
    providerStatus?: string;
    retryCount?: number;
    errorMessage?: string;
}
export declare class OrderMessageTemplates {
    /**
     * Welcome/Start order message with guided options
     */
    static getOrderStartMessage(): OrderStartMessage;
    /**
     * Price breakdown quote message
     */
    static getPriceQuoteMessage(data: PriceQuoteMessage): string;
    /**
     * Order confirmation request with safety checks
     */
    static getOrderConfirmationMessage(data: OrderConfirmationMessage): string;
    /**
     * Order status update message
     */
    static getOrderStatusMessage(data: OrderStatusMessage): string;
    /**
     * Game list with categories
     */
    static getGameListMessage(games: {
        code: string;
        name: string;
        category: string;
    }[]): string;
    /**
     * Tier comparison table
     */
    static getTierComparisonMessage(game: string, denomination: number, tiers: {
        tier: string;
        price: number;
        margin: number;
        savings?: number;
    }[]): string;
    /**
     * Help/Tutorial message
     */
    static getHelpMessage(): string;
    /**
     * Retry/provider failure notification
     */
    static getProviderRetryMessage(orderId: string, retryCount: number, maxRetries: number, nextCheckSeconds: number): string;
    /**
     * Auto-refund notification
     */
    static getAutoRefundMessage(orderId: string, amount: number, reason: string): string;
}
//# sourceMappingURL=order-messages.d.ts.map