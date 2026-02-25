export interface ReportSummary {
    totalOrders: number;
    successfulOrders: number;
    totalTurnover: number;
    totalProfit: number;
    totalDeposits: number;
    estimatedTax: number;
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
export declare function generateSummaryReport(startDate: Date, endDate: Date): Promise<ReportSummary>;
/**
 * Get detailed order report
 */
export declare function getOrderReport(startDate: Date, endDate: Date, resellerId?: string): Promise<OrderReport[]>;
/**
 * Export orders to CSV format
 */
export declare function exportOrdersToCSV(startDate: Date, endDate: Date): Promise<string>;
/**
 * Get top resellers by turnover
 */
export declare function getTopResellers(limit?: number): Promise<{
    id: string;
    username: string;
    name: string;
    tier: import(".prisma/client").$Enums.ResellerTier;
    balance: bigint;
    monthlyTurnover: bigint;
}[]>;
//# sourceMappingURL=reporting.service.d.ts.map