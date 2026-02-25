import { PrismaClient } from '@prisma/client';
import { logger } from '../../config/logger';

const prisma = new PrismaClient();

export interface ReportSummary {
  totalOrders: number;
  successfulOrders: number;
  totalTurnover: number;
  totalProfit: number;
  totalDeposits: number;
  estimatedTax: number; // UMKM 0.5%
}

export interface OrderReport {
  id: string;
  resellerName: string;
  productName: string;
  targetGameId: string;
  resellerPrice: number;
  costPrice: number;
  profit: number;
  status: string;
  createdAt: Date;
}

/**
 * Generate summary report for date range
 */
export async function generateSummaryReport(
  startDate: Date,
  endDate: Date
): Promise<ReportSummary> {
  try {
    const orders = await prisma.order.findMany({
      where: {
        createdAt: {
          gte: startDate,
          lte: endDate
        }
      },
      include: {
        reseller: true,
        product: true
      }
    });

    const deposits = await prisma.deposit.findMany({
      where: {
        createdAt: {
          gte: startDate,
          lte: endDate
        },
        status: 'PAID'
      }
    });

    const totalOrders = orders.length;
    const successfulOrders = orders.filter((o: any) => o.status === 'COMPLETED').length;

    const totalTurnover = orders
      .filter((o: any) => o.status === 'COMPLETED')
      .reduce((sum: number, order: any) => sum + Number(order.resellerPrice), 0);

    const totalProfit = orders
      .filter((o: any) => o.status === 'COMPLETED')
      .reduce((sum: number, order: any) => sum + Number(order.resellerPrice - order.costPrice), 0);

    const totalDeposits = deposits.reduce((sum: number, deposit: any) => sum + Number(deposit.amount), 0);

    const estimatedTax = totalTurnover * 0.005; // UMKM 0.5%

    logger.info('Summary report generated', { startDate, endDate, totalOrders });

    return {
      totalOrders,
      successfulOrders,
      totalTurnover,
      totalProfit,
      totalDeposits,
      estimatedTax
    };
  } catch (error) {
    logger.error('Error generating summary report', { error });
    throw new Error('Failed to generate summary report');
  }
}

/**
 * Get detailed order report
 */
export async function getOrderReport(
  startDate: Date,
  endDate: Date,
  resellerId?: string
): Promise<OrderReport[]> {
  try {
    const orders = await prisma.order.findMany({
      where: {
        createdAt: {
          gte: startDate,
          lte: endDate
        },
        ...(resellerId && { resellerId })
      },
      include: {
        reseller: true,
        product: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    return orders.map((order: any) => ({
      id: order.id,
      resellerName: order.reseller.name,
      productName: order.product.displayName,
      targetGameId: order.targetGameId,
      resellerPrice: order.resellerPrice,
      costPrice: order.costPrice,
      profit: order.resellerPrice - order.costPrice,
      status: order.status,
      createdAt: order.createdAt
    }));
  } catch (error) {
    logger.error('Error generating order report', { error });
    throw new Error('Failed to generate order report');
  }
}

/**
 * Export orders to CSV format
 */
export async function exportOrdersToCSV(
  startDate: Date,
  endDate: Date
): Promise<string> {
  try {
    const orders = await getOrderReport(startDate, endDate);

    const headers = 'Order ID,Reseller,Product,Game ID,Price,Cost,Profit,Status,Date\n';
    const rows = orders.map(order =>
      `${order.id},${order.resellerName},${order.productName},${order.targetGameId},${order.resellerPrice},${order.costPrice},${order.profit},${order.status},${order.createdAt.toISOString()}`
    ).join('\n');

    return headers + rows;
  } catch (error) {
    logger.error('Error exporting orders to CSV', { error });
    throw new Error('Failed to export orders');
  }
}

/**
 * Get top resellers by turnover
 */
export async function getTopResellers(limit: number = 10) {
  try {
    const resellers = await prisma.reseller.findMany({
      orderBy: {
        monthlyTurnover: 'desc'
      },
      take: limit,
      select: {
        id: true,
        name: true,
        username: true,
        tier: true,
        monthlyTurnover: true,
        balance: true
      }
    });

    return resellers;
  } catch (error) {
    logger.error('Error fetching top resellers', { error });
    throw new Error('Failed to fetch top resellers');
  }
}
