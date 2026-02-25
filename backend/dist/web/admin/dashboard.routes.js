"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardRoutes = void 0;
exports.registerDashboardRoutes = registerDashboardRoutes;
const logger_1 = require("../../config/logger");
class DashboardRoutes {
    constructor(sustainabilityService) {
        this.sustainabilityService = sustainabilityService;
    }
    async getDashboardHTML(_request, reply) {
        reply.send('<h1>Dashboard</h1>');
    }
    async getSustainabilityMetrics(_request, reply) {
        try {
            const now = new Date();
            const startDate = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
            const metrics = await this.sustainabilityService.calculateMetrics(startDate, now);
            reply.send(metrics);
        }
        catch (error) {
            logger_1.logger.error('Error calculating metrics', error);
            reply.code(500).send({ error: 'Internal error' });
        }
    }
}
exports.DashboardRoutes = DashboardRoutes;
async function registerDashboardRoutes(app, dashboardRoutes) {
    app.get('/admin/dashboard', (req, reply) => dashboardRoutes.getDashboardHTML(req, reply));
    app.get('/api/admin/sustainability', (req, reply) => dashboardRoutes.getSustainabilityMetrics(req, reply));
}
//# sourceMappingURL=dashboard.routes.js.map