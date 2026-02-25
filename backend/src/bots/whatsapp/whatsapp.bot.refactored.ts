/**
 * WhatsApp Bot Implementation (Refactored)
 * Extends BotAdapterBase to ensure consistency across platforms
 */

import { Client, LocalAuth, List } from 'whatsapp-web.js';
import { BotAdapterBase, BotReplyOptions } from '../adapter.base';
import { CommandRegistry, CommandContext } from '../command.registry';
import { createLogger } from '../../config/logger';

const logger = createLogger('WhatsAppBot');

export class WhatsAppBotAdapter extends BotAdapterBase {
  private client: Client | null = null;
  private commandRegistry: CommandRegistry;
  private isReady: boolean = false;

  constructor() {
    super('whatsapp');
    this.commandRegistry = new CommandRegistry();
  }

  async initialize(): Promise<void> {
    this.client = new Client({
      authStrategy: new LocalAuth(),
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
      if (message.fromMe) return;
      try {
        await this.handleMessage(message);
      } catch (error) {
        logger.error('WhatsApp message handler error', { error });
      }
    });

    await this.client.initialize();
  }

  private async handleMessage(message: any): Promise<void> {
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
        const context: CommandContext = {
          platform: 'whatsapp',
          adapter: this,
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
            if (opts.text) content += opts.text + '\n';
            if (opts.embeds && opts.embeds.length > 0) {
              const e = opts.embeds[0];
              if (e.title) content += `*${e.title}*\n`;
              if (e.description) content += `${e.description}\n`;
              if (e.fields) {
                e.fields.forEach(f => { content += `\n*${f.name}*\n${f.value}\n`; });
              }
            }

            if (opts.menus && opts.menus.length > 0) {
              const menu = opts.menus[0];
              const listMessage = new List(
                content.trim() || 'Please select an option below:',
                'View Options',
                [
                  {
                    title: menu.placeholder || 'Options',
                    rows: menu.options.map(opt => ({
                      id: `menu:${opt.value}`,
                      title: opt.label,
                      description: opt.description || ''
                    }))
                  }
                ],
                'Interactive Menu'
              );
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

  async sendMessage(channelId: string, message: string): Promise<string> {
    if (!this.client || !this.isReady) throw new Error('WhatsApp bot not ready');
    const response = await this.client.sendMessage(channelId, message);
    return response.id.id;
  }

  async sendEmbed(channelId: string, options: BotReplyOptions): Promise<string> {
    if (!this.client || !this.isReady) throw new Error('WhatsApp bot not ready');
    let content = '';
    if (options.text) content += options.text + '\n';
    if (options.embeds && options.embeds.length > 0) {
      const e = options.embeds[0];
      if (e.title) content += `*${e.title}*\n`;
      if (e.description) content += `${e.description}\n`;
      if (e.fields) {
        e.fields.forEach(f => { content += `\n*${f.name}*\n${f.value}\n`; });
      }
    }
    const response = await this.client.sendMessage(channelId, content.trim());
    return response.id.id;
  }

  formatPriceBreakdownView(previewData: import('../order-message-templates').OrderPreviewData): BotReplyOptions {
    const { formatOrderPreviewWhatsApp } = require('../order-message-templates');
    return { text: formatOrderPreviewWhatsApp(previewData) };
  }

  async linkUserToReseller(userId: string, resellerId: string): Promise<void> {
    logger.info(`Linked ${userId} to ${resellerId}`);
  }

  async getResellerIdFromUser(_userId: string): Promise<string | null> {
    return null;
  }

  async shutdown(): Promise<void> {
    if (this.client) await this.client.destroy();
  }
}

let whatsappAdapter: WhatsAppBotAdapter | null = null;

export async function initializeWhatsAppBot(): Promise<void> {
  whatsappAdapter = new WhatsAppBotAdapter();
  await whatsappAdapter.initialize();
}

export function getWhatsAppAdapter(): WhatsAppBotAdapter {
  if (!whatsappAdapter) throw new Error('WhatsApp bot not initialized');
  return whatsappAdapter;
}
