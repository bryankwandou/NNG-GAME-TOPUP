"use strict";
// src/bots/core-commands.ts
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CORE_COMMANDS = exports.CommandGroup = void 0;
exports.getCommandById = getCommandById;
exports.getCommandsByGroup = getCommandsByGroup;
exports.getCommandAliases = getCommandAliases;
exports.findCommandByAlias = findCommandByAlias;
exports.getPlatformCommand = getPlatformCommand;
var CommandGroup;
(function (CommandGroup) {
    CommandGroup["ONBOARDING"] = "onboarding";
    CommandGroup["SHOPPING"] = "shopping";
    CommandGroup["ACCOUNT"] = "account";
    CommandGroup["ORDERS"] = "orders";
    CommandGroup["RESELLER"] = "reseller";
    CommandGroup["SUPPORT"] = "support";
    CommandGroup["ADMIN"] = "admin";
})(CommandGroup || (exports.CommandGroup = CommandGroup = {}));
/**
 * CORE COMMAND SET - The complete command vocabulary
 * Used by all three platforms (Discord, Telegram, WhatsApp)
 */
exports.CORE_COMMANDS = [
    // ============================================
    // ONBOARDING COMMANDS (New users)
    // ============================================
    {
        id: 'start',
        name: 'Start',
        group: CommandGroup.ONBOARDING,
        description: '🚀 Welcome to NNG Game Store! Get started here.',
        aliases: ['begin', 'hello', 'welcome', 'mulaibot'],
        requiresAuth: false,
        platformRender: {
            discord: '/start',
            telegram: '/start',
            whatsapp: '!start',
        },
        emoji: '👋',
    },
    {
        id: 'help',
        name: 'Help',
        group: CommandGroup.ONBOARDING,
        description: '❓ Need help? See all commands and guides.',
        aliases: ['h', 'info', 'guide', 'tutorial', 'bantuan'],
        requiresAuth: false,
        platformRender: {
            discord: '/help',
            telegram: '/help',
            whatsapp: '!help',
        },
        emoji: '❓',
    },
    // ============================================
    // SHOPPING COMMANDS (Browse & check prices)
    // ============================================
    {
        id: 'games',
        name: 'Games',
        group: CommandGroup.SHOPPING,
        description: '🎮 Browse all supported games (MLBB, FF, etc.)',
        aliases: ['list', 'catalog', 'menu', 'browse', 'daftar'],
        requiresAuth: false,
        platformRender: {
            discord: '/games',
            telegram: '/games',
            whatsapp: '!games',
        },
        emoji: '🎮',
    },
    {
        id: 'price',
        name: 'Price',
        group: CommandGroup.SHOPPING,
        description: '💰 Check live price for a specific game item',
        aliases: ['cost', 'rate', 'check', 'quote', 'harga'],
        requiresAuth: false,
        platformRender: {
            discord: '/price <game> <denomination>',
            telegram: '/price <game> <denomination>',
            whatsapp: '!price <game> <denomination>',
        },
        params: [
            {
                name: 'game',
                type: 'enum',
                required: true,
                description: 'Game code (e.g., MLBB, FF, GENSHIN)',
                example: 'MLBB',
                options: ['MLBB', 'FF', 'GENSHIN', 'VALORANT', 'STEAM'],
            },
            {
                name: 'denomination',
                type: 'string',
                required: true,
                description: 'Denomination code (e.g., 5D, 86D)',
                example: '86D',
            },
        ],
        emoji: '💰',
    },
    {
        id: 'pricelist',
        name: 'Price List',
        group: CommandGroup.SHOPPING,
        description: 'Show all prices in an easy-to-read table format',
        aliases: ['prices', 'rates', 'all', 'complete'],
        requiresAuth: false,
        platformRender: {
            discord: '/pricelist [game] [tier]',
            telegram: '/pricelist [game] [tier]',
            whatsapp: '!pricelist [game] [tier]',
        },
        params: [
            {
                name: 'game',
                type: 'string',
                required: false,
                description: 'Optional: filter by game (e.g., MLBB)',
                example: 'MLBB',
            },
            {
                name: 'tier',
                type: 'enum',
                required: false,
                description: 'Optional: show prices for tier (bronze/silver/gold/agency)',
                options: ['bronze', 'silver', 'gold', 'agency'],
            },
        ],
        emoji: '📋',
    },
    {
        id: 'breakdown',
        name: 'Price Breakdown',
        group: CommandGroup.SHOPPING,
        description: 'Show detailed price calculation: cost + tax + margin = final price',
        aliases: ['breakdown', 'calc', 'transparent', 'detail'],
        requiresAuth: false,
        platformRender: {
            discord: '/breakdown <game> <denomination>',
            telegram: '/breakdown <game> <denomination>',
            whatsapp: '!breakdown <game> <denomination>',
        },
        params: [
            {
                name: 'game',
                type: 'enum',
                required: true,
                description: 'Game code',
                options: ['MLBB', 'FF', 'GENSHIN', 'VALORANT', 'STEAM'],
            },
            {
                name: 'denomination',
                type: 'string',
                required: true,
                description: 'Denomination code',
                example: '86D',
            },
        ],
        emoji: '📊',
    },
    // ============================================
    // ACCOUNT COMMANDS (Profile & balance)
    // ============================================
    {
        id: 'register',
        name: 'Register',
        group: CommandGroup.ACCOUNT,
        description: 'Create or link your account to this bot',
        aliases: ['signup', 'join', 'create'],
        requiresAuth: false,
        platformRender: {
            discord: '/register <username> <name>',
            telegram: '/register <username> <name>',
            whatsapp: '!register <username> <name>',
        },
        params: [
            {
                name: 'username',
                type: 'string',
                required: true,
                description: 'Your unique username (alphanumeric, 3-16 chars)',
                example: 'myusername',
            },
            {
                name: 'name',
                type: 'string',
                required: true,
                description: 'Your full name',
                example: 'John Doe',
            },
        ],
        emoji: '📝',
    },
    {
        id: 'profile',
        name: 'Profile',
        group: CommandGroup.ACCOUNT,
        description: 'View your account info: username, tier, balance, order history',
        aliases: ['me', 'account', 'stats', 'info'],
        requiresAuth: true,
        platformRender: {
            discord: '/profile',
            telegram: '/profile',
            whatsapp: '!profile',
        },
        emoji: '👤',
    },
    {
        id: 'balance',
        name: 'Balance',
        group: CommandGroup.ACCOUNT,
        description: 'Check your current account balance',
        aliases: ['wallet', 'funds', 'credit', 'money'],
        requiresAuth: true,
        platformRender: {
            discord: '/balance',
            telegram: '/balance',
            whatsapp: '!balance',
        },
        emoji: '💵',
    },
    {
        id: 'topup',
        name: 'Top Up',
        group: CommandGroup.ACCOUNT,
        description: 'Add funds to your account (deposit via bank transfer)',
        aliases: ['deposit', 'fund', 'add'],
        requiresAuth: true,
        platformRender: {
            discord: '/topup <amount>',
            telegram: '/topup <amount>',
            whatsapp: '!topup <amount>',
        },
        params: [
            {
                name: 'amount',
                type: 'number',
                required: true,
                description: 'Amount in IDR (e.g., 100000)',
                example: '100000',
            },
        ],
        emoji: '➕',
    },
    // ============================================
    // ORDER COMMANDS (Placing & tracking orders)
    // ============================================
    {
        id: 'order',
        name: 'Order',
        group: CommandGroup.ORDERS,
        description: 'Place a new game top-up order (step-by-step guided flow)',
        aliases: ['buy', 'purchase', 'topup'],
        requiresAuth: true,
        platformRender: {
            discord: '/order',
            telegram: '/order',
            whatsapp: '!order',
        },
        availableTo: ['endUser', 'reseller', 'distributor', 'admin'],
        emoji: '🛒',
    },
    {
        id: 'status',
        name: 'Order Status',
        group: CommandGroup.ORDERS,
        description: 'Check status of a specific order by order ID',
        aliases: ['check', 'track', 'orderstatus'],
        requiresAuth: true,
        platformRender: {
            discord: '/status <order_id>',
            telegram: '/status <order_id>',
            whatsapp: '!status <order_id>',
        },
        params: [
            {
                name: 'order_id',
                type: 'string',
                required: true,
                description: 'Your order ID (format: NNG-XXXXXXXX)',
                example: 'NNG-12345678',
            },
        ],
        emoji: '📦',
    },
    {
        id: 'history',
        name: 'Order History',
        group: CommandGroup.ORDERS,
        description: 'View your last 10 orders with timestamps and statuses',
        aliases: ['orders', 'recent', 'list'],
        requiresAuth: true,
        platformRender: {
            discord: '/history [limit]',
            telegram: '/history [limit]',
            whatsapp: '!history [limit]',
        },
        params: [
            {
                name: 'limit',
                type: 'number',
                required: false,
                description: 'Number of orders to show (default: 10, max: 50)',
                example: '10',
            },
        ],
        emoji: '📜',
    },
    // ============================================
    // RESELLER COMMANDS (For affiliates & resellers)
    // ============================================
    {
        id: 'reseller',
        name: 'Reseller',
        group: CommandGroup.RESELLER,
        description: 'Reseller program info, commission rates, affiliate link',
        aliases: ['affiliate', 'partner', 'seller'],
        requiresAuth: true,
        platformRender: {
            discord: '/reseller',
            telegram: '/reseller',
            whatsapp: '!reseller',
        },
        availableTo: ['reseller', 'distributor', 'admin'],
        emoji: '🤝',
    },
    {
        id: 'resellerprices',
        name: 'Reseller Prices',
        group: CommandGroup.RESELLER,
        description: 'View your reseller-only pricing and tier benefits',
        aliases: ['resellerrate', 'myprices', 'tierprices'],
        requiresAuth: true,
        platformRender: {
            discord: '/resellerprices',
            telegram: '/resellerprices',
            whatsapp: '!resellerprices',
        },
        availableTo: ['reseller', 'distributor', 'admin'],
        emoji: '💎',
    },
    {
        id: 'commission',
        name: 'Commission',
        group: CommandGroup.RESELLER,
        description: 'View your earned commissions and withdrawal options',
        aliases: ['earnings', 'withdraw', 'payout'],
        requiresAuth: true,
        platformRender: {
            discord: '/commission',
            telegram: '/commission',
            whatsapp: '!commission',
        },
        availableTo: ['reseller', 'distributor', 'admin'],
        emoji: '💸',
    },
    // ============================================
    // SUPPORT COMMANDS (Help & troubleshooting)
    // ============================================
    {
        id: 'support',
        name: 'Support',
        group: CommandGroup.SUPPORT,
        description: 'Contact support team via ticket system',
        aliases: ['ticket', 'help', 'contact'],
        requiresAuth: true,
        platformRender: {
            discord: '/support <subject>',
            telegram: '/support <subject>',
            whatsapp: '!support <subject>',
        },
        params: [
            {
                name: 'subject',
                type: 'string',
                required: false,
                description: 'Brief description of your issue',
                example: 'Order not received',
            },
        ],
        emoji: '🆘',
    },
    {
        id: 'faq',
        name: 'FAQ',
        group: CommandGroup.SUPPORT,
        description: 'Common questions & answers',
        aliases: ['question', 'qa'],
        requiresAuth: false,
        platformRender: {
            discord: '/faq [category]',
            telegram: '/faq [category]',
            whatsapp: '!faq [category]',
        },
        params: [
            {
                name: 'category',
                type: 'enum',
                required: false,
                description: 'FAQ category',
                options: ['payment', 'order', 'refund', 'account', 'reseller'],
            },
        ],
        emoji: '📚',
    },
    // ============================================
    // ADMIN COMMANDS (Owner/moderator only)
    // ============================================
    {
        id: 'admin',
        name: 'Admin',
        group: CommandGroup.ADMIN,
        description: 'Admin dashboard & controls',
        aliases: ['dashboard', 'settings'],
        requiresAuth: true,
        platformRender: {
            discord: '/admin',
            telegram: '/admin',
            whatsapp: '!admin',
        },
        availableTo: ['admin'],
        emoji: '⚙️',
    },
    {
        id: 'sustainability',
        name: 'Sustainability Report',
        group: CommandGroup.ADMIN,
        description: 'View system health: revenue, costs, margins, sustainability metrics',
        aliases: ['report', 'health', 'metrics'],
        requiresAuth: true,
        platformRender: {
            discord: '/sustainability',
            telegram: '/sustainability',
            whatsapp: '!sustainability',
        },
        availableTo: ['admin'],
        emoji: '📈',
    },
    {
        id: 'health',
        name: 'System Health',
        group: CommandGroup.ADMIN,
        description: 'Check connectivity to supplier and database health',
        aliases: ['syshealth', 'checkhealth', 'ping'],
        requiresAuth: true,
        platformRender: {
            discord: '/health',
            telegram: '/health',
            whatsapp: '!health',
        },
        availableTo: ['admin'],
        emoji: '🩺',
    },
];
/**
 * Utility: Get command by ID
 */
function getCommandById(id) {
    return exports.CORE_COMMANDS.find((cmd) => cmd.id === id);
}
/**
 * Utility: Get commands by group
 */
function getCommandsByGroup(group) {
    return exports.CORE_COMMANDS.filter((cmd) => cmd.group === group);
}
/**
 * Utility: Get all aliases for a command
 */
function getCommandAliases(commandId) {
    const cmd = getCommandById(commandId);
    return cmd ? [cmd.id, ...cmd.aliases] : [];
}
/**
 * Utility: Find command by alias (case-insensitive)
 */
function findCommandByAlias(input) {
    const normalized = input.toLowerCase().replace(/^[\/!]+/, '');
    return exports.CORE_COMMANDS.find((cmd) => {
        const allNames = [cmd.id, ...cmd.aliases].map((n) => n.toLowerCase());
        return allNames.includes(normalized);
    });
}
/**
 * Utility: Get platform-specific command string
 */
function getPlatformCommand(commandId, platform) {
    const cmd = getCommandById(commandId);
    if (!cmd)
        return undefined;
    return cmd.platformRender[platform];
}
//# sourceMappingURL=core-commands.js.map