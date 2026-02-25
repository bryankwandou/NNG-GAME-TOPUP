// src/bots/adapter.base.ts
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
  components?: any; // Platform-specific
}

export interface BotMenu {
  id: string;
  placeholder: string;
  options: { label: string; value: string; description?: string; emoji?: string }[];
}

export interface BotEmbed {
  title?: string;
  description?: string;
  color?: string; // Hex color
  fields?: { name: string; value: string; inline?: boolean }[];
  thumbnail?: { url: string };
  image?: { url: string };
  footer?: { text: string };
}

export interface BotButton {
  id: string;
  label: string;
  emoji?: string;
  style?: 'primary' | 'secondary' | 'danger' | 'success';
  url?: string;
}

export abstract class BotAdapterBase {
  protected platform: BotPlatform;
  protected botName: string = 'NNG Game Top-Up Store Bot';

  constructor(platform: BotPlatform) {
    this.platform = platform;
  }

  /**
   * Initialize the bot (connect to service, authenticate, etc.)
   */
  abstract initialize(): Promise<void>;

  /**
   * Send a simple text message
   */
  abstract sendMessage(
    channelId: string,
    message: string
  ): Promise<string>;

  /**
   * Send a rich embed/formatted message
   */
  abstract sendEmbed(
    channelId: string,
    options: BotReplyOptions
  ): Promise<string>;

  /**
   * React/add emoji reaction to a message
   */
  async addReaction?(messageId: string, emoji: string): Promise<void>;

  /**
   * Edit a previously sent message
   */
  async editMessage?(
    channelId: string,
    messageId: string,
    newContent: BotReplyOptions
  ): Promise<void>;

  /**
   * Delete a message
   */
  async deleteMessage?(
    channelId: string,
    messageId: string
  ): Promise<void>;

  /**
   * Create a user-specific session (link platform ID to reseller account)
   */
  abstract linkUserToReseller(
    userId: string,
    resellerId: string
  ): Promise<void>;

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
  getPlatformDisplayName(): string {
    const names: Record<BotPlatform, string> = {
      discord: 'Discord',
      telegram: 'Telegram',
      whatsapp: 'WhatsApp',
    };
    return names[this.platform];
  }

  /**
   * Format a price for display (platform-agnostic)
   */
  protected formatPrice(amount: number): string {
    return `Rp ${amount.toLocaleString('id-ID')}`;
  }

  /**
   * Create a standard embed for order confirmation
   */
  protected createOrderConfirmEmbed(data: {
    game: string;
    denomination: string;
    playerId: string;
    price: number;
  }): BotEmbed {
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
   * Format the visually complex Price Breakdown View
   * This is implemented specifically by each Platform Adapter (Discord embeds, Telegram keyboards, WhatsApp text)
   */
  abstract formatPriceBreakdownView(previewData: import('./order-message-templates').OrderPreviewData): BotReplyOptions;

  /**
   * Create a standard embed for order status
   */
  protected createOrderStatusEmbed(data: {
    orderId: string;
    status: string;
    game: string;
    price: number;
    createdAt: Date;
  }): BotEmbed {
    const statusEmoji: Record<string, string> = {
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

  private getStatusColor(status: string): string {
    const colors: Record<string, string> = {
      PENDING: '#f39c12', // Orange
      PROCESSING: '#3498db', // Blue
      COMPLETED: '#27ae60', // Green
      FAILED: '#e74c3c', // Red
      REFUNDED: '#9b59b6', // Purple
    };
    return colors[status] || '#95a5a6';
  }
}
