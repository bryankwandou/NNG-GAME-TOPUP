"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SustainabilityService = void 0;
class SustainabilityService {
    constructor(prisma, configManager) {
        this.prisma = prisma;
        this.configManager = configManager;
    }
    async calculateMetrics(startDate, endDate) {
        const orders = await this.prisma.order.findMany({
            where: {
                createdAt: { gte: startDate, lte: endDate },
                status: 'COMPLETED',
            },
            include: {
                reseller: true,
            },
        });
        const totalOrders = orders.length;
        const totalOrderValue = orders.reduce((sum, o) => sum + Number(o.resellerPrice), 0);
        const totalSupplierCost = orders.reduce((sum, o) => sum + Number(o.costPrice), 0);
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
exports.SustainabilityService = SustainabilityService;
//# sourceMappingURL=sustainability.service.js.map