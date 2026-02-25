import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { createOrder, getResellerOrders, getOrderDetail } from '../../modules/orders/orders.service';

interface CreateOrderBody {
  resellerId: string;
  productCode: string;
  targetGameId: string;
}

interface GetOrdersQuery {
  resellerId: string;
  limit?: number;
}

interface GetOrderParams {
  id: string;
}

export default async function orderRoutes(app: FastifyInstance) {
  // Create new order
  app.post<{ Body: CreateOrderBody }>(
    '/',
    async (request: FastifyRequest<{ Body: CreateOrderBody }>, reply: FastifyReply) => {
      try {
        const { resellerId, productCode, targetGameId } = request.body;
        const order = await createOrder({ resellerId, productCode, targetGameId });
        return reply.code(201).send(order);
      } catch (error: any) {
        if (error.message.includes('Insufficient balance')) {
          return reply.code(400).send({ error: error.message });
        }
        if (error.message.includes('not found')) {
          return reply.code(404).send({ error: error.message });
        }
        return reply.code(500).send({ error: 'Internal server error' });
      }
    }
  );

  // Get orders by reseller
  app.get<{ Querystring: GetOrdersQuery }>(
    '/',
    async (request: FastifyRequest<{ Querystring: GetOrdersQuery }>, reply: FastifyReply) => {
      try {
        const { resellerId, limit } = request.query;
        const orders = await getResellerOrders(resellerId, limit);
        return reply.send(orders);
      } catch (error) {
        return reply.code(500).send({ error: 'Internal server error' });
      }
    }
  );

  // Get order by ID
  app.get<{ Params: GetOrderParams }>(
    '/:id',
    async (request: FastifyRequest<{ Params: GetOrderParams }>, reply: FastifyReply) => {
      try {
        const order = await getOrderDetail(request.params.id);
        if (!order) {
          return reply.code(404).send({ error: 'Order not found' });
        }
        return reply.send(order);
      } catch (error) {
        return reply.code(500).send({ error: 'Internal server error' });
      }
    }
  );
}
