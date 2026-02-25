/**
 * Telegram Bot Implementation (Refactored)
 * Extends BotAdapterBase to ensure consistency across platforms
 */
import { BotAdapterBase, BotReplyOptions } from '../adapter.base';
export declare class TelegramBotAdapter extends BotAdapterBase {
    private bot;
    private commandRegistry;
    constructor();
    initialize(): Promise<void>;
    sendMessage(channelId: string, message: string): Promise<string>;
    sendEmbed(channelId: string, options: BotReplyOptions): Promise<string>;
    formatPriceBreakdownView(previewData: import('../order-message-templates').OrderPreviewData): BotReplyOptions;
    linkUserToReseller(userId: string, resellerId: string): Promise<void>;
    getResellerIdFromUser(_userId: string): Promise<string | null>;
    shutdown(): Promise<void>;
}
export declare function initializeTelegramBot(): Promise<void>;
export declare function getTelegramAdapter(): TelegramBotAdapter;
//# sourceMappingURL=telegram.bot.refactored.d.ts.map