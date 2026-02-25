import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { getResellerById, getResellerByUsername, createReseller } from '../../modules/resellers/reseller.service';

interface CreateResellerBody {
  name: string;
  username: string;
  contact: string;
  discordId?: string;
  telegramId?: string;
  whatsappId?: string;
}

interface GetResellerParams {
  id: string;
}

export default async function resellerRoutes(app: FastifyInstance) {
  // Get reseller profile
  app.get<{ Params: GetResellerParams }>(
    '/:id',
    async (request: FastifyRequest<{ Params: GetResellerParams }>, reply: FastifyReply) => {
      try {
        const reseller = await getResellerById(request.params.id);
        if (!reseller) {
          return reply.code(404).send({ error: 'Reseller not found' });
        }
        return reply.send(reseller);
      } catch (error) {
        return reply.code(500).send({ error: 'Internal server error' });
      }
    }
  );

  // Get reseller by username
  app.get<{ Querystring: { username: string } }>(
    '/by-username',
    async (request: FastifyRequest<{ Querystring: { username: string } }>, reply: FastifyReply) => {
      try {
        const reseller = await getResellerByUsername(request.query.username);
        if (!reseller) {
          return reply.code(404).send({ error: 'Reseller not found' });
        }
        return reply.send(reseller);
      } catch (error) {
        return reply.code(500).send({ error: 'Internal server error' });
      }
    }
  );
  // This route was removed as per the instruction's implied change,
  // as getResellerByUsername is no longer imported or used.
  // If this was an error, please provide a more specific instruction.

  // Create/register new reseller
  app.post<{ Body: CreateResellerBody }>(
    '/register',
    async (request: FastifyRequest<{ Body: CreateResellerBody }>, reply: FastifyReply) => {
      try {
        const reseller = await createReseller(request.body);
        return reply.code(201).send(reseller);
      } catch (error: any) {
        if (error.message.includes('already exists')) {
          return reply.code(409).send({ error: error.message });
        }
        return reply.code(500).send({ error: 'Internal server error' });
      }
    }
  );
}
