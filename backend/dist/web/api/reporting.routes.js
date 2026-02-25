"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = reportingRoutes;
const reporting_service_1 = require("../../modules/reporting/reporting.service");
const sustainability_service_1 = require("../../modules/analytics/sustainability.service");
const logger_1 = require("../../config/logger");
const database_1 = require("../../config/database");
const pricing_config_1 = require("../../config/pricing.config");
const pricingConfig = (0, pricing_config_1.loadPricingConfigFromFile)();
const pricingConfigManager = new pricing_config_1.PricingConfigManager(pricingConfig);
const sustainabilityService = new sustainability_service_1.SustainabilityService(database_1.prisma, pricingConfigManager);
async function reportingRoutes(app) {
    // Get summary report
    app.get('/summary', async (request, reply) => {
        try {
            const { startDate, endDate } = request.query;
            const start = startDate ? new Date(startDate) : new Date(Date.now() - 30 * 24 * 3600 * 1000);
            const end = endDate ? new Date(endDate) : new Date();
            const report = await (0, reporting_service_1.generateSummaryReport)(start, end);
            return reply.send(report);
        }
        catch (error) {
            return reply.code(500).send({ error: 'Internal server error' });
        }
    });
    // Get top resellers
    app.get('/top-resellers', async (_request, reply) => {
        try {
            const resellers = await (0, reporting_service_1.getTopResellers)(10);
            return reply.send(resellers);
        }
        catch (error) {
            return reply.code(500).send({ error: 'Internal server error' });
        }
    });
    // Sustainability report
    app.get('/sustainability', async (_request, reply) => {
        try {
            const startDate = new Date();
            startDate.setDate(startDate.getDate() - 30);
            const endDate = new Date();
            const metrics = await sustainabilityService.calculateMetrics(startDate, endDate);
            return reply.code(200).send({ metrics });
        }
        catch (error) {
            logger_1.logger.error('Sustainability report error', { error });
            return reply.code(500).send({ error: 'Failed to generate sustainability report' });
        }
    });
}
//# sourceMappingURL=reporting.routes.js.map