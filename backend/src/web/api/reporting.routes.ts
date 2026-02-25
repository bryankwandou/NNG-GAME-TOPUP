import { FastifyInstance } from 'fastify';
import {
  generateSummaryReport,
  getTopResellers
} from '../../modules/reporting/reporting.service';
import { SustainabilityService } from '../../modules/analytics/sustainability.service';
import { logger } from '../../config/logger';
import { prisma } from '../../config/database';
import { PricingConfigManager, loadPricingConfigFromFile } from '../../config/pricing.config';

const pricingConfig = loadPricingConfigFromFile();
const pricingConfigManager = new PricingConfigManager(pricingConfig);
const sustainabilityService = new SustainabilityService(prisma as any, pricingConfigManager);

interface ReportQuery {
  startDate: string;
  endDate: string;
  resellerId?: string;
}

export default async function reportingRoutes(app: FastifyInstance) {
  // Get summary report
  app.get<{ Querystring: ReportQuery }>('/summary', async (request, reply) => {
    try {
      const { startDate, endDate } = request.query;
      const start = startDate ? new Date(startDate) : new Date(Date.now() - 30 * 24 * 3600 * 1000);
      const end = endDate ? new Date(endDate) : new Date();

      const report = await generateSummaryReport(start, end);
      return reply.send(report);
    } catch (error) {
      return reply.code(500).send({ error: 'Internal server error' });
    }
  });

  // Get top resellers
  app.get('/top-resellers', async (_request, reply) => {
    try {
      const resellers = await getTopResellers(10);
      return reply.send(resellers);
    } catch (error) {
      return reply.code(500).send({ error: 'Internal server error' });
    }
  });

  // Sustainability report
  app.get<{ Querystring: { period?: string } }>(
    '/sustainability',
    async (_request, reply) => {
      try {
        const startDate = new Date();
        startDate.setDate(startDate.getDate() - 30);
        const endDate = new Date();
        const metrics = await sustainabilityService.calculateMetrics(startDate, endDate);
        return reply.code(200).send({ metrics });
      } catch (error) {
        logger.error('Sustainability report error', { error });
        return reply.code(500).send({ error: 'Failed to generate sustainability report' });
      }
    }
  );
}
