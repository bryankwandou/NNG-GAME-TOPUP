"use strict";
/**
 * Pricing API Routes
 * Endpoints for pricing transparency and breakdown calculations
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerPricingRoutes = registerPricingRoutes;
const pricing_service_1 = require("../../modules/pricing/pricing.service");
const pricing_config_1 = require("../../config/pricing.config");
const logger_1 = require("../../config/logger");
const database_1 = require("../../config/database");
const logger = (0, logger_1.createLogger)('PricingRoutes');
const pricingService = new pricing_service_1.PricingService(database_1.prisma);
const configManager = new pricing_config_1.PricingConfigManager();
/**
 * POST /api/pricing/breakdown
 */
async function registerPricingRoutes(fastify) {
    fastify.post('/api/pricing/breakdown', async (request, reply) => {
        try {
            const { productCode, tier, quantity = 1 } = request.body;
            if (!productCode || !tier) {
                return reply.code(400).send({
                    error: 'Missing required fields: productCode, tier',
                });
            }
            // Validate tier
            const validTiers = ['bronze', 'silver', 'gold', 'agency'];
            if (!validTiers.includes(tier)) {
                return reply.code(400).send({
                    error: `Invalid tier. Must be one of: ${validTiers.join(', ')}`,
                });
            }
            // Calculate price breakdown
            const result = await pricingService.calculatePriceWithTax(productCode, tier, quantity);
            if (!result) {
                return reply.code(404).send({
                    error: `Product not found: ${productCode}`,
                });
            }
            return reply.code(200).send({
                productCode,
                tier,
                quantity,
                breakdown: {
                    costPrice: result.costPrice,
                    taxPPN: Math.round(Number(result.breakdown.tax)),
                    taxPPh: Math.round(Number(result.breakdown.pph)),
                    overhead: Math.round(Number(result.breakdown.overhead)),
                    margin: Math.round(Number(result.breakdown.margin)),
                    finalPrice: Number(result.finalPrice),
                },
                marginRate: parseFloat(result.marginRate.toFixed(2)),
                warnings: result.warnings,
            });
        }
        catch (error) {
            logger.error('Error calculating price breakdown', { error });
            return reply.code(500).send({ error: 'Failed to calculate price breakdown' });
        }
    });
    /**
     * GET /api/pricing/list
     */
    fastify.get('/api/pricing/list', async (request, reply) => {
        try {
            const { tier } = request.query;
            return reply.code(200).send({
                products: [],
                tier: tier || 'all',
                message: 'Product pricing list endpoint (implementation pending)',
            });
        }
        catch (error) {
            logger.error('Error fetching pricing list', { error });
            return reply.code(500).send({ error: 'Failed to fetch pricing list' });
        }
    });
    /**
     * GET /api/pricing/config
     */
    fastify.get('/api/pricing/config', async (_request, reply) => {
        try {
            const config = configManager.getConfig();
            return reply.code(200).send({ config });
        }
        catch (error) {
            logger.error('Error fetching pricing config', { error });
            return reply.code(500).send({ error: 'Failed to fetch pricing configuration' });
        }
    });
}
//# sourceMappingURL=pricing.routes.js.map