"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = productRoutes;
const products_service_1 = require("../../modules/products/products.service");
const pricing_service_1 = require("../../modules/pricing/pricing.service");
const reseller_service_1 = require("../../modules/resellers/reseller.service");
async function productRoutes(app) {
    // Get all products
    app.get('/', async (_request, reply) => {
        try {
            const products = await (0, products_service_1.getAllProducts)();
            return reply.send(products);
        }
        catch (error) {
            return reply.code(500).send({ error: 'Internal server error' });
        }
    });
    // Get product by code
    app.get('/:code', async (request, reply) => {
        try {
            const product = await (0, products_service_1.getProductByCode)(request.params.code);
            if (!product) {
                return reply.code(404).send({ error: 'Product not found' });
            }
            return reply.send(product);
        }
        catch (error) {
            return reply.code(500).send({ error: 'Internal server error' });
        }
    });
    // Get products by game
    app.get('/by-game', async (request, reply) => {
        try {
            const products = await (0, products_service_1.getProductsByGame)(request.query.game);
            return reply.send(products);
        }
        catch (error) {
            return reply.code(500).send({ error: 'Internal server error' });
        }
    });
    // Get price for specific reseller
    app.get('/price', async (request, reply) => {
        try {
            const { productCode, resellerId } = request.query;
            const reseller = await reseller_service_1.resellerService.getReseller(resellerId);
            if (!reseller) {
                return reply.code(404).send({ error: 'Reseller not found' });
            }
            const price = await (0, pricing_service_1.getResellerPrice)(productCode, reseller.tier);
            return reply.send({ productCode, price: price.toString() });
        }
        catch (error) {
            return reply.code(400).send({ error: error.message });
        }
    });
}
//# sourceMappingURL=product.routes.js.map