"use strict";
// src/config/pricing.config.ts
/**
 * Centralized pricing configuration
 * Defines all cost components, tax rates, and margin targets
 * This ensures fair, transparent, and sustainable pricing
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.pricingConfigManager = exports.PricingConfigManager = exports.DEFAULT_PRICING_CONFIG = void 0;
exports.loadPricingConfigFromFile = loadPricingConfigFromFile;
/**
 * Default configuration (community-friendly, fair pricing)
 */
exports.DEFAULT_PRICING_CONFIG = {
    tax: {
        ppn: 0.11, // 11% Value-added tax
        pph: 0.02, // 2% income tax (simplified; actual may vary)
    },
    overhead: {
        monthlyElectricity: 500000, // Rp 500k/month
        monthlyHosting: 0, // Free tier (Render, Railway, Fly.io)
        monthlyDomain: 150000, // Rp 150k/month
        monthlyBotMaintenance: 1000000, // ~Rp 1M/month (solo dev, ~20 hours @ Rp 50k/hour)
        estimatedMonthlyOrders: 500, // Conservative estimate
        paymentGatewayFeeSplit: true, // Pass fee to customer (transparency)
        paymentGatewayFeeRate: 0.03, // 3% per transaction
    },
    margins: {
        endUser: {
            minMarginRate: 0.05, // 5% min
            targetMarginRate: 0.15, // 15% target (fair)
            maxMarginRate: 0.25, // 25% max before warning
        },
        reseller: {
            minMarginRate: 0.03, // 3% min (resellers get better rates)
            targetMarginRate: 0.12, // 12% target
            maxMarginRate: 0.2, // 20% max
        },
        distributor: {
            minMarginRate: 0.01, // 1% min (high volume)
            targetMarginRate: 0.08, // 8% target
            maxMarginRate: 0.15, // 15% max
        },
        agency: {
            minMarginRate: 0.005, // 0.5% min (bulk pricing)
            targetMarginRate: 0.05, // 5% target
            maxMarginRate: 0.1, // 10% max
        },
    },
    tiers: {
        bronze: {
            minMonthlyTurnover: 0,
            maxMonthlyTurnover: 5000000,
            baseMarkupDelta: 500, // Rp 500 markup
        },
        silver: {
            minMonthlyTurnover: 5000000,
            maxMonthlyTurnover: 20000000,
            baseMarkupDelta: 400, // Rp 400 markup (discount)
        },
        gold: {
            minMonthlyTurnover: 20000000,
            maxMonthlyTurnover: 50000000,
            baseMarkupDelta: 300, // Rp 300 markup
        },
        agency: {
            minMonthlyTurnover: 50000000,
            maxMonthlyTurnover: Infinity,
            baseMarkupDelta: 200, // Rp 200 markup (best tier)
        },
    },
    sustainability: {
        minimumMonthlyRevenueToBreakEven: 2000000, // Rp 2M/month
        targetMonthlyProfit: 5000000, // Rp 5M/month profit target (ambitious but fair)
    },
};
class PricingConfigManager {
    constructor(config = exports.DEFAULT_PRICING_CONFIG) {
        this.config = config;
    }
    /**
     * Calculate per-order overhead allocation
     */
    getPerOrderOverhead() {
        const total = this.config.overhead.monthlyElectricity +
            this.config.overhead.monthlyHosting +
            this.config.overhead.monthlyDomain +
            this.config.overhead.monthlyBotMaintenance;
        return total / this.config.overhead.estimatedMonthlyOrders;
    }
    /**
     * Calculate recommended margin for a tier
     */
    getRecommendedMargin(tier) {
        return this.config.margins[tier].targetMarginRate;
    }
    /**
     * Validate if a price is within ethical boundaries
     */
    validatePrice(tier, costBase, finalPrice) {
        const marginRate = (finalPrice - costBase) / costBase;
        const tierConfig = this.config.margins[tier];
        const warnings = [];
        if (marginRate < tierConfig.minMarginRate) {
            warnings.push(`⚠️ Price below minimum margin (${(tierConfig.minMarginRate * 100).toFixed(1)}%) for ${tier}`);
        }
        if (marginRate > tierConfig.maxMarginRate) {
            warnings.push(`⚠️ Price exceeds max margin (${(tierConfig.maxMarginRate * 100).toFixed(1)}%) for ${tier}—consider reducing`);
        }
        return {
            isValid: marginRate >= tierConfig.minMarginRate,
            marginRate,
            warnings,
        };
    }
    /**
     * Calculate sustainability metrics
     */
    calculateSustainabilityMetrics(monthlyRevenue) {
        const overhead = this.getPerOrderOverhead();
        const breakEvenRate = this.config.sustainability.minimumMonthlyRevenueToBreakEven;
        return {
            isBreakEven: monthlyRevenue >= breakEvenRate,
            monthlyProfit: monthlyRevenue - (this.config.overhead.estimatedMonthlyOrders * overhead),
            ordersNeeded: Math.ceil(breakEvenRate / overhead),
        };
    }
    getConfig() {
        return this.config;
    }
}
exports.PricingConfigManager = PricingConfigManager;
/**
 * Load pricing configuration from JSON file if available
 * Falls back to DEFAULT_PRICING_CONFIG if file doesn't exist or is invalid
 *
 * Usage:
 * const config = loadPricingConfigFromFile();
 * const manager = new PricingConfigManager(config);
 */
