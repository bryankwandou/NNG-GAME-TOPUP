/**
 * Update reseller tiers based on monthly turnover
 * This job should run daily or monthly
 */
export declare function updateResellerTiers(): Promise<void>;
/**
 * Reset monthly turnover at the start of each month
 * This job should run on the 1st of every month
 */
export declare function resetMonthlyTurnover(): Promise<void>;
//# sourceMappingURL=tier.jobs.d.ts.map