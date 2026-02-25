"use strict";
/**
 * Discord Bot Implementation (Refactored)
 * Extends BotAdapterBase to ensure consistency across platforms
 * Uses unified CommandRegistry for command definitions
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordBotAdapter = void 0;
exports.initializeDiscordBot = initializeDiscordBot;
exports.getDiscordAdapter = getDiscordAdapter;
const discord_js_1 = require("discord.js");
const adapter_base_1 = require("../adapter.base");
const command_registry_1 = require("../command.registry");
const env_1 = require("../../config/env");
const logger_1 = require("../../config/logger");
const logger = (0, logger_1.createLogger)('DiscordBot');
class DiscordBotAdapter extends adapter_base_1.BotAdapterBase {
    constructor() {
        super('discord');
        this.client = new discord_js_1.Client({
            intents: [
                discord_js_1.GatewayIntentBits.Guilds,
                discord_js_1.GatewayIntentBits.GuildMessages,
                discord_js_1.GatewayIntentBits.MessageContent,
                discord_js_1.GatewayIntentBits.DirectMessages,
            ],
        });
        this.commandRegistry = new command_registry_1.CommandRegistry();
    }
    /**
     * Initialize Discord bot connection
     */
    async initialize() {
        this.client.once('ready', () => {
            logger.info(`Discord bot logged in as ${this.client.user?.tag}`);
            this.registerSlashCommands();
        });
        this.client.on('interactionCreate', async (interaction) => {
            if (interaction.isStringSelectMenu()) {
                await interaction.reply({ content: `✅ Selected: ${interaction.values[0]}. This interactive flow will be connected to the Session Manager.`, ephemeral: true });
                return;
            }
            if (!interaction.isChatInputCommand())
                return;
            try {
                await this.handleCommand(interaction);
            }
            catch (error) {
                logger.error(`Discord command error`, { error });
                const reply = {
                    content: `❌ Error: ${error.message}`,
                    ephemeral: true,
                };
                if (interaction.deferred || interaction.replied) {
                    await interaction.editReply(reply);
                }
                else {
                    await interaction.reply(reply);
                }
            }
        });
        if (!env_1.env.DISCORD_TOKEN) {
            throw new Error('DISCORD_TOKEN not configured');
        }
        await this.client.login(env_1.env.DISCORD_TOKEN);
    }
    /**
     * Register slash commands from CommandRegistry
     */
    async registerSlashCommands() {
        const commands = this.commandRegistry.getAllCommands();
        const discordCommands = commands
            .filter((cmd) => cmd.platforms.includes('discord'))
            .map((cmd) => {
            const builder = new discord_js_1.SlashCommandBuilder()
                .setName(cmd.name)
                .setDescription(cmd.description);
            if (cmd.params) {
                cmd.params.forEach((param) => {
                    if (param.type === 'string') {
                        builder.addStringOption((option) => option
                            .setName(param.name)
                            .setDescription(param.description || '')
                            .setRequired(param.required !== false));
                    }
                    else if (param.type === 'integer' || param.type === 'number') {
                        builder.addIntegerOption((option) => option
                            .setName(param.name)
                            .setDescription(param.description || '')
                            .setRequired(param.required !== false));
                    }
                });
            }
            return builder.toJSON();
        });
        const rest = new discord_js_1.REST({ version: '10' }).setToken(env_1.env.DISCORD_TOKEN || '');
        try {
            if (!env_1.env.DISCORD_CLIENT_ID)
                return;
            await rest.put(discord_js_1.Routes.applicationCommands(env_1.env.DISCORD_CLIENT_ID), {
                body: discordCommands,
            });
            logger.info('Slash commands registered');
        }
        catch (error) {
            logger.error('Failed to register slash commands', { error });
        }
    }
    /**
     * Unified command handler leveraging CommandRegistry
     */
    async handleCommand(interaction) {
        const userId = interaction.user.id;
        const command = this.commandRegistry.getCommand(interaction.commandName);
        if (!command) {
            await interaction.reply({ content: '❌ Unknown command', ephemeral: true });
            return;
        }
        const context = {
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
                }
                else {
                    await interaction.reply(msg);
                }
            },
            sendEmbed: async (opts) => {
                const payload = {};
                const embeds = [];
                if (opts.embeds && opts.embeds.length > 0) {
                    const embed = opts.embeds[0];
                    const dEmbed = new discord_js_1.EmbedBuilder()
                        .setTitle(embed.title || null)
                        .setDescription(embed.description || null)
                        .setColor(embed.color || 0x0099ff);
                    if (embed.fields) {
                        embed.fields.forEach(f => dEmbed.addFields({ name: f.name, value: f.value, inline: f.inline }));
                    }
                    embeds.push(dEmbed);
                }
                else if (opts.text) {
                    // If no embed but text is provided, use it as content
                    payload.content = opts.text;
                }
                if (embeds.length > 0) {
                    payload.embeds = embeds;
                }
                const components = [];
                if (opts.menus && opts.menus.length > 0) {
                    opts.menus.forEach(menu => {
                        const selectMenu = new discord_js_1.StringSelectMenuBuilder()
                            .setCustomId(menu.id)
                            .setPlaceholder(menu.placeholder || 'Make a selection');
                        menu.options.forEach(opt => {
                            selectMenu.addOptions(new discord_js_1.StringSelectMenuOptionBuilder()
                                .setLabel(opt.label)
                                .setValue(opt.value)
                                .setDescription(opt.description || ''));
                        });
                        const row = new discord_js_1.ActionRowBuilder().addComponents(selectMenu);
                        components.push(row);
                    });
                }
                if (components.length > 0) {
                    payload.components = components;
                }
                if (interaction.deferred || interaction.replied) {
                    await interaction.editReply(payload);
                }
                else {
                    await interaction.reply(payload);
                }
            }
        };
        await command.handler(context);
    }
    async sendMessage(channelId, message) {
        const channel = await this.client.channels.fetch(channelId);
        if (!channel || !channel.isTextBased())
            throw new Error('Channel not found');
        const msg = await channel.send(message);
        return msg.id;
    }
    async sendEmbed(channelId, options) {
        const channel = await this.client.channels.fetch(channelId);
        if (!channel || !channel.isTextBased())
            throw new Error('Channel not found');
        const embed = options.embeds?.[0];
        if (!embed)
            throw new Error('No embed data provided');
        const discordEmbed = new discord_js_1.EmbedBuilder()
            .setTitle(embed.title || null)
            .setDescription(embed.description || null)
            .setColor(embed.color || 0x0099ff);
        if (embed.fields) {
            embed.fields.forEach((field) => {
                discordEmbed.addFields({
                    name: field.name,
                    value: field.value,
                    inline: field.inline,
                });
            });
        }
        const msg = await channel.send({ embeds: [discordEmbed] });
        return msg.id;
    }
    formatPriceBreakdownView(previewData) {
        const { formatOrderPreviewDiscord } = require('../order-message-templates');
        return formatOrderPreviewDiscord(previewData);
    }
    async linkUserToReseller(_userId, _resellerId) { }
    async getResellerIdFromUser(_userId) { return null; }
    async shutdown() { await this.client.destroy(); }
}
exports.DiscordBotAdapter = DiscordBotAdapter;
let discordAdapter = null;
async function initializeDiscordBot() {
    discordAdapter = new DiscordBotAdapter();
    await discordAdapter.initialize();
}
function getDiscordAdapter() {
    if (!discordAdapter)
        throw new Error('Bot not initialized');
    return discordAdapter;
}
//# sourceMappingURL=discord.bot.refactored.js.map