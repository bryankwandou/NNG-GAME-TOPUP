// src/modules/analytics/sustainability.service.ts
import { PrismaClient } from '@prisma/client';
import { PricingConfigManager } from '../../config/pricing.config';

export interface SustainabilityMetrics {
  periodStart: Date;
  periodEnd: Date;
  totalOrders: number;
  totalOrderValue: number;
  totalProfit: number;
  isBreakEven: boolean;
  netProfitAfterCosts: number;
  profitMarginRate: number;
  estimatedElectricityCost: number;
  estimatedHostingCost: number;
  estimatedMaintenanceCost: number;
  totalOperatingCost: number;
  ordersNeededToBreakEven: number;
  daysUntilBreakEven: number;
}

export class SustainabilityService {
  constructor(
    private prisma: PrismaClient,
    private configManager: PricingConfigManager
  ) { }

  async calculateMetrics(startDate: Date, endDate: Date): Promise<SustainabilityMetrics> {
    const orders = await this.prisma.order.findMany({
      where: {
        createdAt: { gte: startDate, lte: endDate },
        status: 'COMPLETED' as any,
      },
      include: {
        reseller: true,
      },
    });

    const totalOrders = orders.length;
    const totalOrderValue = orders.reduce((sum: number, o: any) => sum + Number(o.resellerPrice), 0);
    const totalSupplierCost = orders.reduce((sum: number, o: any) => sum + Number(o.costPrice), 0);
    const totalProfit = totalOrderValue - totalSupplierCost;

    const config = this.configManager.getConfig();
    const monthlyOverhead = config.overhead.monthlyElectricity +
      config.overhead.monthlyHosting +
      config.overhead.monthlyBotMaintenance +
      (config.overhead.monthlyDomain || 0);

    const netProfitAfterCosts = totalProfit - monthlyOverhead;
    const isBreakEven = netProfitAfterCosts >= 0;
    const profitMarginRate = totalOrderValue > 0 ? (totalProfit / totalOrderValue) * 100 : 0;

    const ordersNeeded = Math.ceil(monthlyOverhead / (totalOrders > 0 ? (totalProfit / totalOrders) : 1000));

    return {
      periodStart: startDate,
      periodEnd: endDate,
      totalOrders,
      totalOrderValue,
      totalProfit,
      isBreakEven,
      netProfitAfterCosts,
      profitMarginRate,
      estimatedElectricityCost: config.overhead.monthlyElectricity,
      estimatedHostingCost: config.overhead.monthlyHosting,
      estimatedMaintenanceCost: config.overhead.monthlyBotMaintenance,
      totalOperatingCost: monthlyOverhead,
      ordersNeededToBreakEven: ordersNeeded,
      daysUntilBreakEven: isBreakEven ? 0 : 30, // Simplified
    };
  }
}
