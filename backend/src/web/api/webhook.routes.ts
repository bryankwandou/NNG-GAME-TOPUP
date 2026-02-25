import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { handlePaymentWebhook } from '../../modules/deposits/deposits.service';
import { logger } from '../../config/logger';

interface WebhookBody {
  [key: string]: any;
}

export default async function webhookRoutes(app: FastifyInstance) {
  // Payment gateway webhook
  app.post<{ Body: WebhookBody }>(
    '/payment',
    async (request: FastifyRequest<{ Body: WebhookBody }>, reply: FastifyReply) => {
      try {
        logger.info('Payment webhook received', { body: request.body });

        await handlePaymentWebhook(request.body as any);

        return reply.code(200).send({ success: true });
      } catch (error: any) {
        logger.error('Payment webhook error', { error });

        if (error.message.includes('signature')) {
          return reply.code(401).send({ error: 'Invalid signature' });
        }

        return reply.code(500).send({ error: 'Internal server error' });
      }
    }
  );

  // Supplier webhook (for order status updates)
  app.post<{ Body: WebhookBody }>(
    '/supplier',
    async (request: FastifyRequest<{ Body: WebhookBody }>, reply: FastifyReply) => {
      try {
        logger.info('Supplier webhook received', { body: request.body });

        // TODO: Implement supplier webhook handling
        // Similar to payment webhook, validate signature and update order status

        return reply.code(200).send({ success: true });
      } catch (error) {
        logger.error('Supplier webhook error', { error });
        return reply.code(500).send({ error: 'Internal server error' });
      }
    }
  );
}
