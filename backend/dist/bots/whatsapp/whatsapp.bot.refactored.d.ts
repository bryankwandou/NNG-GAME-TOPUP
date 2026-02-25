/**
 * WhatsApp Bot Implementation (Refactored)
 * Extends BotAdapterBase to ensure consistency across platforms
 */
import { BotAdapterBase, BotReplyOptions } from '../adapter.base';
export declare class WhatsAppBotAdapter extends BotAdapterBase {
    private client;
    private commandRegistry;
    private isReady;
    constructor();
    initialize(): Promise<void>;
    private handleMessage;
    sendMessage(channelId: string, message: string): Promise<string>;
    sendEmbed(channelId: string, options: BotReplyOptions): Promise<string>;
    linkUserToReseller(userId: string, resellerId: string): Promise<void>;
    getResellerIdFromUser(_userId: string): Promise<string | null>;
    shutdown(): Promise<void>;
}
export declare function initializeWhatsAppBot(): Promise<void>;
export declare function getWhatsAppAdapter(): WhatsAppBotAdapter;
//# sourceMappingURL=whatsapp.bot.refactored.d.ts.map