/**
 * Telegram Bot Implementation (Refactored)
 * Extends BotAdapterBase to ensure consistency across platforms
 */

import { Telegraf, Context } from 'telegraf';
import { BotAdapterBase, BotReplyOptions } from '../adapter.base';
import { CommandRegistry, CommandContext } from '../command.registry';
import { env } from '../../config/env';
import { logger } from '../../config/logger';

export class TelegramBotAdapter extends BotAdapterBase {
  private bot: Telegraf<Context> | null = null;
  private commandRegistry: CommandRegistry;

  constructor() {
    super('telegram');
    this.commandRegistry = new CommandRegistry();
  }

  async initialize(): Promise<void> {
    if (!env.TELEGRAM_TOKEN) {
      logger.warn('TELEGRAM_TOKEN not set, skipping Telegram bot');
      return;
    }

    this.bot = new Telegraf(env.TELEGRAM_TOKEN);

    this.bot.on('text', async (ctx) => {
      const text = ctx.message.text.trim();
      if (text.startsWith('/')) {
        const parts = text.substring(1).split(' ');
        const commandName = parts[0].toLowerCase();
        const args = parts.slice(1);
        const command = this.commandRegistry.getCommand(commandName);

        if (command) {
          const context: CommandContext = {
            platform: 'telegram',
            adapter: this,
            userId: ctx.from.id.toString(),
            username: ctx.from.username || ctx.from.first_name,
            channelId: ctx.chat.id.toString(),
            args,
            command: commandName,
            send: async (msg) => {
              await ctx.reply(msg);
            },
            sendEmbed: async (opts) => {
              let content = '';
              if (opts.text) content += opts.text + '\n';
              if (opts.embeds && opts.embeds.length > 0) {
                const e = opts.embeds[0];
                if (e.title) content += `*${e.title}*\n`;
                if (e.description) content += `${e.description}\n`;
                if (e.fields) {
                  e.fields.forEach(f => { content += `\n*${f.name}*\n${f.value}\n`; });
                }
              }

              const extra: any = { parse_mode: 'Markdown' };

              // Handle standard BotReplyOptions menus/buttons
              if (opts.menus && opts.menus.length > 0) {
                const inlineKeyboard = opts.menus[0].options.map(opt => [
                  { text: opt.label, callback_data: `menu:${opt.value}` }
                ]);
                extra.reply_markup = { inline_keyboard: inlineKeyboard };
              }

              // Handle platform-specific reply_markup from templates
              if ((opts as any).reply_markup) {
                extra.reply_markup = (opts as any).reply_markup;
              }

              await ctx.reply(content.trim(), extra);
            }
          };
          await command.handler(context);
        }
      }
    });

    this.bot.on('callback_query', async (ctx) => {
      const data = (ctx.callbackQuery as any).data;
      if (data && data.startsWith('menu:')) {
        const selectedValue = data.split(':')[1];
        await ctx.answerCbQuery();
        await ctx.reply(`✅ Selected: ${selectedValue}. This interactive flow will be connected to the Session Manager.`);
      }
    });

    await this.bot.launch();
    logger.info('Telegram bot started');
  }

  async sendMessage(channelId: string, message: string): Promise<string> {
    if (!this.bot) throw new Error('Telegram bot not initialized');
    const msg = await this.bot.telegram.sendMessage(channelId, message);
    return msg.message_id.toString();
  }

  async sendEmbed(channelId: string, options: BotReplyOptions): Promise<string> {
    if (!this.bot) throw new Error('Telegram bot not initialized');
    let content = '';
    if (options.text) content += options.text + '\n';
    if (options.embeds && options.embeds.length > 0) {
      const e = options.embeds[0];
      if (e.title) content += `*${e.title}*\n`;
      if (e.description) content += `${e.description}\n`;
    }
    const msg = await this.bot.telegram.sendMessage(channelId, content.trim(), { parse_mode: 'Markdown' });
    return msg.message_id.toString();
  }

  formatPriceBreakdownView(previewData: import('../order-message-templates').OrderPreviewData): BotReplyOptions {
    const { formatOrderPreviewTelegram } = require('../order-message-templates');
    return formatOrderPreviewTelegram(previewData);
  }

  async linkUserToReseller(userId: string, resellerId: string): Promise<void> {
    logger.info(`Linked ${userId} to ${resellerId}`);
  }

  async getResellerIdFromUser(_userId: string): Promise<string | null> {
    return null;
  }

  async shutdown(): Promise<void> {
    if (this.bot) this.bot.stop();
  }
}

let telegramAdapter: TelegramBotAdapter | null = null;

export async function initializeTelegramBot(): Promise<void> {
  telegramAdapter = new TelegramBotAdapter();
  await telegramAdapter.initialize();
}

export function getTelegramAdapter(): TelegramBotAdapter {
  if (!telegramAdapter) throw new Error('Telegram bot not initialized');
  return telegramAdapter;
}
