import { PrismaClient } from '@prisma/client';
import { pricingConfigManager } from '../../config/pricing.config';
import { createLogger } from '../../config/logger';

const logger = createLogger('MarginWatchdog');

export class MarginWatchdog {
    constructor(private prisma: PrismaClient) { }

    /**
     * Scans all active products to ensure our current retail prices
     * are not generating a predatory margin due to sudden supplier cost drops.
     */
    async detectPredatoryMargins(): Promise<void> {
        try {
            logger.info('Running ethical margin watchdog scan...');
            const products = await this.prisma.product.findMany({
                where: { active: true }
            });
            const config = pricingConfigManager.getConfig();

            for (const product of products) {
                const costBase = Number(product.costPrice);
                // Retail Price estimation assuming BaseMarkup is added directly.
                // If system uses dynamically computed price on the fly, we benchmark against BaseMarkup.
                const simulatedRetailPrice = costBase + Number(product.baseMarkup);

                if (costBase <= 0) continue; // Skip if invalid

                const marginRate = (simulatedRetailPrice - costBase) / costBase;

                // Trigger an alert if margin unexpectedly exceeds Ethical Max (e.g. > 25% for End Users)
                if (marginRate > config.margins.endUser.maxMarginRate) {

                    await this.prisma.auditLog.create({
                        data: {
                            action: 'ETHICAL_MARGIN_EXCEEDED',
                            entityType: 'PRODUCT',
                            entityId: product.id,
                            notes: `Watchdog Alert: Margin ${(marginRate * 100).toFixed(1)}% on ${product.code} exceeds the maximum ethical limit of ${(config.margins.endUser.maxMarginRate * 100).toFixed(1)}%. Supplier cost dropped to Rp ${costBase}.`,
                            performedBy: 'SYSTEM_WATCHDOG'
                        }
                    });

                    logger.warn(`[Predatory Margin Watchdog] Flagged ${product.code} (${product.gameName}). Actual Margin: ${(marginRate * 100).toFixed(1)}%`);

                    // Optionally auto-adjust retail price down to maxMarginRate or notify Admin via Discord webhook
                    // For now, we flag it in the Audit Logs for Transparency/Sustainability review.
                }
            }

            logger.info('Ethical margin watchdog scan completed.');

        } catch (error) {
            logger.error('Error during margin watchdog scan', { error });
        }
    }
}
