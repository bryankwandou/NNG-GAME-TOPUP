/**
 * Discord Bot Implementation (Refactored)
 * Extends BotAdapterBase to ensure consistency across platforms
 * Uses unified CommandRegistry for command definitions
 */

import {
  Client,
  GatewayIntentBits,
  SlashCommandBuilder,
  REST,
  Routes,
  ChatInputCommandInteraction,
  EmbedBuilder,
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder,
  ActionRowBuilder,
} from 'discord.js';
import { BotAdapterBase, BotReplyOptions } from '../adapter.base';
import { CommandRegistry, CommandContext } from '../command.registry';
import { env } from '../../config/env';
import { createLogger } from '../../config/logger';

const logger = createLogger('DiscordBot');

export class DiscordBotAdapter extends BotAdapterBase {
  private client: Client;
  private commandRegistry: CommandRegistry;

  constructor() {
    super('discord');
    this.client = new Client({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.DirectMessages,
      ],
    });
    this.commandRegistry = new CommandRegistry();
  }

  /**
   * Initialize Discord bot connection
   */
  async initialize(): Promise<void> {
    this.client.once('ready', () => {
      logger.info(`Discord bot logged in as ${this.client.user?.tag}`);
      this.registerSlashCommands();
    });

    this.client.on('interactionCreate', async (interaction) => {
      if (interaction.isStringSelectMenu()) {
        await interaction.reply({ content: `✅ Selected: ${interaction.values[0]}. This interactive flow will be connected to the Session Manager.`, ephemeral: true });
        return;
      }
      if (!interaction.isChatInputCommand()) return;
      try {
        await this.handleCommand(interaction);
      } catch (error) {
        logger.error(`Discord command error`, { error });
        const reply = {
          content: `❌ Error: ${(error as Error).message}`,
          ephemeral: true,
        };
        if (interaction.deferred || interaction.replied) {
          await interaction.editReply(reply);
        } else {
          await interaction.reply(reply);
        }
      }
    });

    if (!env.DISCORD_TOKEN) {
      throw new Error('DISCORD_TOKEN not configured');
    }

    await this.client.login(env.DISCORD_TOKEN);
  }

  /**
   * Register slash commands from CommandRegistry
   */
  private async registerSlashCommands(): Promise<void> {
    const commands = this.commandRegistry.getAllCommands();
    const discordCommands = commands
      .filter((cmd) => cmd.platforms.includes('discord'))
      .map((cmd) => {
        const builder = new SlashCommandBuilder()
          .setName(cmd.name)
          .setDescription(cmd.description);

        if (cmd.params) {
          cmd.params.forEach((param) => {
            if (param.type === 'string') {
              builder.addStringOption((option) =>
                option
                  .setName(param.name)
                  .setDescription(param.description || '')
                  .setRequired(param.required !== false)
              );
            } else if (param.type === 'integer' || param.type === 'number') {
              builder.addIntegerOption((option) =>
                option
                  .setName(param.name)
                  .setDescription(param.description || '')
                  .setRequired(param.required !== false)
              );
            }
          });
        }

        return builder.toJSON();
      });

    const rest = new REST({ version: '10' }).setToken(env.DISCORD_TOKEN || '');

    try {
      if (!env.DISCORD_CLIENT_ID) return;
      await rest.put(Routes.applicationCommands(env.DISCORD_CLIENT_ID), {
        body: discordCommands,
      });
      logger.info('Slash commands registered');
    } catch (error) {
      logger.error('Failed to register slash commands', { error });
    }
  }

  /**
   * Unified command handler leveraging CommandRegistry
   */
  private async handleCommand(interaction: ChatInputCommandInteraction): Promise<void> {
    const userId = interaction.user.id;
    const command = this.commandRegistry.getCommand(interaction.commandName);

    if (!command) {
      await interaction.reply({ content: '❌ Unknown command', ephemeral: true });
      return;
    }

    const context: CommandContext = {
      platform: 'discord',
      adapter: this,
      userId,
      username: interaction.user.username,
      channelId: interaction.channelId,
      args: interaction.options.data.map(opt => opt.value?.toString() || ''),
      command: interaction.commandName,
      send: async (msg) => {
        if (interaction.deferred || interaction.replied) {
          await interaction.editReply(msg);
        } else {
          await interaction.reply(msg);
        }
      },
      sendEmbed: async (opts) => {
        const payload: any = {};
        const embeds: EmbedBuilder[] = [];

        if (opts.embeds && opts.embeds.length > 0) {
          const embed = opts.embeds[0];
          const dEmbed = new EmbedBuilder()
            .setTitle(embed.title || null)
            .setDescription(embed.description || null)
            .setColor((embed.color as any) || 0x0099ff);

          if (embed.fields) {
            embed.fields.forEach(f => dEmbed.addFields({ name: f.name, value: f.value, inline: f.inline }));
          }
          embeds.push(dEmbed);
        } else if (opts.text) {
          // If no embed but text is provided, use it as content
          payload.content = opts.text;
        }

        if (embeds.length > 0) {
          payload.embeds = embeds;
        }

        const components: any[] = [];
        if (opts.menus && opts.menus.length > 0) {
          opts.menus.forEach(menu => {
            const selectMenu = new StringSelectMenuBuilder()
              .setCustomId(menu.id)
              .setPlaceholder(menu.placeholder || 'Make a selection');

            menu.options.forEach(opt => {
              selectMenu.addOptions(
                new StringSelectMenuOptionBuilder()
                  .setLabel(opt.label)
                  .setValue(opt.value)
                  .setDescription(opt.description || '')
              );
            });
            const row = new ActionRowBuilder().addComponents(selectMenu);
            components.push(row);
          });
        }

        if (components.length > 0) {
          payload.components = components;
        }

        if (interaction.deferred || interaction.replied) {
          await interaction.editReply(payload);
        } else {
          await interaction.reply(payload);
        }
      }
    };

    await command.handler(context);
  }

  async sendMessage(channelId: string, message: string): Promise<string> {
    const channel = await this.client.channels.fetch(channelId);
    if (!channel || !channel.isTextBased()) throw new Error('Channel not found');
    const msg = await (channel as any).send(message);
    return msg.id;
  }

  async sendEmbed(channelId: string, options: BotReplyOptions): Promise<string> {
    const channel = await this.client.channels.fetch(channelId);
    if (!channel || !channel.isTextBased()) throw new Error('Channel not found');

    const embed = options.embeds?.[0];
    if (!embed) throw new Error('No embed data provided');

    const discordEmbed = new EmbedBuilder()
      .setTitle(embed.title || null)
      .setDescription(embed.description || null)
      .setColor((embed.color as any) || 0x0099ff);

    if (embed.fields) {
      embed.fields.forEach((field) => {
        discordEmbed.addFields({
          name: field.name,
          value: field.value,
          inline: field.inline,
        });
      });
    }

    const msg = await (channel as any).send({ embeds: [discordEmbed] });
    return msg.id;
  }

  formatPriceBreakdownView(previewData: import('../order-message-templates').OrderPreviewData): BotReplyOptions {
    const { formatOrderPreviewDiscord } = require('../order-message-templates');
    return formatOrderPreviewDiscord(previewData);
  }

  async linkUserToReseller(_userId: string, _resellerId: string): Promise<void> { }
  async getResellerIdFromUser(_userId: string): Promise<string | null> { return null; }
  async shutdown(): Promise<void> { await this.client.destroy(); }
}

let discordAdapter: DiscordBotAdapter | null = null;
export async function initializeDiscordBot(): Promise<void> {
  discordAdapter = new DiscordBotAdapter();
  await discordAdapter.initialize();
}
export function getDiscordAdapter(): DiscordBotAdapter {
  if (!discordAdapter) throw new Error('Bot not initialized');
  return discordAdapter;
}
