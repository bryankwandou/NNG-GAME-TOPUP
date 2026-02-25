"use strict";
/**
 * Telegram Bot Implementation (Refactored)
 * Extends BotAdapterBase to ensure consistency across platforms
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelegramBotAdapter = void 0;
exports.initializeTelegramBot = initializeTelegramBot;
exports.getTelegramAdapter = getTelegramAdapter;
const telegraf_1 = require("telegraf");
const adapter_base_1 = require("../adapter.base");
const command_registry_1 = require("../command.registry");
const env_1 = require("../../config/env");
const logger_1 = require("../../config/logger");
class TelegramBotAdapter extends adapter_base_1.BotAdapterBase {
    constructor() {
        super('telegram');
        this.bot = null;
        this.commandRegistry = new command_registry_1.CommandRegistry();
    }
    async initialize() {
        if (!env_1.env.TELEGRAM_TOKEN) {
            logger_1.logger.warn('TELEGRAM_TOKEN not set, skipping Telegram bot');
            return;
        }
        this.bot = new telegraf_1.Telegraf(env_1.env.TELEGRAM_TOKEN);
        this.bot.on('text', async (ctx) => {
            const text = ctx.message.text.trim();
            if (text.startsWith('/')) {
                const parts = text.substring(1).split(' ');
                const commandName = parts[0].toLowerCase();
                const args = parts.slice(1);
                const command = this.commandRegistry.getCommand(commandName);
                if (command) {
                    const context = {
                        platform: 'telegram',
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
                            if (opts.text)
                                content += opts.text + '\n';
                            if (opts.embeds && opts.embeds.length > 0) {
                                const e = opts.embeds[0];
                                if (e.title)
                                    content += `*${e.title}*\n`;
                                if (e.description)
                                    content += `${e.description}\n`;
                                if (e.fields) {
                                    e.fields.forEach(f => { content += `\n*${f.name}*\n${f.value}\n`; });
                                }
                            }
                            const extra = { parse_mode: 'Markdown' };
                            if (opts.menus && opts.menus.length > 0) {
                                const inlineKeyboard = opts.menus[0].options.map(opt => [
                                    { text: opt.label, callback_data: `menu:${opt.value}` }
                                ]);
                                extra.reply_markup = { inline_keyboard: inlineKeyboard };
                            }
                            await ctx.reply(content.trim(), extra);
                        }
                    };
                    await command.handler(context);
                }
            }
        });
        this.bot.on('callback_query', async (ctx) => {
            const data = ctx.callbackQuery.data;
            if (data && data.startsWith('menu:')) {
                const selectedValue = data.split(':')[1];
                await ctx.answerCbQuery();
                await ctx.reply(`✅ Selected: ${selectedValue}. This interactive flow will be connected to the Session Manager.`);
            }
        });
        await this.bot.launch();
        logger_1.logger.info('Telegram bot started');
    }
    async sendMessage(channelId, message) {
        if (!this.bot)
            throw new Error('Telegram bot not initialized');
        const msg = await this.bot.telegram.sendMessage(channelId, message);
        return msg.message_id.toString();
    }
    async sendEmbed(channelId, options) {
        if (!this.bot)
            throw new Error('Telegram bot not initialized');
        let content = '';
        if (options.text)
            content += options.text + '\n';
        if (options.embeds && options.embeds.length > 0) {
            const e = options.embeds[0];
            if (e.title)
                content += `*${e.title}*\n`;
            if (e.description)
                content += `${e.description}\n`;
        }
        const msg = await this.bot.telegram.sendMessage(channelId, content.trim(), { parse_mode: 'Markdown' });
        return msg.message_id.toString();
    }
    async linkUserToReseller(userId, resellerId) {
        logger_1.logger.info(`Linked ${userId} to ${resellerId}`);
    }
    async getResellerIdFromUser(_userId) {
        return null;
    }
    async shutdown() {
        if (this.bot)
            this.bot.stop();
    }
}
exports.TelegramBotAdapter = TelegramBotAdapter;
let telegramAdapter = null;
async function initializeTelegramBot() {
    telegramAdapter = new TelegramBotAdapter();
    await telegramAdapter.initialize();
}
function getTelegramAdapter() {
    if (!telegramAdapter)
        throw new Error('Telegram bot not initialized');
    return telegramAdapter;
}
//# sourceMappingURL=telegram.bot.refactored.js.map