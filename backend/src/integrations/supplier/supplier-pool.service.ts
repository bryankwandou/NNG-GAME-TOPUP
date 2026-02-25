/**
 * Supplier Pool Service (Phase G.2)
 * 
 * Implements multi-supplier failover and load balancing.
 * Selects best available supplier based on:
 * - Health status (healthy > degraded > down)
 * - Priority (primary > secondary > tertiary)
 */

import { PrismaClient } from '@prisma/client';
import { logger } from '../../config/logger';

export interface SupplierHealthCheckResult {
  panelId: string;
  panelName: string;
  isHealthy: boolean;
  responseTimeMs: number;
  statusCode?: number;
  errorMessage?: string;
  timestamp: Date;
}

export interface SupplierSelectionCriteria {
  productCode: string;
  preferredPanelId?: string;
  excludedPanelIds?: string[];
}

export interface SupplierOrderResponse {
  success: boolean;
  panelId: string;
  panelName: string;
  externalRef?: string;
  status: 'success' | 'processing' | 'failed';
  errorMessage?: string;
  responseTimeMs: number;
}

export class SupplierPoolService {
  private prisma: PrismaClient;
  private readonly MOVING_AVERAGE_WINDOW = 100;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async selectSupplier(criteria: SupplierSelectionCriteria): Promise<any> {
    const { productCode, excludedPanelIds = [] } = criteria;

    // Fetch active panels sorted by health/priority
    const availablePanels = await this.prisma.supplierPanel.findMany({
      where: {
        isActive: true,
        id: { notIn: excludedPanelIds },
        products: {
          some: {
            productCode,
            isAvailable: true,
          },
        },
      },
      orderBy: [
        { priority: 'asc' }, // Try Primary panels first
        { successRate: 'desc' }, // Then try the most reliable ones
      ],
    });

    if (!availablePanels.length) {
      logger.error(`CRITICAL: All suppliers exhausted for product ${productCode}`);
      throw new Error(`Service temporarily unavailable (Supplier Pool Exhausted)`);
    }

    // Load Balancing: If multiple panels have same priority, pick based on successRate
    return availablePanels[0];
  }

  /**
   * Execute an order with automatic failover across the pool
   */
  async executeWithFailover(
    criteria: SupplierSelectionCriteria,
    executionFn: (panel: any) => Promise<SupplierOrderResponse>
  ): Promise<SupplierOrderResponse> {
    const excludedIds: string[] = [];
    let attempts = 0;
    const MAX_ATTEMPTS = 3;

    while (attempts < MAX_ATTEMPTS) {
      try {
        const panel = await this.selectSupplier({ ...criteria, excludedPanelIds: excludedIds });
        logger.info(`Attempting order via supplier: ${panel.name} (Attempt ${attempts + 1})`);

        const startTime = Date.now();
        const result = await executionFn(panel);
        const duration = Date.now() - startTime;

        // Record metrics for the pool logic
        await this.recordSupplierMetric(panel.id, duration, result.success);

        if (result.success) {
          return result;
        }

        logger.warn(`Supplier ${panel.name} failed. Attempting failover...`, { reason: result.errorMessage });
        excludedIds.push(panel.id);
        attempts++;
      } catch (error) {
        logger.error(`Failover attempt failed`, { error });
        attempts++;
        if (attempts >= MAX_ATTEMPTS) throw error;
      }
    }

    throw new Error('Order failed after exhausting all available suppliers in pool.');
  }
  async recordSupplierMetric(
    panelId: string,
    responseTimeMs: number,
    isSuccess: boolean
  ): Promise<void> {
    try {
      const panel = await this.prisma.supplierPanel.findUnique({
        where: { id: panelId },
      });

      if (!panel) return;

      const newSuccessCount = isSuccess ? 1 : 0;
      const newSuccessRate =
        (panel.successRate * (this.MOVING_AVERAGE_WINDOW - 1) + newSuccessCount) /
        this.MOVING_AVERAGE_WINDOW;

      const newAvgResponseTime =
        (panel.avgResponseTimeMs * (this.MOVING_AVERAGE_WINDOW - 1) + responseTimeMs) /
        this.MOVING_AVERAGE_WINDOW;

      await this.prisma.supplierPanel.update({
        where: { id: panelId },
        data: {
          successRate: newSuccessRate,
          avgResponseTimeMs: Math.round(newAvgResponseTime),
          totalRequests: { increment: 1 },
          totalSuccesses: isSuccess ? { increment: 1 } : undefined,
          totalFailures: !isSuccess ? { increment: 1 } : undefined,
        },
      });

      await this.prisma.supplierHealthMetric.create({
        data: {
          panelId,
          responseTimeMs,
          isHealthy: isSuccess,
        },
      });
    } catch (error) {
      logger.error('Failed to record supplier metric', { panelId, error });
    }
  }
}

let supplierPoolServiceInstance: SupplierPoolService | null = null;

export function initializeSupplierPoolService(prisma: PrismaClient): SupplierPoolService {
  if (!supplierPoolServiceInstance) {
    supplierPoolServiceInstance = new SupplierPoolService(prisma);
  }
  return supplierPoolServiceInstance;
}

export function getSupplierPoolService(): SupplierPoolService {
  if (!supplierPoolServiceInstance) {
    throw new Error('SupplierPoolService not initialized');
  }
  return supplierPoolServiceInstance;
}
