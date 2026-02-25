import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { logger } from '../../config/logger';

const prisma = new PrismaClient();

interface LoginBody {
  username: string;
  password: string;
}

interface AdjustBalanceBody {
  resellerId: string;
  amount: number;
  notes: string;
}

// Middleware to verify admin JWT
async function verifyAdmin(request: FastifyRequest, reply: FastifyReply) {
  try {
    await request.jwtVerify();
  } catch (err) {
    return reply.code(401).send({ error: 'Unauthorized' });
  }
}

export default async function adminRoutes(app: FastifyInstance) {
  // Admin login
  app.post<{ Body: LoginBody }>(
    '/login',
    async (request: FastifyRequest<{ Body: LoginBody }>, reply: FastifyReply) => {
      try {
        const { username, password } = request.body;

        const admin = await prisma.adminUser.findUnique({
          where: { username }
        });

        if (!admin) {
          return reply.code(401).send({ error: 'Invalid credentials' });
        }

        if (!(await bcrypt.compare(password, admin.passwordHash))) {
          return reply.code(401).send({ error: 'Invalid credentials' });
        }

        const token = app.jwt.sign({
          id: admin.id,
          username: admin.username
        });

        logger.info('Admin logged in', { username });

        return reply.send({ token });
      } catch (error) {
        logger.error('Admin login error', { error });
        return reply.code(500).send({ error: 'Internal server error' });
      }
    }
  );

  // Get all resellers (admin only)
  app.get(
    '/resellers',
    { preHandler: verifyAdmin },
    async (_request: FastifyRequest, reply: FastifyReply) => {
      try {
        const resellers = await prisma.reseller.findMany({
          orderBy: { createdAt: 'desc' }
        });
        return reply.send(resellers);
      } catch (error) {
        return reply.code(500).send({ error: 'Internal server error' });
      }
    }
  );

  // Adjust reseller balance (admin only)
  app.post<{ Body: AdjustBalanceBody }>(
    '/adjust-balance',
    { preHandler: verifyAdmin },
    async (request: FastifyRequest<{ Body: AdjustBalanceBody }>, reply: FastifyReply) => {
      try {
        const { resellerId, amount, notes } = request.body;

        await prisma.reseller.update({
          where: { id: resellerId },
          data: {
            balance: {
              increment: amount
            }
          }
        });

        await prisma.auditLog.create({
          data: {
            resellerId: resellerId,
            action: 'BALANCE_ADJUST',
            entityType: 'RESELLER',
            entityId: resellerId,
            notes: `Admin adjusted balance by ${amount}. Notes: ${notes}`
          }
        });

        logger.info('Balance adjusted by admin', { resellerId, amount });

        return reply.send({ success: true });
      } catch (error) {
        logger.error('Balance adjustment error', { error });
        return reply.code(500).send({ error: 'Internal server error' });
      }
    }
  );

  // Update reseller tier (admin only)
  app.patch<{ Params: { id: string }; Body: { tier: string } }>(
    '/resellers/:id/tier',
    { preHandler: verifyAdmin },
    async (request: FastifyRequest<{ Params: { id: string }; Body: { tier: string } }>, reply: FastifyReply) => {
      try {
        const { id } = request.params;
        const { tier } = request.body;

        await prisma.reseller.update({
          where: { id },
          data: { tier: tier as any }
        });

        await prisma.auditLog.create({
          data: {
            resellerId: id,
            action: 'TIER_CHANGE',
            entityType: 'RESELLER',
            entityId: id,
            notes: `Admin manually changed tier to ${tier}`
          }
        });

        logger.info('Tier updated by admin', { resellerId: id, tier });

        return reply.send({ success: true });
      } catch (error) {
        logger.error('Tier update error', { error });
        return reply.code(500).send({ error: 'Internal server error' });
      }
    }
  );

  // Suspend/activate reseller (admin only)
  app.patch<{ Params: { id: string }; Body: { status: string } }>(
    '/resellers/:id/status',
    { preHandler: verifyAdmin },
    async (request: FastifyRequest<{ Params: { id: string }; Body: { status: string } }>, reply: FastifyReply) => {
      try {
        const { id } = request.params;
        const { status } = request.body;

        await prisma.reseller.update({
          where: { id },
          data: { status: status.toUpperCase() as any }
        });

        logger.info('Reseller status updated by admin', { resellerId: id, status });

        return reply.send({ success: true });
      } catch (error) {
        logger.error('Status update error', { error });
        return reply.code(500).send({ error: 'Internal server error' });
      }
    }
  );

  // Get sustainability report (admin only)
  app.get(
    '/sustainability',
    { preHandler: verifyAdmin },
    async (_request: FastifyRequest, reply: FastifyReply) => {
      try {
        const now = new Date();
        const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);

        // Get month's orders
        const orders = await prisma.order.findMany({
          where: {
            createdAt: {
              gte: startOfMonth,
              lte: endOfMonth,
            },
            status: { in: ['COMPLETED', 'PENDING'] as any },
          },
          select: {
            resellerPrice: true,
            status: true,
          },
        });

        const totalOrders = orders.length;
        const completedOrders = orders.filter((o: any) => o.status === 'COMPLETED').length;
        const totalRevenue = orders
          .filter((o: any) => o.status === 'COMPLETED')
          .reduce((sum: number, o: any) => sum + Number(o.resellerPrice), 0);

        // Calculate overhead (from config)
        const monthlyOverhead = 500000 + 0 + 150000 + 1000000; // electricity + hosting + domain + maintenance
        const estimatedMonthlyOrders = 500; // from config
        const costPerOrder = monthlyOverhead / estimatedMonthlyOrders;
        const totalOverhead = costPerOrder * totalOrders;

        // Calculate average margin
        const avgRevenuePerOrder = totalOrders > 0 ? totalRevenue / totalOrders : 0;
        const avgMarginRate = totalOrders > 0 ? (totalRevenue - totalOverhead) / totalRevenue : 0;

        // Determine status
        const breakevenOrders = 500;
        const breakevenRevenue = 2000000;
        const isBreakeven = totalRevenue >= breakevenRevenue;
        const targetMonthlyProfit = 5000000;
        const actualProfit = totalRevenue - totalOverhead;

        // Generate alerts
        const alerts: string[] = [];
        if (!isBreakeven) {
          alerts.push('⚠️ Revenue below breakeven threshold - operating at loss');
        }
        if (totalOrders < breakevenOrders) {
          alerts.push(`⚠️ Order volume (${totalOrders}) below breakeven (${breakevenOrders})`);
        }
        if (avgMarginRate > 0.25) {
          alerts.push('⚠️ Average margin exceeds ethical limit (25%) - consider price reduction');
        }
        if (avgMarginRate < 0.05) {
          alerts.push('⚠️ Average margin below minimum (5%) - unsustainable pricing');
        }
        if (alerts.length === 0) {
          alerts.push('✅ System operating within healthy parameters');
        }

        const report = {
          period: {
            month: now.toLocaleString('default', { month: 'long', year: 'numeric' }),
            startDate: startOfMonth.toISOString(),
            endDate: endOfMonth.toISOString(),
          },
          volume: {
            totalOrders,
            completedOrders,
            pendingOrders: totalOrders - completedOrders,
            breakevenOrders,
            status: isBreakeven ? '✅ Profitable' : '⚠️ Below Breakeven',
          },
          revenue: {
            totalRevenue,
            avgRevenuePerOrder: Math.round(avgRevenuePerOrder),
            breakevenRevenue,
            targetMonthlyProfit,
            actualProfit: Math.round(actualProfit),
            profitMargin: ((actualProfit / (totalRevenue || 1)) * 100).toFixed(2) + '%',
          },
          costs: {
            monthlyOverhead,
            costPerOrder: costPerOrder.toFixed(2),
            totalOverhead: Math.round(totalOverhead),
          },
          pricing: {
            avgMarginRate: (avgMarginRate * 100).toFixed(2) + '%',
            targetMarginRate: '12-15%',
            maxAllowedMarginRate: '25%',
            status:
              avgMarginRate <= 0.15 ? '✅ Within target' :
                avgMarginRate <= 0.25 ? '⚠️ Above target but acceptable' :
                  '🚫 Exceeds ethical limit',
          },
          sustainability: {
            isBreakeven,
            projectedAnnualProfit: Math.round(actualProfit * 12),
            ordersNeededForTarget: Math.round((targetMonthlyProfit + totalOverhead) / (avgRevenuePerOrder || 1)),
          },
          alerts,
        };

        logger.info('Sustainability report generated', { totalOrders, totalRevenue, isBreakeven });

        return reply.send(report);
      } catch (error) {
        logger.error('Sustainability report error', { error });
        return reply.code(500).send({ error: 'Internal server error' });
      }
    }
  );
}
