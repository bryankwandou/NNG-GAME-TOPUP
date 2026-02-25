"use strict";
// src/bots/command.registry.ts
/**
 * Unified command registry for all platforms (Discord, Telegram, WhatsApp)
 * This ensures consistency across chat interfaces
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandRegistry = exports.COMMAND_REGISTRY = exports.CommandGroup = void 0;
const database_1 = require("../config/database");
const price_breakdown_service_1 = require("../modules/pricing/price-breakdown.service");
const pricing_config_1 = require("../config/pricing.config");
const order_flow_1 = require("./order.flow");
var CommandGroup;
(function (CommandGroup) {
    CommandGroup["ACCOUNT"] = "account";
    CommandGroup["PRODUCTS"] = "products";
    CommandGroup["ORDERS"] = "orders";
    CommandGroup["SUPPORT"] = "support";
    CommandGroup["ADMIN"] = "admin";
})(CommandGroup || (exports.CommandGroup = CommandGroup = {}));
exports.COMMAND_REGISTRY = [
    // ============= ACCOUNT COMMANDS =============
    {
        name: 'register',
        group: CommandGroup.ACCOUNT,
        description: 'Create or link your reseller account',
        aliases: ['signup', 'join'],
        requiresAuth: false,
        platforms: ['discord', 'telegram', 'whatsapp'],
        platformSpecific: {
            discord: '/register',
            telegram: '/register',
            whatsapp: '!register',
        },
        params: [
            { name: 'name', type: 'string', required: true, description: 'Your full name' },
            { name: 'username', type: 'string', required: true, description: 'Your username' },
        ],
        handler: async (ctx) => { ctx.send('Registration handler'); }
    },
    {
        name: 'profile',
        group: CommandGroup.ACCOUNT,
        description: 'View your account profile and balance',
        aliases: ['me', 'account', 'stats'],
        requiresAuth: true,
        platforms: ['discord', 'telegram', 'whatsapp'],
        platformSpecific: {
            discord: '/profile',
            telegram: '/profile',
            whatsapp: '!profile',
        },
        handler: async (ctx) => { ctx.send('Profile handler'); }
    },
    {
        name: 'deposit',
        group: CommandGroup.ACCOUNT,
        description: 'Create a deposit to add funds',
        aliases: ['topup', 'fund'],
        requiresAuth: true,
        platforms: ['discord', 'telegram', 'whatsapp'],
        platformSpecific: {
            discord: '/deposit',
            telegram: '/deposit',
            whatsapp: '!deposit',
        },
        params: [
            { name: 'amount', type: 'number', required: true, description: 'Amount to deposit' },
        ],
        handler: async (ctx) => { ctx.send('Deposit handler'); }
    },
    {
        name: 'price',
        group: CommandGroup.PRODUCTS,
        description: 'Check price for a specific product',
        aliases: ['cost', 'rate'],
        requiresAuth: false,
        platforms: ['discord', 'telegram', 'whatsapp'],
        platformSpecific: {
            discord: '/price',
            telegram: '/price',
            whatsapp: '!price',
        },
        params: [
            { name: 'product', type: 'string', required: true, description: 'Product code' },
        ],
        handler: async (ctx) => {
            const breakdownSvc = new price_breakdown_service_1.PriceBreakdownService(database_1.prisma, pricing_config_1.pricingConfigManager.getConfig());
            const { PriceFlow } = require('./price.flow');
            const priceFlow = new PriceFlow(database_1.prisma, breakdownSvc);
            await priceFlow.handlePriceCommand(ctx);
        }
    },
    {
        name: 'order',
        group: CommandGroup.ORDERS,
        description: 'Place a new top-up order',
        aliases: ['buy', 'topup', 'purchase'],
        requiresAuth: true,
        platforms: ['discord', 'telegram', 'whatsapp'],
        platformSpecific: {
            discord: '/order',
            telegram: '/order',
            whatsapp: '!order',
        },
        params: [
            { name: 'product', type: 'string', required: true, description: 'Product code' },
            { name: 'gameId', type: 'string', required: true, description: 'Target game ID' },
        ],
        handler: async (ctx) => {
            const breakdownSvc = new price_breakdown_service_1.PriceBreakdownService(database_1.prisma, pricing_config_1.pricingConfigManager.getConfig());
            const orderFlow = new order_flow_1.OrderFlow(database_1.prisma, breakdownSvc);
            await orderFlow.startOrderFlow(ctx, ctx.userId);
        }
    },
    {
        name: 'history',
        group: CommandGroup.ORDERS,
        description: 'View your recent orders',
        aliases: ['orders', 'recent'],
        requiresAuth: true,
        platforms: ['discord', 'telegram', 'whatsapp'],
        platformSpecific: {
            discord: '/history',
            telegram: '/history',
            whatsapp: '!history',
        },
        handler: async (ctx) => { ctx.send('History handler'); }
    },
    {
        name: 'health',
        group: CommandGroup.ADMIN,
        description: 'Check system health',
        aliases: ['status', 'ping'],
        requiresAuth: true,
        platforms: ['discord', 'telegram', 'whatsapp'],
        platformSpecific: {
            discord: '/health',
            telegram: '/health',
            whatsapp: '!health',
        },
        handler: async (ctx) => { ctx.send('Health handler'); }
    },
    {
        name: 'help',
        group: CommandGroup.SUPPORT,
        description: 'Show help and available commands',
        aliases: ['h', 'commands'],
        requiresAuth: false,
        platforms: ['discord', 'telegram', 'whatsapp'],
        platformSpecific: {
            discord: '/help',
            telegram: '/help',
            whatsapp: '!help',
        },
        handler: async (ctx) => { ctx.send('Help handler'); }
    }
];
class CommandRegistry {
    constructor(commands = exports.COMMAND_REGISTRY) {
        this.commands = commands;
    }
    getCommand(name) {
        return this.commands.find((cmd) => cmd.name === name || cmd.aliases.includes(name));
    }
    getCommandsByGroup(group) {
        return this.commands.filter((cmd) => cmd.group === group);
    }
    getAllCommands() {
        return this.commands;
    }
    getHelpText(platform) {
        const groups = Object.values(CommandGroup);
        let help = `**NNG GAME TOP UP STORE BOT – Command List**\n\n`;
        for (const group of groups) {
            const commands = this.getCommandsByGroup(group);
            if (commands.length === 0)
                continue;
            help += `**${group.toUpperCase()}**\n`;
            for (const cmd of commands) {
                const platformCmd = cmd.platformSpecific[platform] || cmd.name;
                help += `• \`${platformCmd}\` – ${cmd.description}\n`;
            }
            help += '\n';
        }
        return help;
    }
}
exports.CommandRegistry = CommandRegistry;
//# sourceMappingURL=command.registry.js.map