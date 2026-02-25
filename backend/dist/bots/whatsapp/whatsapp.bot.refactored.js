"use strict";
/**
 * WhatsApp Bot Implementation (Refactored)
 * Extends BotAdapterBase to ensure consistency across platforms
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhatsAppBotAdapter = void 0;
exports.initializeWhatsAppBot = initializeWhatsAppBot;
exports.getWhatsAppAdapter = getWhatsAppAdapter;
const whatsapp_web_js_1 = require("whatsapp-web.js");
const adapter_base_1 = require("../adapter.base");
const command_registry_1 = require("../command.registry");
const logger_1 = require("../../config/logger");
const logger = (0, logger_1.createLogger)('WhatsAppBot');
class WhatsAppBotAdapter extends adapter_base_1.BotAdapterBase {
    constructor() {
        super('whatsapp');
        this.client = null;
        this.isReady = false;
        this.commandRegistry = new command_registry_1.CommandRegistry();
    }
    async initialize() {
        this.client = new whatsapp_web_js_1.Client({
            authStrategy: new whatsapp_web_js_1.LocalAuth(),
            puppeteer: {
                args: ['--no-sandbox', '--disable-setuid-sandbox'],
                headless: true,
            },
        });
        this.client.on('qr', (_qr) => {
            logger.info('WhatsApp QR code generated');
        });
        this.client.on('ready', () => {
            logger.info('WhatsApp bot is ready');
            this.isReady = true;
        });
        this.client.on('message_create', async (message) => {
            if (message.fromMe)
                return;
            try {
                await this.handleMessage(message);
            }
            catch (error) {
                logger.error('WhatsApp message handler error', { error });
            }
        });
        await this.client.initialize();
    }
    async handleMessage(message) {
        const text = message.body.trim();
        if (message.type === 'list_response') {
            const selectedId = message.selectedRowId;
            if (selectedId && selectedId.startsWith('menu:')) {
                const selectedValue = selectedId.split(':')[1];
                await message.reply(`✅ Selected: ${selectedValue}. This interactive flow will be connected to the Session Manager.`);
                return;
            }
        }
        if (text.startsWith('!') || text.startsWith('/')) {
            const parts = text.substring(1).split(' ');
            const commandName = parts[0].toLowerCase();
            const args = parts.slice(1);
            const command = this.commandRegistry.getCommand(commandName);
            if (command) {
                const context = {
                    platform: 'whatsapp',
                    userId: message.from,
                    username: message.pushname || 'WhatsApp User',
                    channelId: message.from,
                    args,
                    command: commandName,
                    send: async (msg) => {
                        await message.reply(msg);
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
                        if (opts.menus && opts.menus.length > 0) {
                            const menu = opts.menus[0];
                            const listMessage = new whatsapp_web_js_1.List(content.trim() || 'Please select an option below:', 'View Options', [
                                {
                                    title: menu.placeholder || 'Options',
                                    rows: menu.options.map(opt => ({
                                        id: `menu:${opt.value}`,
                                        title: opt.label,
                                        description: opt.description || ''
                                    }))
                                }
                            ], 'Interactive Menu');
                            await message.reply(listMessage);
                            return;
                        }
                        await message.reply(content.trim());
                    }
                };
                await command.handler(context);
            }
        }
    }
    async sendMessage(channelId, message) {
        if (!this.client || !this.isReady)
            throw new Error('WhatsApp bot not ready');
        const response = await this.client.sendMessage(channelId, message);
        return response.id.id;
    }
    async sendEmbed(channelId, options) {
        if (!this.client || !this.isReady)
            throw new Error('WhatsApp bot not ready');
        let content = '';
        if (options.text)
            content += options.text + '\n';
        if (options.embeds && options.embeds.length > 0) {
            const e = options.embeds[0];
            if (e.title)
                content += `*${e.title}*\n`;
            if (e.description)
                content += `${e.description}\n`;
            if (e.fields) {
                e.fields.forEach(f => { content += `\n*${f.name}*\n${f.value}\n`; });
            }
        }
        const response = await this.client.sendMessage(channelId, content.trim());
        return response.id.id;
    }
    async linkUserToReseller(userId, resellerId) {
        logger.info(`Linked ${userId} to ${resellerId}`);
    }
    async getResellerIdFromUser(_userId) {
        return null;
    }
    async shutdown() {
        if (this.client)
            await this.client.destroy();
    }
}
exports.WhatsAppBotAdapter = WhatsAppBotAdapter;
let whatsappAdapter = null;
async function initializeWhatsAppBot() {
    whatsappAdapter = new WhatsAppBotAdapter();
    await whatsappAdapter.initialize();
}
function getWhatsAppAdapter() {
    if (!whatsappAdapter)
        throw new Error('WhatsApp bot not initialized');
    return whatsappAdapter;
}
//# sourceMappingURL=whatsapp.bot.refactored.js.map