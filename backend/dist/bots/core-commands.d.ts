/**
 * CORE_COMMANDS: Simplified, beginner-friendly command set
 * Platform-agnostic definitions. Each platform adapter renders these into native format.
 *
 * Philosophy: Minimal, memorable commands that cover 95% of user needs.
 * - /start: Welcome & quick setup
 * - /help: Show all commands
 * - /games: Browse supported games
 * - /price: Check price for a game
 * - /order: Place a new order (guided multi-step flow)
 * - /status: Check order status
 * - /profile: View account & balance
 * - /reseller: Reseller/affiliate options
 * - /support: Contact support
 */
export type BotPlatform = 'discord' | 'telegram' | 'whatsapp';
export declare enum CommandGroup {
    ONBOARDING = "onboarding",
    SHOPPING = "shopping",
    ACCOUNT = "account",
    ORDERS = "orders",
    RESELLER = "reseller",
    SUPPORT = "support",
    ADMIN = "admin"
}
export interface CoreCommand {
    /** Internal identifier (lowercase, no spaces) */
    id: string;
    /** Display name */
    name: string;
    /** Logical grouping */
    group: CommandGroup;
    /** User-friendly description */
    description: string;
    /** Shorter aliases for power users */
    aliases: string[];
    /** Whether user must be logged in */
    requiresAuth: boolean;
    /** How this renders on each platform */
    platformRender: {
        discord: string;
        telegram: string;
        whatsapp: string;
    };
    /** Expected parameters */
    params?: CoreCommandParam[];
    /** What tier(s) can use this */
    availableTo?: ('endUser' | 'reseller' | 'distributor' | 'admin')[];
    /** Emoji for quick visual reference */
    emoji?: string;
}
export interface CoreCommandParam {
    name: string;
    type: 'string' | 'number' | 'enum' | 'player_id';
    required: boolean;
    description: string;
    options?: string[];
    example?: string;
}
/**
 * CORE COMMAND SET - The complete command vocabulary
 * Used by all three platforms (Discord, Telegram, WhatsApp)
 */
export declare const CORE_COMMANDS: CoreCommand[];
/**
 * Utility: Get command by ID
 */
export declare function getCommandById(id: string): CoreCommand | undefined;
/**
 * Utility: Get commands by group
 */
export declare function getCommandsByGroup(group: CommandGroup): CoreCommand[];
/**
 * Utility: Get all aliases for a command
 */
export declare function getCommandAliases(commandId: string): string[];
/**
 * Utility: Find command by alias (case-insensitive)
 */
export declare function findCommandByAlias(input: string): CoreCommand | undefined;
/**
 * Utility: Get platform-specific command string
 */
export declare function getPlatformCommand(commandId: string, platform: BotPlatform): string | undefined;
//# sourceMappingURL=core-commands.d.ts.map