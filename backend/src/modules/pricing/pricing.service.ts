// src/modules/pricing/pricing.service.ts
import { PrismaClient, ResellerTier } from '@prisma/client';
import { PricingConfigManager, DEFAULT_PRICING_CONFIG } from '../../config/pricing.config';

export interface PriceCalculationResult {
  costPrice: bigint;
  taxComponent: bigint;
  overheadAllocation: bigint;
  margin: bigint;
  finalPrice: bigint;
  totalPrice: bigint;
  marginRate: number;
  breakdown: {
    supplier: number;
    tax: number;
    overhead: number;
    paymentFee: number;
    margin: number;
    pph: number;
  };
  warnings: string[];
}

export class PricingService {
  private configManager: PricingConfigManager;

  constructor(
    private prisma: PrismaClient,
    pricingConfig = DEFAULT_PRICING_CONFIG
  ) {
    this.configManager = new PricingConfigManager(pricingConfig);
  }

  private getTierKey(tier: ResellerTier): 'endUser' | 'reseller' | 'distributor' | 'agency' {
    switch (tier) {
      case 'BRONZE': return 'endUser';
      case 'SILVER': return 'reseller';
      case 'GOLD': return 'distributor';
      case 'AGENCY': return 'agency';
      default: return 'endUser';
    }
  }

  async calculatePriceWithTax(
    productCode: string,
    resellerTier: ResellerTier,
    quantity: number = 1
  ): Promise<PriceCalculationResult> {
    const product = await this.prisma.product.findUnique({
      where: { code: productCode },
    });

    if (!product) {
      throw new Error(`Product not found: ${productCode}`);
    }

    const costBase = Number(product.costPrice);
    const config = this.configManager.getConfig();

    // 1. Calculate Overhead (Electricity, Hosting, Maintenance, Domain)
    const overheadAllocation = Math.round(this.configManager.getPerOrderOverhead());

    // 2. Pre-Tax Subtotal
    const subtotalPreTax = costBase + overheadAllocation;

    // 3. Calculate PPN (Value Added Tax)
    const taxPPN = Math.round(subtotalPreTax * config.tax.ppn);

    // 4. Calculate Margin based on Tier
    const tierKey = this.getTierKey(resellerTier);
    const targetMarginRate = config.margins[tierKey].targetMarginRate;
    const margin = Math.round((subtotalPreTax + taxPPN) * targetMarginRate);

    // 5. Calculate PPh (Income Tax) on Margin
    const taxPPh = Math.round(margin * config.tax.pph);

    // 6. Payment Gateway Fee
    const costBeforeGateway = subtotalPreTax + taxPPN + margin + taxPPh;
    const paymentFee = config.overhead.paymentGatewayFeeSplit
      ? Math.round(costBeforeGateway * config.overhead.paymentGatewayFeeRate)
      : 0;

    const finalPriceUnit = costBeforeGateway + paymentFee;
    const totalFinalPrice = finalPriceUnit * quantity;

    // Validate if margin is ethical
    const validation = this.configManager.validatePrice(tierKey, costBase, finalPriceUnit);

    return {
      costPrice: BigInt(costBase),
      taxComponent: BigInt(taxPPN),
      overheadAllocation: BigInt(overheadAllocation),
      margin: BigInt(margin),
      finalPrice: BigInt(finalPriceUnit),
      totalPrice: BigInt(totalFinalPrice),
      marginRate: (finalPriceUnit - costBase) / costBase,
      breakdown: {
        supplier: costBase,
        tax: taxPPN,
        overhead: overheadAllocation,
        paymentFee,
        margin,
        pph: taxPPh,
      },
      warnings: validation.warnings,
    };
  }
}

import { prisma } from '../../config/database';
export const pricingService = new PricingService(prisma as any);

export async function getResellerPrice(productCode: string, tier: ResellerTier): Promise<bigint> {
  const result = await pricingService.calculatePriceWithTax(productCode, tier);
  return result.finalPrice;
}
