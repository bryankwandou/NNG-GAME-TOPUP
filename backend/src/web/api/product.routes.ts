import { FastifyInstance } from 'fastify';
import { getAllProducts, getProductByCode, getProductsByGame } from '../../modules/products/products.service';
import { getResellerPrice } from '../../modules/pricing/pricing.service';
import { resellerService } from '../../modules/resellers/reseller.service';

interface GetPriceQuery {
  productCode: string;
  resellerId: string;
}

export default async function productRoutes(app: FastifyInstance) {
  // Get all products
  app.get('/', async (_request, reply) => {
    try {
      const products = await getAllProducts();
      return reply.send(products);
    } catch (error) {
      return reply.code(500).send({ error: 'Internal server error' });
    }
  });

  // Get product by code
  app.get<{ Params: { code: string } }>(
    '/:code',
    async (request, reply) => {
      try {
        const product = await getProductByCode(request.params.code);
        if (!product) {
          return reply.code(404).send({ error: 'Product not found' });
        }
        return reply.send(product);
      } catch (error) {
        return reply.code(500).send({ error: 'Internal server error' });
      }
    }
  );

  // Get products by game
  app.get<{ Querystring: { game: string } }>(
    '/by-game',
    async (request, reply) => {
      try {
        const products = await getProductsByGame(request.query.game);
        return reply.send(products);
      } catch (error) {
        return reply.code(500).send({ error: 'Internal server error' });
      }
    }
  );

  // Get price for specific reseller
  app.get<{ Querystring: GetPriceQuery }>(
    '/price',
    async (request, reply) => {
      try {
        const { productCode, resellerId } = request.query;
        const reseller = await resellerService.getReseller(resellerId);
        if (!reseller) {
          return reply.code(404).send({ error: 'Reseller not found' });
        }
        const price = await getResellerPrice(productCode, reseller.tier);
        return reply.send({ productCode, price: price.toString() });
      } catch (error: any) {
        return reply.code(400).send({ error: error.message });
      }
    }
  );
}
