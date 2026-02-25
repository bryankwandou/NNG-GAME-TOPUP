import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { createDeposit, listDeposits } from '../../modules/deposits/deposits.service';

interface CreateDepositBody {
  resellerId: string;
  amount: number;
  paymentChannel: string;
}

interface GetDepositsQuery {
  resellerId: string;
  limit?: number;
}

export default async function depositRoutes(app: FastifyInstance) {
  // Create new deposit
  app.post<{ Body: CreateDepositBody }>(
    '/',
    async (request: FastifyRequest<{ Body: CreateDepositBody }>, reply: FastifyReply) => {
      try {
        const { resellerId, amount, paymentChannel } = request.body;

        if (amount < 10000) {
          return reply.code(400).send({ error: 'Minimum deposit is 10,000 IDR' });
        }

        const result = await createDeposit({
          resellerId,
          amount: BigInt(amount),
          paymentChannel: paymentChannel as any
        });
        return reply.code(201).send(result);
      } catch (error: any) {
        return reply.code(400).send({ error: error.message });
      }
    }
  );

  // Get deposits by reseller
  app.get<{ Querystring: GetDepositsQuery }>(
    '/',
    async (request: FastifyRequest<{ Querystring: GetDepositsQuery }>, reply: FastifyReply) => {
      try {
        const { resellerId, limit } = request.query;
        const { deposits } = await listDeposits(resellerId, 0, limit);
        return reply.send(deposits);
      } catch (error) {
        return reply.code(500).send({ error: 'Internal server error' });
      }
    }
  );
}