function loadPricingConfigFromFile(configPath) {
    try {
        const fs = require('fs');
        const path = require('path');
        const resolved = configPath
            ? path.resolve(configPath)
            : path.resolve(process.cwd(), 'config', 'pricing-config.json');
        if (!fs.existsSync(resolved)) {
            console.log('[PricingConfig] JSON config not found, using defaults');
            return exports.DEFAULT_PRICING_CONFIG;
        }
        const raw = fs.readFileSync(resolved, 'utf-8');
        const parsed = JSON.parse(raw);
        // Map JSON structure to PricingConfig interface
        const config = {
            tax: {
                ppn: parsed.tax?.ppn_rate || exports.DEFAULT_PRICING_CONFIG.tax.ppn,
                pph: parsed.tax?.pph_rate || exports.DEFAULT_PRICING_CONFIG.tax.pph,
            },
            overhead: {
                monthlyElectricity: parsed.monthly_costs?.electricity_idr || exports.DEFAULT_PRICING_CONFIG.overhead.monthlyElectricity,
                monthlyHosting: parsed.monthly_costs?.hosting_idr || exports.DEFAULT_PRICING_CONFIG.overhead.monthlyHosting,
                monthlyDomain: parsed.monthly_costs?.domain_idr || exports.DEFAULT_PRICING_CONFIG.overhead.monthlyDomain,
                monthlyBotMaintenance: parsed.monthly_costs?.bot_maintenance_total_idr || exports.DEFAULT_PRICING_CONFIG.overhead.monthlyBotMaintenance,
                estimatedMonthlyOrders: parsed.monthly_costs?.estimated_monthly_orders || exports.DEFAULT_PRICING_CONFIG.overhead.estimatedMonthlyOrders,
                paymentGatewayFeeSplit: parsed.payment_processing?.fee_passed_to_customer ?? exports.DEFAULT_PRICING_CONFIG.overhead.paymentGatewayFeeSplit,
                paymentGatewayFeeRate: parsed.payment_processing?.gateway_fee_rate || exports.DEFAULT_PRICING_CONFIG.overhead.paymentGatewayFeeRate,
            },
            margins: {
                endUser: {
                    minMarginRate: parsed.tiers?.end_user?.min_margin_rate || exports.DEFAULT_PRICING_CONFIG.margins.endUser.minMarginRate,
                    targetMarginRate: parsed.tiers?.end_user?.target_margin_rate || exports.DEFAULT_PRICING_CONFIG.margins.endUser.targetMarginRate,
                    maxMarginRate: parsed.tiers?.end_user?.max_margin_rate || exports.DEFAULT_PRICING_CONFIG.margins.endUser.maxMarginRate,
                },
                reseller: {
                    minMarginRate: parsed.tiers?.reseller?.tiers?.bronze?.min_margin_rate || exports.DEFAULT_PRICING_CONFIG.margins.reseller.minMarginRate,
                    targetMarginRate: parsed.tiers?.reseller?.tiers?.bronze?.target_margin_rate || exports.DEFAULT_PRICING_CONFIG.margins.reseller.targetMarginRate,
                    maxMarginRate: parsed.tiers?.reseller?.tiers?.bronze?.max_margin_rate || exports.DEFAULT_PRICING_CONFIG.margins.reseller.maxMarginRate,
                },
                distributor: {
                    minMarginRate: parsed.tiers?.reseller?.tiers?.gold?.min_margin_rate || exports.DEFAULT_PRICING_CONFIG.margins.distributor.minMarginRate,
                    targetMarginRate: parsed.tiers?.reseller?.tiers?.gold?.target_margin_rate || exports.DEFAULT_PRICING_CONFIG.margins.distributor.targetMarginRate,
                    maxMarginRate: parsed.tiers?.reseller?.tiers?.gold?.max_margin_rate || exports.DEFAULT_PRICING_CONFIG.margins.distributor.maxMarginRate,
                },
                agency: {
                    minMarginRate: parsed.tiers?.reseller?.tiers?.agency?.min_margin_rate || exports.DEFAULT_PRICING_CONFIG.margins.agency.minMarginRate,
                    targetMarginRate: parsed.tiers?.reseller?.tiers?.agency?.target_margin_rate || exports.DEFAULT_PRICING_CONFIG.margins.agency.targetMarginRate,
                    maxMarginRate: parsed.tiers?.reseller?.tiers?.agency?.max_margin_rate || exports.DEFAULT_PRICING_CONFIG.margins.agency.maxMarginRate,
                },
            },
            tiers: {
                bronze: {
                    minMonthlyTurnover: parsed.tiers?.reseller?.tiers?.bronze?.monthly_turnover_min_idr || exports.DEFAULT_PRICING_CONFIG.tiers.bronze.minMonthlyTurnover,
                    maxMonthlyTurnover: parsed.tiers?.reseller?.tiers?.bronze?.monthly_turnover_max_idr || exports.DEFAULT_PRICING_CONFIG.tiers.bronze.maxMonthlyTurnover,
                    baseMarkupDelta: parsed.tiers?.reseller?.tiers?.bronze?.base_markup_delta_idr || exports.DEFAULT_PRICING_CONFIG.tiers.bronze.baseMarkupDelta,
                },
                silver: {
                    minMonthlyTurnover: parsed.tiers?.reseller?.tiers?.silver?.monthly_turnover_min_idr || exports.DEFAULT_PRICING_CONFIG.tiers.silver.minMonthlyTurnover,
                    maxMonthlyTurnover: parsed.tiers?.reseller?.tiers?.silver?.monthly_turnover_max_idr || exports.DEFAULT_PRICING_CONFIG.tiers.silver.maxMonthlyTurnover,
                    baseMarkupDelta: parsed.tiers?.reseller?.tiers?.silver?.base_markup_delta_idr || exports.DEFAULT_PRICING_CONFIG.tiers.silver.baseMarkupDelta,
                },
                gold: {
                    minMonthlyTurnover: parsed.tiers?.reseller?.tiers?.gold?.monthly_turnover_min_idr || exports.DEFAULT_PRICING_CONFIG.tiers.gold.minMonthlyTurnover,
                    maxMonthlyTurnover: parsed.tiers?.reseller?.tiers?.gold?.monthly_turnover_max_idr || exports.DEFAULT_PRICING_CONFIG.tiers.gold.maxMonthlyTurnover,
                    baseMarkupDelta: parsed.tiers?.reseller?.tiers?.gold?.base_markup_delta_idr || exports.DEFAULT_PRICING_CONFIG.tiers.gold.baseMarkupDelta,
                },
                agency: {
                    minMonthlyTurnover: parsed.tiers?.reseller?.tiers?.agency?.monthly_turnover_min_idr || exports.DEFAULT_PRICING_CONFIG.tiers.agency.minMonthlyTurnover,
                    maxMonthlyTurnover: Infinity,
                    baseMarkupDelta: parsed.tiers?.reseller?.tiers?.agency?.base_markup_delta_idr || exports.DEFAULT_PRICING_CONFIG.tiers.agency.baseMarkupDelta,
                },
            },
            sustainability: {
                minimumMonthlyRevenueToBreakEven: parsed.sustainability?.breakeven_monthly_revenue_idr || exports.DEFAULT_PRICING_CONFIG.sustainability.minimumMonthlyRevenueToBreakEven,
                targetMonthlyProfit: parsed.sustainability?.target_monthly_profit_idr || exports.DEFAULT_PRICING_CONFIG.sustainability.targetMonthlyProfit,
            },
        };
        console.log('[PricingConfig] Loaded from JSON:', resolved);
        return config;
    }
    catch (err) {
        console.error('[PricingConfig] Error loading JSON, using defaults:', err);
        return exports.DEFAULT_PRICING_CONFIG;
    }
}
exports.pricingConfigManager = new PricingConfigManager(loadPricingConfigFromFile());
//# sourceMappingURL=pricing.config.js.map