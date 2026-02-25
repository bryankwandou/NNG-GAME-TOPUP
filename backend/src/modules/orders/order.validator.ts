// src/modules/orders/order.validator.ts
/**
 * Order validation and idempotency checking
 * Ensures safe order processing with no double-charging
 */

import { PrismaClient, Order } from '@prisma/client';
import { createLogger } from '../../config/logger';

const logger = createLogger('OrderValidator');

export interface OrderValidationResult {
  isValid: boolean;
  isDuplicate: boolean;
  existingOrderId?: string;
  errors: string[];
  warnings: string[];
}

export class OrderValidator {
  constructor(private prisma: PrismaClient) { }

  /**
   * Comprehensive order validation
   */
  async validateOrder(data: {
    resellerId: string;
    productCode: string;
    targetGameId: string;
    resellerPrice: bigint;
    idempotencyKey?: string;
  }): Promise<OrderValidationResult> {
    const errors: string[] = [];
    const warnings: string[] = [];

    // 1. Check reseller exists and is active
    const reseller = await this.prisma.reseller.findUnique({
      where: { id: data.resellerId },
    });

    if (!reseller) {
      errors.push('Reseller not found');
      return { isValid: false, isDuplicate: false, errors, warnings };
    }

    if (reseller.status !== 'ACTIVE') {
      errors.push(`Reseller account is ${reseller.status}`);
      return { isValid: false, isDuplicate: false, errors, warnings };
    }

    // 2. Check product exists
    const product = await this.prisma.product.findUnique({
      where: { code: data.productCode },
    });

    if (!product) {
      errors.push('Product not found');
      return { isValid: false, isDuplicate: false, errors, warnings };
    }

    if (!product.active) {
      errors.push('Product is no longer available');
      return { isValid: false, isDuplicate: false, errors, warnings };
    }

    // 3. Check balance is sufficient
    if (reseller.balance < data.resellerPrice) {
      errors.push(
        `Insufficient balance. Need: Rp ${data.resellerPrice.toLocaleString('id-ID')}, Have: Rp ${reseller.balance.toLocaleString('id-ID')}`
      );
      return { isValid: false, isDuplicate: false, errors, warnings };
    }

    // 4. Check for duplicate/idempotency
    const recentOrder = await this.checkForDuplicateOrder(data);
    if (recentOrder) {
      warnings.push(
        `Similar order found within last 5 minutes (Order ID: ${recentOrder.id})`
      );
      return {
        isValid: false,
        isDuplicate: true,
        existingOrderId: recentOrder.id,
        errors,
        warnings,
      };
    }

    // 5. Validate player ID format (basic)
    if (!this.isValidPlayerId(data.targetGameId, data.productCode)) {
      warnings.push(
        'Player ID format looks unusual. Please verify before confirming.'
      );
    }

    // 6. Check for rapid-fire orders (potential abuse)
    const recentOrdersCount = await this.prisma.order.count({
      where: {
        resellerId: data.resellerId,
        createdAt: {
          gte: new Date(Date.now() - 60 * 1000), // Last 60 seconds
        },
      },
    });

    if (recentOrdersCount >= 5) {
      warnings.push(
        '⚠️ Multiple orders in quick succession detected. Please slow down.'
      );
    }

    logger.info('Order validation passed', {
      resellerId: data.resellerId,
      productCode: data.productCode,
      warnings,
    });

    return {
      isValid: true,
      isDuplicate: false,
      errors,
      warnings,
    };
  }

  /**
   * Check for potential duplicate order (same reseller, product, player within 5 min)
   */
  private async checkForDuplicateOrder(data: {
    resellerId: string;
    productCode: string;
    targetGameId: string;
    idempotencyKey?: string;
  }): Promise<Order | null> {
    const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);

    // If idempotencyKey is provided, check for it first (strong match)
    if (data.idempotencyKey) {
      const exactMatch = await this.prisma.order.findUnique({
        where: {
          idempotencyKey: data.idempotencyKey,
        },
      });
      if (exactMatch && exactMatch.resellerId === data.resellerId) return exactMatch;
      if (exactMatch) return exactMatch;
    }

    // Fallback to fuzzy duplicate check
    const fuzzyMatch = await this.prisma.order.findFirst({
      where: {
        resellerId: data.resellerId,
        product: { code: data.productCode },
        targetGameId: data.targetGameId,
        createdAt: { gte: fiveMinutesAgo },
        status: { in: ['PENDING', 'PROCESSING', 'COMPLETED' as any] },
      },
      orderBy: { createdAt: 'desc' },
    });

    return fuzzyMatch || null;
  }

  /**
   * Basic player ID validation
   */
  private isValidPlayerId(playerId: string, productCode?: string): boolean {
    // Must be non-empty and reasonable length
    if (!playerId || playerId.length < 2 || playerId.length > 50) {
      return false;
    }

    // Specific patterns per game
    const patterns: Record<string, RegExp> = {
      DEFAULT: /^[A-Z0-9._#-]{4,20}$/i,
      MLBB: /^\d{5,12}\(\d{4}\)$/,
      FF: /^\d{8,12}$/,
    };

    const gameType = productCode?.split('_')[0] || 'DEFAULT';
    const pattern = patterns[gameType] || patterns.DEFAULT;

    // Use default regex if no specific pattern matches
    if (pattern === patterns.DEFAULT) {
      return /^[a-zA-Z0-9_\-#.@]+$/.test(playerId);
    }

    return pattern.test(playerId);
  }
}
