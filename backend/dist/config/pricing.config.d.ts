/**
 * Centralized pricing configuration
 * Defines all cost components, tax rates, and margin targets
 * This ensures fair, transparent, and sustainable pricing
 */
export interface PricingConfig {
    tax: {
        ppn: number;
        pph: number;
    };
    overhead: {
        monthlyElectricity: number;
        monthlyHosting: number;
        monthlyDomain: number;
        monthlyBotMaintenance: number;
        estimatedMonthlyOrders: number;
        paymentGatewayFeeSplit: boolean;
        paymentGatewayFeeRate: number;
    };
    margins: {
        endUser: {
            minMarginRate: number;
            targetMarginRate: number;
            maxMarginRate: number;
        };
        reseller: {
            minMarginRate: number;
            targetMarginRate: number;
            maxMarginRate: number;
        };
        distributor: {
            minMarginRate: number;
            targetMarginRate: number;
            maxMarginRate: number;
        };
        agency: {
            minMarginRate: number;
            targetMarginRate: number;
            maxMarginRate: number;
        };
    };
    tiers: {
        bronze: {
            minMonthlyTurnover: number;
            maxMonthlyTurnover: number;
            baseMarkupDelta: number;
        };
        silver: {
            minMonthlyTurnover: number;
            maxMonthlyTurnover: number;
            baseMarkupDelta: number;
        };
        gold: {
            minMonthlyTurnover: number;
            maxMonthlyTurnover: number;
            baseMarkupDelta: number;
        };
        agency: {
            minMonthlyTurnover: number;
            maxMonthlyTurnover: number;
            baseMarkupDelta: number;
        };
    };
    sustainability: {
        minimumMonthlyRevenueToBreakEven: number;
        targetMonthlyProfit: number;
    };
}
/**
 * Default configuration (community-friendly, fair pricing)
 */
export declare const DEFAULT_PRICING_CONFIG: PricingConfig;
export declare class PricingConfigManager {
    private config;
    constructor(config?: PricingConfig);
    /**
     * Calculate per-order overhead allocation
     */
    getPerOrderOverhead(): number;
    /**
     * Calculate recommended margin for a tier
     */
    getRecommendedMargin(tier: 'endUser' | 'reseller' | 'distributor' | 'agency'): number;
    /**
     * Validate if a price is within ethical boundaries
     */
    validatePrice(tier: 'endUser' | 'reseller' | 'distributor' | 'agency', costBase: number, finalPrice: number): {
        isValid: boolean;
        marginRate: number;
        warnings: string[];
    };
    /**
     * Calculate sustainability metrics
     */
    calculateSustainabilityMetrics(monthlyRevenue: number): {
        isBreakEven: boolean;
        monthlyProfit: number;
        ordersNeeded: number;
    };
    getConfig(): PricingConfig;
}
/**
 * Load pricing configuration from JSON file if available
 * Falls back to DEFAULT_PRICING_CONFIG if file doesn't exist or is invalid
 *
 * Usage:
 * const config = loadPricingConfigFromFile();
 * const manager = new PricingConfigManager(config);
 */
export declare function loadPricingConfigFromFile(configPath?: string): PricingConfig;
export declare const pricingConfigManager: PricingConfigManager;
//# sourceMappingURL=pricing.config.d.ts.map