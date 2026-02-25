// src/bots/command.registry.ts
/**
 * Unified command registry for all platforms (Discord, Telegram, WhatsApp)
 * This ensures consistency across chat interfaces
 */

import { BotReplyOptions, BotAdapterBase } from './adapter.base';
import { prisma } from '../config/database';
import { PriceBreakdownService } from '../modules/pricing/price-breakdown.service';
import { pricingConfigManager } from '../config/pricing.config';
import { OrderFlow } from './order.flow';

export enum CommandGroup {
  ACCOUNT = 'account',
  PRODUCTS = 'products',
  ORDERS = 'orders',
  SUPPORT = 'support',
  ADMIN = 'admin',
}

export interface CommandDefinition {
  name: string;
  group: CommandGroup;
  description: string;
  aliases: string[];
  requiresAuth: boolean;
  platforms: ('discord' | 'telegram' | 'whatsapp')[];
  platformSpecific: {
    discord?: string; // e.g., "/register"
    telegram?: string; // e.g., "/register"
    whatsapp?: string; // e.g., "!register"
  };
  params?: {
    name: string;
    type: 'string' | 'number' | 'enum' | 'integer';
    required: boolean;
    description: string;
    options?: string[]; // for enum type
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

export const COMMAND_REGISTRY: CommandDefinition[] = [
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
      const breakdownSvc = new PriceBreakdownService(prisma, pricingConfigManager.getConfig());
      const { PriceFlow } = require('./price.flow');
      const priceFlow = new PriceFlow(prisma, breakdownSvc);
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
      const breakdownSvc = new PriceBreakdownService(prisma, pricingConfigManager.getConfig());
      const orderFlow = new OrderFlow(prisma, breakdownSvc);
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

export class CommandRegistry {
  constructor(private commands: CommandDefinition[] = COMMAND_REGISTRY) { }

  getCommand(name: string): CommandDefinition | undefined {
    return this.commands.find(
      (cmd) => cmd.name === name || cmd.aliases.includes(name)
    );
  }

  getCommandsByGroup(group: CommandGroup): CommandDefinition[] {
    return this.commands.filter((cmd) => cmd.group === group);
  }

  getAllCommands(): CommandDefinition[] {
    return this.commands;
  }

  getHelpText(platform: 'discord' | 'telegram' | 'whatsapp'): string {
    const groups = Object.values(CommandGroup);
    let help = `**NNG GAME TOP UP STORE BOT – Command List**\n\n`;

    for (const group of groups) {
      const commands = this.getCommandsByGroup(group);
      if (commands.length === 0) continue;

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
