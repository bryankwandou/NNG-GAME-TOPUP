"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBalance = exports.createReseller = exports.getResellerByUsername = exports.getResellerById = exports.resellerService = exports.ResellerService = void 0;
// src/modules/resellers/reseller.service.ts
const client_1 = require("@prisma/client");
const logger_1 = require("../../config/logger");
const errors_1 = require("../../utils/errors");
const env_1 = require("../../config/env");
const logger = (0, logger_1.createLogger)('ResellerService');
class ResellerService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    /**
     * Create a new reseller account
     */
    async createReseller(input) {
        // Validate username uniqueness
        const existingByUsername = await this.prisma.reseller.findUnique({
            where: { username: input.username },
        });
        if (existingByUsername) {
            throw new errors_1.ConflictError(`Username already exists: ${input.username}`);
        }
        // Validate email uniqueness if provided
        if (input.email) {
            const existingByEmail = await this.prisma.reseller.findUnique({
                where: { email: input.email },
            });
            if (existingByEmail) {
                throw new errors_1.ConflictError(`Email already exists: ${input.email}`);
            }
        }
        // Validate contact uniqueness
        if (input.discordUserId) {
            const existing = await this.prisma.reseller.findUnique({
                where: { discordUserId: input.discordUserId },
            });
            if (existing) {
                throw new errors_1.ConflictError(`Discord account already linked`);
            }
        }
        if (input.telegramUserId) {
            const existing = await this.prisma.reseller.findUnique({
                where: { telegramUserId: input.telegramUserId },
            });
            if (existing) {
                throw new errors_1.ConflictError(`Telegram account already linked`);
            }
        }
        if (input.whatsappPhoneNumber) {
            const existing = await this.prisma.reseller.findUnique({
                where: { whatsappPhoneNumber: input.whatsappPhoneNumber },
            });
            if (existing) {
                throw new errors_1.ConflictError(`WhatsApp number already linked`);
            }
        }
        const reseller = await this.prisma.reseller.create({
            data: {
                username: input.username,
                name: input.name,
                email: input.email,
                discordUserId: input.discordUserId,
                telegramUserId: input.telegramUserId,
                whatsappPhoneNumber: input.whatsappPhoneNumber,
                tier: client_1.ResellerTier.BRONZE, // Default tier
                status: client_1.ResellerStatus.ACTIVE,
                balance: BigInt(0),
            },
        });
        logger.info(`Reseller created: ${reseller.id} (${reseller.username})`);
        return reseller;
    }
    /**
     * Get reseller by ID
     */
    async getReseller(id) {
        const reseller = await this.prisma.reseller.findUnique({
            where: { id },
        });
        if (!reseller) {
            throw new errors_1.NotFoundError(`Reseller not found: ${id}`);
        }
        return reseller;
    }
    /**
     * Get reseller by username
     */
    async getResellerByUsername(username) {
        const reseller = await this.prisma.reseller.findUnique({
            where: { username },
        });
        if (!reseller) {
            throw new errors_1.NotFoundError(`Reseller not found: ${username}`);
        }
        return reseller;
    }
    /**
     * Get reseller by Discord ID
     */
    async getResellerByDiscordId(discordUserId) {
        const reseller = await this.prisma.reseller.findUnique({
            where: { discordUserId },
        });
        if (!reseller) {
            return null; // Return null to allow registration flow
        }
        return reseller;
    }
    /**
     * Get reseller by Telegram ID
     */
    async getResellerByTelegramId(telegramUserId) {
        const reseller = await this.prisma.reseller.findUnique({
            where: { telegramUserId },
        });
        if (!reseller) {
            return null;
        }
        return reseller;
    }
    /**
     * Get reseller by WhatsApp number
     */
    async getResellerByWhatsAppNumber(phoneNumber) {
        const reseller = await this.prisma.reseller.findUnique({
            where: { whatsappPhoneNumber: phoneNumber },
        });
        if (!reseller) {
            return null;
        }
        return reseller;
    }
    /**
     * Update reseller
     */
    async updateReseller(id, input) {
        const reseller = await this.getReseller(id);
        const updated = await this.prisma.reseller.update({
            where: { id },
            data: {
                name: input.name || reseller.name,
                email: input.email || reseller.email,
                tier: input.tier || reseller.tier,
                status: input.status || reseller.status,
            },
        });
        logger.info(`Reseller updated: ${id}`);
        return updated;
    }
    /**
     * Link platform account to reseller (Discord, Telegram, WhatsApp)
     */
    async linkPlatformAccount(resellerId, platform, account) {
        await this.getReseller(resellerId);
        const updateData = {};
        if (platform === 'discord') {
            // Check uniqueness
            const existing = await this.prisma.reseller.findUnique({
                where: { discordUserId: account },
            });
            if (existing && existing.id !== resellerId) {
                throw new errors_1.ConflictError('Discord account already linked to another reseller');
            }
            updateData.discordUserId = account;
        }
        else if (platform === 'telegram') {
            const existing = await this.prisma.reseller.findUnique({
                where: { telegramUserId: account },
            });
            if (existing && existing.id !== resellerId) {
                throw new errors_1.ConflictError('Telegram account already linked to another reseller');
            }
            updateData.telegramUserId = account;
        }
        else if (platform === 'whatsapp') {
            const existing = await this.prisma.reseller.findUnique({
                where: { whatsappPhoneNumber: account },
            });
            if (existing && existing.id !== resellerId) {
                throw new errors_1.ConflictError('WhatsApp account already linked to another reseller');
            }
            updateData.whatsappPhoneNumber = account;
        }
        const updated = await this.prisma.reseller.update({
            where: { id: resellerId },
            data: updateData,
        });
        logger.info(`Platform linked - Reseller: ${resellerId}, Platform: ${platform}`);
        return updated;
    }
    /**
     * Get all resellers (paginated)
     */
    async listResellers(skip = 0, take = 50, filter) {
        const where = {};
        if (filter?.tier) {
            where.tier = filter.tier;
        }
        if (filter?.status) {
            where.status = filter.status;
        }
        const [resellers, total] = await Promise.all([
            this.prisma.reseller.findMany({
                where,
                skip,
                take,
                orderBy: { createdAt: 'desc' },
            }),
            this.prisma.reseller.count({ where }),
        ]);
        return { resellers, total, skip, take };
    }
    /**
     * Determine tier based on monthly turnover
     */
    determineTier(monthlyTurnover) {
        if (monthlyTurnover >= env_1.env.TIER_GOLD_MIN) {
            return client_1.ResellerTier.GOLD;
        }
        if (monthlyTurnover >= env_1.env.TIER_SILVER_MIN) {
            return client_1.ResellerTier.SILVER;
        }
        return client_1.ResellerTier.BRONZE;
    }
    /**
     * Calculate and update tier for a reseller
     */
    async recalculateTier(resellerId) {
        const reseller = await this.getReseller(resellerId);
        const newTier = this.determineTier(reseller.monthlyTurnover);
        if (newTier !== reseller.tier) {
            const oldTier = reseller.tier;
            const updated = await this.prisma.reseller.update({
                where: { id: resellerId },
                data: { tier: newTier },
            });
            // Log tier change
            await this.prisma.auditLog.create({
                data: {
                    resellerId,
                    action: 'TIER_UPDATED',
                    entityType: 'RESELLER',
                    entityId: resellerId,
                    oldValue: JSON.stringify({ tier: oldTier }),
                    newValue: JSON.stringify({ tier: newTier }),
                    performedBy: 'SYSTEM',
                    notes: `Tier updated based on monthly turnover: ${reseller.monthlyTurnover.toString()}`,
                },
            });
            logger.info(`Tier updated for reseller ${resellerId}: ${oldTier} -> ${newTier}`);
            return updated;
        }
        return reseller;
    }
    /**
     * Reset monthly turnover (typically called on first day of month)
     */
    async resetMonthlyTurnover(resellerId) {
        const updated = await this.prisma.reseller.update({
            where: { id: resellerId },
            data: { monthlyTurnover: BigInt(0) },
        });
        logger.info(`Monthly turnover reset for reseller ${resellerId}`);
        return updated;
    }
    /**
     * Add to monthly and all-time turnover
     */
    async addTurnover(resellerId, amount) {
        const reseller = await this.getReseller(resellerId);
        const updated = await this.prisma.reseller.update({
            where: { id: resellerId },
            data: {
                monthlyTurnover: reseller.monthlyTurnover + amount,
                totalTurnoverAllTime: reseller.totalTurnoverAllTime + amount,
            },
        });
        logger.debug(`Turnover added for reseller ${resellerId}: +${amount.toString()}`);
        return updated;
    }
    async updateBalance(resellerId, amount, operation) {
        const increment = operation === 'add' ? amount : -amount;
        return await this.prisma.reseller.update({
            where: { id: resellerId },
            data: { balance: { increment } },
        });
    }
}
exports.ResellerService = ResellerService;
const database_1 = require("../../config/database");
exports.resellerService = new ResellerService(database_1.prisma);
const getResellerById = (id) => exports.resellerService.getReseller(id);
exports.getResellerById = getResellerById;
const getResellerByUsername = (username) => exports.resellerService.getResellerByUsername(username);
exports.getResellerByUsername = getResellerByUsername;
const createReseller = (input) => exports.resellerService.createReseller(input);
exports.createReseller = createReseller;
const updateBalance = (id, amount, operation) => exports.resellerService.updateBalance(id, amount, operation);
exports.updateBalance = updateBalance;
// Add missing method to ResellerService class
// (I will add it to the class body in next step or now if possible)
//# sourceMappingURL=reseller.service.js.map