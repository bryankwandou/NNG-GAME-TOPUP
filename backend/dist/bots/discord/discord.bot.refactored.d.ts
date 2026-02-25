/**
 * Discord Bot Implementation (Refactored)
 * Extends BotAdapterBase to ensure consistency across platforms
 * Uses unified CommandRegistry for command definitions
 */
import { BotAdapterBase, BotReplyOptions } from '../adapter.base';
export declare class DiscordBotAdapter extends BotAdapterBase {
    private client;
    private commandRegistry;
    constructor();
    /**
     * Initialize Discord bot connection
     */
    initialize(): Promise<void>;
    /**
     * Register slash commands from CommandRegistry
     */
    private registerSlashCommands;
    /**
     * Unified command handler leveraging CommandRegistry
     */
    private handleCommand;
    sendMessage(channelId: string, message: string): Promise<string>;
    sendEmbed(channelId: string, options: BotReplyOptions): Promise<string>;
    formatPriceBreakdownView(previewData: import('../order-message-templates').OrderPreviewData): BotReplyOptions;
    linkUserToReseller(_userId: string, _resellerId: string): Promise<void>;
    getResellerIdFromUser(_userId: string): Promise<string | null>;
    shutdown(): Promise<void>;
}
export declare function initializeDiscordBot(): Promise<void>;
export declare function getDiscordAdapter(): DiscordBotAdapter;
//# sourceMappingURL=discord.bot.refactored.d.ts.map