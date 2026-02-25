import { FastifyRequest, FastifyReply } from 'fastify';
import { SustainabilityService } from '../../modules/analytics/sustainability.service';
export declare class DashboardRoutes {
    private sustainabilityService;
    constructor(sustainabilityService: SustainabilityService);
    getDashboardHTML(_request: FastifyRequest, reply: FastifyReply): Promise<void>;
    getSustainabilityMetrics(_request: FastifyRequest<{
        Querystring: {
            period: string;
        };
    }>, reply: FastifyReply): Promise<void>;
}
export declare function registerDashboardRoutes(app: any, dashboardRoutes: DashboardRoutes): Promise<void>;
//# sourceMappingURL=dashboard.routes.d.ts.map