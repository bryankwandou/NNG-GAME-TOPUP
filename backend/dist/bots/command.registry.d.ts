/**
 * Unified command registry for all platforms (Discord, Telegram, WhatsApp)
 * This ensures consistency across chat interfaces
 */
import { BotReplyOptions, BotAdapterBase } from './adapter.base';
export declare enum CommandGroup {
    ACCOUNT = "account",
    PRODUCTS = "products",
    ORDERS = "orders",
    SUPPORT = "support",
    ADMIN = "admin"
}
export interface CommandDefinition {
    name: string;
    group: CommandGroup;
    description: string;
    aliases: string[];
    requiresAuth: boolean;
    platforms: ('discord' | 'telegram' | 'whatsapp')[];
    platformSpecific: {
        discord?: string;
        telegram?: string;
        whatsapp?: string;
    };
    params?: {
        name: string;
        type: 'string' | 'number' | 'enum' | 'integer';
        required: boolean;
        description: string;
        options?: string[];
    }[];
    handler: (context: CommandContext) => Promise<void>;
}
export interface CommandContext {
    userId: string;
    username: string;
    platform: 'discord' | 'telegram' | 'whatsapp';
    adapter: BotAdapterBase;
    command: string;
    args: string[];
    channelId: string;
    send: (message: string | any) => Promise<void>;
    sendEmbed?: (options: BotReplyOptions) => Promise<void>;
    editLastMessage?: (content: string) => Promise<void>;
    askConfirmation?: (message: string) => Promise<boolean>;
    getUserHandle?: () => Promise<string>;
}
export declare const COMMAND_REGISTRY: CommandDefinition[];
export declare class CommandRegistry {
    private commands;
    constructor(commands?: CommandDefinition[]);
    getCommand(name: string): CommandDefinition | undefined;
    getCommandsByGroup(group: CommandGroup): CommandDefinition[];
    getAllCommands(): CommandDefinition[];
    getHelpText(platform: 'discord' | 'telegram' | 'whatsapp'): string;
}
//# sourceMappingURL=command.registry.d.ts.map