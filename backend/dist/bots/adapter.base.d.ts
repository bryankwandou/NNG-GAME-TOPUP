/**
 * Abstract base class for all bot platforms
 * Ensures consistency across Discord, Telegram, WhatsApp
 */
export type BotPlatform = 'discord' | 'telegram' | 'whatsapp';
export interface BotMessage {
    userId: string;
    username: string;
    text: string;
    timestamp: Date;
    attachments?: BotAttachment[];
}
export interface BotAttachment {
    type: 'image' | 'file' | 'voice';
    url?: string;
    buffer?: Buffer;
    fileName?: string;
}
export interface BotReplyOptions {
    text?: string;
    embeds?: BotEmbed[];
    buttons?: BotButton[];
    menus?: BotMenu[];
    components?: any;
}
export interface BotMenu {
    id: string;
    placeholder: string;
    options: {
        label: string;
        value: string;
        description?: string;
        emoji?: string;
    }[];
}
export interface BotEmbed {
    title?: string;
    description?: string;
    color?: string;
    fields?: {
        name: string;
        value: string;
        inline?: boolean;
    }[];
    thumbnail?: {
        url: string;
    };
    image?: {
        url: string;
    };
    footer?: {
        text: string;
    };
}
export interface BotButton {
    id: string;
    label: string;
    emoji?: string;
    style?: 'primary' | 'secondary' | 'danger' | 'success';
    url?: string;
}
export declare abstract class BotAdapterBase {
    protected platform: BotPlatform;
    protected botName: string;
    constructor(platform: BotPlatform);
    /**
     * Initialize the bot (connect to service, authenticate, etc.)
     */
    abstract initialize(): Promise<void>;
    /**
     * Send a simple text message
     */
    abstract sendMessage(channelId: string, message: string): Promise<string>;
    /**
     * Send a rich embed/formatted message
     */
    abstract sendEmbed(channelId: string, options: BotReplyOptions): Promise<string>;
    /**
     * React/add emoji reaction to a message
     */
    addReaction?(messageId: string, emoji: string): Promise<void>;
    /**
     * Edit a previously sent message
     */
    editMessage?(channelId: string, messageId: string, newContent: BotReplyOptions): Promise<void>;
    /**
     * Delete a message
     */
    deleteMessage?(channelId: string, messageId: string): Promise<void>;
    /**
     * Create a user-specific session (link platform ID to reseller account)
     */
    abstract linkUserToReseller(userId: string, resellerId: string): Promise<void>;
    /**
     * Get reseller ID from platform user ID
     */
    abstract getResellerIdFromUser(userId: string): Promise<string | null>;
    /**
     * Shutdown the bot gracefully
     */
    abstract shutdown(): Promise<void>;
    /**
     * Get platform-specific name for UI
     */
    getPlatformDisplayName(): string;
    /**
     * Format a price for display (platform-agnostic)
     */
    protected formatPrice(amount: number): string;
    /**
     * Create a standard embed for order confirmation
     */
    protected createOrderConfirmEmbed(data: {
        game: string;
        denomination: string;
        playerId: string;
        price: number;
    }): BotEmbed;
    /**
     * Create a standard embed for order status
     */
    protected createOrderStatusEmbed(data: {
        orderId: string;
        status: string;
        game: string;
        price: number;
        createdAt: Date;
    }): BotEmbed;
    private getStatusColor;
}
//# sourceMappingURL=adapter.base.d.ts.map