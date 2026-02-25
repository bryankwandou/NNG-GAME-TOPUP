// src/modules/resellers/reseller.service.ts
import { PrismaClient, ResellerTier, ResellerStatus } from '@prisma/client';
import { createLogger } from '../../config/logger';
import { ConflictError, NotFoundError } from '../../utils/errors';
import { env } from '../../config/env';

const logger = createLogger('ResellerService');

export interface CreateResellerInput {
  username: string;
  name: string;
  email?: string;
  discordUserId?: string;
  telegramUserId?: string;
  whatsappPhoneNumber?: string;
}

export interface UpdateResellerInput {
  name?: string;
  email?: string;
  tier?: ResellerTier;
  status?: ResellerStatus;
}

export class ResellerService {
  constructor(private prisma: PrismaClient) { }

  /**
   * Create a new reseller account
   */
  async createReseller(input: CreateResellerInput) {
    // Validate username uniqueness
    const existingByUsername = await this.prisma.reseller.findUnique({
      where: { username: input.username },
    });

    if (existingByUsername) {
      throw new ConflictError(`Username already exists: ${input.username}`);
    }

    // Validate email uniqueness if provided
    if (input.email) {
      const existingByEmail = await this.prisma.reseller.findUnique({
        where: { email: input.email },
      });
      if (existingByEmail) {
        throw new ConflictError(`Email already exists: ${input.email}`);
      }
    }

    // Validate contact uniqueness
    if (input.discordUserId) {
      const existing = await this.prisma.reseller.findUnique({
        where: { discordUserId: input.discordUserId },
      });
      if (existing) {
        throw new ConflictError(`Discord account already linked`);
      }
    }

    if (input.telegramUserId) {
      const existing = await this.prisma.reseller.findUnique({
        where: { telegramUserId: input.telegramUserId },
      });
      if (existing) {
        throw new ConflictError(`Telegram account already linked`);
      }
    }

    if (input.whatsappPhoneNumber) {
      const existing = await this.prisma.reseller.findUnique({
        where: { whatsappPhoneNumber: input.whatsappPhoneNumber },
      });
      if (existing) {
        throw new ConflictError(`WhatsApp number already linked`);
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
        tier: ResellerTier.BRONZE, // Default tier
        status: ResellerStatus.ACTIVE,
        balance: BigInt(0),
      },
    });

    logger.info(`Reseller created: ${reseller.id} (${reseller.username})`);
    return reseller;
  }

  /**
   * Get reseller by ID
   */
  async getReseller(id: string) {
    const reseller = await this.prisma.reseller.findUnique({
      where: { id },
    });

    if (!reseller) {
      throw new NotFoundError(`Reseller not found: ${id}`);
    }

    return reseller;
  }

  /**
   * Get reseller by username
   */
  async getResellerByUsername(username: string) {
    const reseller = await this.prisma.reseller.findUnique({
      where: { username },
    });

    if (!reseller) {
      throw new NotFoundError(`Reseller not found: ${username}`);
    }

    return reseller;
  }

  /**
   * Get reseller by Discord ID
   */
  async getResellerByDiscordId(discordUserId: string) {
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
  async getResellerByTelegramId(telegramUserId: string) {
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
  async getResellerByWhatsAppNumber(phoneNumber: string) {
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
  async updateReseller(id: string, input: UpdateResellerInput) {
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
  async linkPlatformAccount(
    resellerId: string,
    platform: 'discord' | 'telegram' | 'whatsapp',
    account: string
  ) {
    await this.getReseller(resellerId);

    const updateData: any = {};

    if (platform === 'discord') {
      // Check uniqueness
      const existing = await this.prisma.reseller.findUnique({
        where: { discordUserId: account },
      });
      if (existing && existing.id !== resellerId) {
        throw new ConflictError('Discord account already linked to another reseller');
      }
      updateData.discordUserId = account;
    } else if (platform === 'telegram') {
      const existing = await this.prisma.reseller.findUnique({
        where: { telegramUserId: account },
      });
      if (existing && existing.id !== resellerId) {
        throw new ConflictError('Telegram account already linked to another reseller');
      }
      updateData.telegramUserId = account;
    } else if (platform === 'whatsapp') {
      const existing = await this.prisma.reseller.findUnique({
        where: { whatsappPhoneNumber: account },
      });
      if (existing && existing.id !== resellerId) {
        throw new ConflictError('WhatsApp account already linked to another reseller');
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
  async listResellers(
    skip: number = 0,
    take: number = 50,
    filter?: { tier?: ResellerTier; status?: ResellerStatus }
  ) {
    const where: any = {};

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
  determineTier(monthlyTurnover: bigint): ResellerTier {
    if (monthlyTurnover >= env.TIER_GOLD_MIN) {
      return ResellerTier.GOLD;
    }

    if (monthlyTurnover >= env.TIER_SILVER_MIN) {
      return ResellerTier.SILVER;
    }

    return ResellerTier.BRONZE;
  }

  /**
   * Calculate and update tier for a reseller
   */
  async recalculateTier(resellerId: string) {
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
  async resetMonthlyTurnover(resellerId: string) {
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
  async addTurnover(resellerId: string, amount: bigint) {
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

  async updateBalance(resellerId: string, amount: bigint, operation: 'add' | 'subtract') {
    const increment = operation === 'add' ? amount : -amount;
    return await this.prisma.reseller.update({
      where: { id: resellerId },
      data: { balance: { increment } },
    });
  }
}

import { prisma } from '../../config/database';
export const resellerService = new ResellerService(prisma);
export const getResellerById = (id: string) => resellerService.getReseller(id);
export const getResellerByUsername = (username: string) => resellerService.getResellerByUsername(username);
export const createReseller = (input: CreateResellerInput) => resellerService.createReseller(input);
export const updateBalance = (id: string, amount: bigint, operation: 'add' | 'subtract') => resellerService.updateBalance(id, amount, operation);

// Add missing method to ResellerService class
// (I will add it to the class body in next step or now if possible)

