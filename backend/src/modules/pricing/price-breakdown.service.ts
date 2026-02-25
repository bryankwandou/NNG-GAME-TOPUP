/**
 * Price Breakdown Service (Full Implementation)
 */

import { PrismaClient, ResellerTier } from '@prisma/client';
import { PricingConfig, pricingConfigManager } from '../../config/pricing.config';

export type FairnessRating = 'excellent' | 'good' | 'fair' | 'concerning' | 'warn' | 'blocked';

export interface DetailedPriceBreakdown {
  product: {
    code: string;
    gameName: string;
    denomination: number;
  };
  tier: ResellerTier;
  tierLabel: string;
  costComponents: {
    supplierPrice: bigint;
    overhead: bigint;
    subtotalPreTax: bigint;
  };
  taxComponents: {
    ppn: bigint;
    pph: bigint;
  };
  margin: bigint;
  finalPrice: bigint;
  targetMarginRate: number;
  actualMarginAmount: bigint;
  ppnAmount: bigint;
  pphAmount: bigint;
  supplierCost: bigint;
  overheadPerOrder: bigint;
  fairnessRating: FairnessRating;
  fairnessMessage: string;
}

export class PriceBreakdownService {
  constructor(private prisma: PrismaClient, private pricingConfig: PricingConfig) { }

  async generatePriceBreakdown(
    productCode: string,
    denomination: number,
    tier: ResellerTier
  ): Promise<DetailedPriceBreakdown> {
    const product = await this.prisma.product.findUnique({
      where: { code: productCode },
    });

    if (!product) throw new Error(`Product not found: ${productCode}`);

    const costBase = Number(product.costPrice);
    const config = this.pricingConfig;

    const overhead = Math.round(
      (config.overhead.monthlyElectricity +
        config.overhead.monthlyHosting +
        config.overhead.monthlyDomain +
        config.overhead.monthlyBotMaintenance) /
      config.overhead.estimatedMonthlyOrders
    );

    const subtotalPreTax = costBase + overhead;

    // Tax calculation based on strategy
    let ppn = 0;
    let baseForMargin = subtotalPreTax;

    if (config.tax.taxHandlingStrategy === 'PASSED_THROUGH') {
      ppn = Math.round(subtotalPreTax * config.tax.ppn);
      baseForMargin = subtotalPreTax + ppn;
    }

    const tierMap: Record<ResellerTier, 'endUser' | 'reseller' | 'distributor' | 'agency'> = {
      BRONZE: 'endUser',
      SILVER: 'reseller',
      GOLD: 'distributor',
      AGENCY: 'agency',
    };

    const marginRate = config.margins[tierMap[tier]].targetMarginRate;
    let margin = Math.round(baseForMargin * marginRate);
    const pph = Math.round(margin * config.tax.pph);

    let finalPrice = baseForMargin + margin;

    if (config.tax.taxHandlingStrategy === 'ABSORBED') {
      // If absorbed, we deduct tax from the generated margin afterwards invisibly
      // But for transparency we still show it in breakdown.
      ppn = Math.round(subtotalPreTax * config.tax.ppn);
      margin = margin - ppn - pph; // Actual profit taken is much lower
      finalPrice = subtotalPreTax + Math.round(baseForMargin * marginRate); // Price remains "clean" without extra tax tack-on
    } else {
      finalPrice = finalPrice + pph;
    }

    const fairnessRating: FairnessRating = marginRate <= 0.05 ? 'excellent' : marginRate <= 0.1 ? 'good' : 'fair';
    const fairnessMessage = fairnessRating === 'excellent'
      ? 'This price is strictly regulated for maximum community benefit.'
      : 'Fair pricing guaranteed with transparent margin.';

    return {
      product: {
        code: productCode,
        gameName: product.gameName,
        denomination,
      },
      tier,
      tierLabel: tier.charAt(0) + tier.slice(1).toLowerCase(),
      costComponents: {
        supplierPrice: BigInt(costBase),
        overhead: BigInt(overhead),
        subtotalPreTax: BigInt(subtotalPreTax),
      },
      taxComponents: {
        ppn: BigInt(ppn),
        pph: BigInt(pph),
      },
      margin: BigInt(margin),
      finalPrice: BigInt(finalPrice),
      targetMarginRate: marginRate,
      actualMarginAmount: BigInt(margin),
      ppnAmount: BigInt(ppn),
      pphAmount: BigInt(pph),
      supplierCost: BigInt(costBase),
      overheadPerOrder: BigInt(overhead),
      fairnessRating,
      fairnessMessage,
    };
  }
}

export const priceBreakdownService = new PriceBreakdownService(
  new PrismaClient() as any,
  pricingConfigManager.getConfig()
);
