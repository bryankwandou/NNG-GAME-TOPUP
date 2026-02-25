// src/config/pricing.config.ts
/**
 * Centralized pricing configuration
 * Defines all cost components, tax rates, and margin targets
 * This ensures fair, transparent, and sustainable pricing
 */

export interface PricingConfig {
  // ============ TAX RATES ============
  tax: {
    ppn: number; // Value-added tax (PPN), typically 11% in Indonesia
    pph: number; // Income tax (PPh), depends on revenue scale
    taxHandlingStrategy: 'ABSORBED' | 'PASSED_THROUGH'; // Absorbed in margin vs passed to customer
  };

  // ============ OVERHEAD COSTS ============
  overhead: {
    monthlyElectricity: number; // in IDR, e.g., 500000
    monthlyHosting: number; // in IDR, e.g., 200000 (free tier might be 0)
    monthlyDomain: number; // in IDR, e.g., 150000
    monthlyBotMaintenance: number; // estimated hours * hourly rate
    estimatedMonthlyOrders: number; // used to allocate per-order cost
    paymentGatewayFeeSplit: boolean; // if true, cost is passed to customer; if false, operator absorbs
    paymentGatewayFeeRate: number; // e.g., 0.03 for 3%
  };

  // ============ MARGIN TARGETS (PER TIER) ============
  margins: {
    endUser: {
      minMarginRate: number; // e.g., 0.05 = 5%
      targetMarginRate: number; // e.g., 0.15 = 15%
      maxMarginRate: number; // e.g., 0.25 = 25% (warning if higher)
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

  // ============ TIER THRESHOLDS ============
  tiers: {
    bronze: {
      minMonthlyTurnover: number; // 0
      maxMonthlyTurnover: number; // 5M
      baseMarkupDelta: number; // e.g., 500 IDR (added to cost)
    };
    silver: {
      minMonthlyTurnover: number; // 5M
      maxMonthlyTurnover: number; // 20M
      baseMarkupDelta: number; // e.g., 400 IDR
    };
    gold: {
      minMonthlyTurnover: number; // 20M
      maxMonthlyTurnover: number; // 50M
      baseMarkupDelta: number; // e.g., 300 IDR
    };
    agency: {
      minMonthlyTurnover: number; // 50M+
      maxMonthlyTurnover: number; // unlimited
      baseMarkupDelta: number; // e.g., 200 IDR
    };
  };

  // ============ SUSTAINABILITY THRESHOLDS ============
  sustainability: {
    // If monthly revenue drops below this, flag a warning
    minimumMonthlyRevenueToBreakEven: number;
    // Used to calculate recommended order volume
    targetMonthlyProfit: number;
  };
}

/**
 * Default configuration (community-friendly, fair pricing)
 */
export const DEFAULT_PRICING_CONFIG: PricingConfig = {
  tax: {
    ppn: 0.11, // 11% Value-added tax
    pph: 0.02, // 2% income tax (simplified; actual may vary)
    taxHandlingStrategy: 'PASSED_THROUGH',
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

export class PricingConfigManager {
  private config: PricingConfig;

  constructor(config: PricingConfig = DEFAULT_PRICING_CONFIG) {
    this.config = config;
  }

  /**
   * Calculate per-order overhead allocation
   */
  getPerOrderOverhead(): number {
    const total =
      this.config.overhead.monthlyElectricity +
      this.config.overhead.monthlyHosting +
      this.config.overhead.monthlyDomain +
      this.config.overhead.monthlyBotMaintenance;
    return total / this.config.overhead.estimatedMonthlyOrders;
  }

  /**
   * Calculate recommended margin for a tier
   */
  getRecommendedMargin(tier: 'endUser' | 'reseller' | 'distributor' | 'agency'): number {
    return this.config.margins[tier].targetMarginRate;
  }

  /**
   * Validate if a price is within ethical boundaries
   */
  validatePrice(
    tier: 'endUser' | 'reseller' | 'distributor' | 'agency',
    costBase: number,
    finalPrice: number
  ): {
    isValid: boolean;
    marginRate: number;
    warnings: string[];
  } {
    const marginRate = (finalPrice - costBase) / costBase;
    const tierConfig = this.config.margins[tier];
    const warnings: string[] = [];

    if (marginRate < tierConfig.minMarginRate) {
      warnings.push(
        `⚠️ Price below minimum margin (${(tierConfig.minMarginRate * 100).toFixed(1)}%) for ${tier}`
      );
    }

    if (marginRate > tierConfig.maxMarginRate) {
      warnings.push(
        `⚠️ Price exceeds max margin (${(tierConfig.maxMarginRate * 100).toFixed(1)}%) for ${tier}—consider reducing`
      );
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
  calculateSustainabilityMetrics(monthlyRevenue: number): {
    isBreakEven: boolean;
    monthlyProfit: number;
    ordersNeeded: number;
  } {
    const overhead = this.getPerOrderOverhead();
    const breakEvenRate = this.config.sustainability.minimumMonthlyRevenueToBreakEven;

    return {
      isBreakEven: monthlyRevenue >= breakEvenRate,
      monthlyProfit: monthlyRevenue - (this.config.overhead.estimatedMonthlyOrders * overhead),
      ordersNeeded: Math.ceil(breakEvenRate / overhead),
    };
  }

  getConfig(): PricingConfig {
    return this.config;
  }
}

/**
 * Load pricing configuration from JSON file if available
 * Falls back to DEFAULT_PRICING_CONFIG if file doesn't exist or is invalid
 * 
 * Usage:
 * const config = loadPricingConfigFromFile();
 * const manager = new PricingConfigManager(config);
 */
export function loadPricingConfigFromFile(configPath?: string): PricingConfig {
  try {
    const fs = require('fs');
    const path = require('path');

    const resolved = configPath
      ? path.resolve(configPath)
      : path.resolve(process.cwd(), 'config', 'pricing-config.json');

    if (!fs.existsSync(resolved)) {
      console.log('[PricingConfig] JSON config not found, using defaults');
      return DEFAULT_PRICING_CONFIG;
    }

    const raw = fs.readFileSync(resolved, 'utf-8');
    const parsed = JSON.parse(raw);

    // Map JSON structure to PricingConfig interface
    const config: PricingConfig = {
      tax: {
        ppn: parsed.tax?.ppn_rate || DEFAULT_PRICING_CONFIG.tax.ppn,
        pph: parsed.tax?.pph_rate || DEFAULT_PRICING_CONFIG.tax.pph,
        taxHandlingStrategy: parsed.tax?.handling_strategy || DEFAULT_PRICING_CONFIG.tax.taxHandlingStrategy,
      },
      overhead: {
        monthlyElectricity: parsed.monthly_costs?.electricity_idr || DEFAULT_PRICING_CONFIG.overhead.monthlyElectricity,
        monthlyHosting: parsed.monthly_costs?.hosting_idr || DEFAULT_PRICING_CONFIG.overhead.monthlyHosting,
        monthlyDomain: parsed.monthly_costs?.domain_idr || DEFAULT_PRICING_CONFIG.overhead.monthlyDomain,
        monthlyBotMaintenance: parsed.monthly_costs?.bot_maintenance_total_idr || DEFAULT_PRICING_CONFIG.overhead.monthlyBotMaintenance,
        estimatedMonthlyOrders: parsed.monthly_costs?.estimated_monthly_orders || DEFAULT_PRICING_CONFIG.overhead.estimatedMonthlyOrders,
        paymentGatewayFeeSplit: parsed.payment_processing?.fee_passed_to_customer ?? DEFAULT_PRICING_CONFIG.overhead.paymentGatewayFeeSplit,
        paymentGatewayFeeRate: parsed.payment_processing?.gateway_fee_rate || DEFAULT_PRICING_CONFIG.overhead.paymentGatewayFeeRate,
      },
      margins: {
        endUser: {
          minMarginRate: parsed.tiers?.end_user?.min_margin_rate || DEFAULT_PRICING_CONFIG.margins.endUser.minMarginRate,
          targetMarginRate: parsed.tiers?.end_user?.target_margin_rate || DEFAULT_PRICING_CONFIG.margins.endUser.targetMarginRate,
          maxMarginRate: parsed.tiers?.end_user?.max_margin_rate || DEFAULT_PRICING_CONFIG.margins.endUser.maxMarginRate,
        },
        reseller: {
          minMarginRate: parsed.tiers?.reseller?.tiers?.bronze?.min_margin_rate || DEFAULT_PRICING_CONFIG.margins.reseller.minMarginRate,
          targetMarginRate: parsed.tiers?.reseller?.tiers?.bronze?.target_margin_rate || DEFAULT_PRICING_CONFIG.margins.reseller.targetMarginRate,
          maxMarginRate: parsed.tiers?.reseller?.tiers?.bronze?.max_margin_rate || DEFAULT_PRICING_CONFIG.margins.reseller.maxMarginRate,
        },
        distributor: {
          minMarginRate: parsed.tiers?.reseller?.tiers?.gold?.min_margin_rate || DEFAULT_PRICING_CONFIG.margins.distributor.minMarginRate,
          targetMarginRate: parsed.tiers?.reseller?.tiers?.gold?.target_margin_rate || DEFAULT_PRICING_CONFIG.margins.distributor.targetMarginRate,
          maxMarginRate: parsed.tiers?.reseller?.tiers?.gold?.max_margin_rate || DEFAULT_PRICING_CONFIG.margins.distributor.maxMarginRate,
        },
        agency: {
          minMarginRate: parsed.tiers?.reseller?.tiers?.agency?.min_margin_rate || DEFAULT_PRICING_CONFIG.margins.agency.minMarginRate,
          targetMarginRate: parsed.tiers?.reseller?.tiers?.agency?.target_margin_rate || DEFAULT_PRICING_CONFIG.margins.agency.targetMarginRate,
          maxMarginRate: parsed.tiers?.reseller?.tiers?.agency?.max_margin_rate || DEFAULT_PRICING_CONFIG.margins.agency.maxMarginRate,
        },
      },
      tiers: {
        bronze: {
          minMonthlyTurnover: parsed.tiers?.reseller?.tiers?.bronze?.monthly_turnover_min_idr || DEFAULT_PRICING_CONFIG.tiers.bronze.minMonthlyTurnover,
          maxMonthlyTurnover: parsed.tiers?.reseller?.tiers?.bronze?.monthly_turnover_max_idr || DEFAULT_PRICING_CONFIG.tiers.bronze.maxMonthlyTurnover,
          baseMarkupDelta: parsed.tiers?.reseller?.tiers?.bronze?.base_markup_delta_idr || DEFAULT_PRICING_CONFIG.tiers.bronze.baseMarkupDelta,
        },
        silver: {
          minMonthlyTurnover: parsed.tiers?.reseller?.tiers?.silver?.monthly_turnover_min_idr || DEFAULT_PRICING_CONFIG.tiers.silver.minMonthlyTurnover,
          maxMonthlyTurnover: parsed.tiers?.reseller?.tiers?.silver?.monthly_turnover_max_idr || DEFAULT_PRICING_CONFIG.tiers.silver.maxMonthlyTurnover,
          baseMarkupDelta: parsed.tiers?.reseller?.tiers?.silver?.base_markup_delta_idr || DEFAULT_PRICING_CONFIG.tiers.silver.baseMarkupDelta,
        },
        gold: {
          minMonthlyTurnover: parsed.tiers?.reseller?.tiers?.gold?.monthly_turnover_min_idr || DEFAULT_PRICING_CONFIG.tiers.gold.minMonthlyTurnover,
          maxMonthlyTurnover: parsed.tiers?.reseller?.tiers?.gold?.monthly_turnover_max_idr || DEFAULT_PRICING_CONFIG.tiers.gold.maxMonthlyTurnover,
          baseMarkupDelta: parsed.tiers?.reseller?.tiers?.gold?.base_markup_delta_idr || DEFAULT_PRICING_CONFIG.tiers.gold.baseMarkupDelta,
        },
        agency: {
          minMonthlyTurnover: parsed.tiers?.reseller?.tiers?.agency?.monthly_turnover_min_idr || DEFAULT_PRICING_CONFIG.tiers.agency.minMonthlyTurnover,
          maxMonthlyTurnover: Infinity,
          baseMarkupDelta: parsed.tiers?.reseller?.tiers?.agency?.base_markup_delta_idr || DEFAULT_PRICING_CONFIG.tiers.agency.baseMarkupDelta,
        },
      },
      sustainability: {
        minimumMonthlyRevenueToBreakEven: parsed.sustainability?.breakeven_monthly_revenue_idr || DEFAULT_PRICING_CONFIG.sustainability.minimumMonthlyRevenueToBreakEven,
        targetMonthlyProfit: parsed.sustainability?.target_monthly_profit_idr || DEFAULT_PRICING_CONFIG.sustainability.targetMonthlyProfit,
      },
    };

    console.log('[PricingConfig] Loaded from JSON:', resolved);
    return config;
  } catch (err) {
    console.error('[PricingConfig] Error loading JSON, using defaults:', err);
    return DEFAULT_PRICING_CONFIG;
  }
}

export const pricingConfigManager = new PricingConfigManager(loadPricingConfigFromFile());
