"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = orderRoutes;
const orders_service_1 = require("../../modules/orders/orders.service");
async function orderRoutes(app) {
    // Create new order
    app.post('/', async (request, reply) => {
        try {
            const { resellerId, productCode, targetGameId } = request.body;
            const order = await (0, orders_service_1.createOrder)({ resellerId, productCode, targetGameId });
            return reply.code(201).send(order);
        }
        catch (error) {
            if (error.message.includes('Insufficient balance')) {
                return reply.code(400).send({ error: error.message });
            }
            if (error.message.includes('not found')) {
                return reply.code(404).send({ error: error.message });
            }
            return reply.code(500).send({ error: 'Internal server error' });
        }
    });
    // Get orders by reseller
    app.get('/', async (request, reply) => {
        try {
            const { resellerId, limit } = request.query;
            const orders = await (0, orders_service_1.getResellerOrders)(resellerId, limit);
            return reply.send(orders);
        }
        catch (error) {
            return reply.code(500).send({ error: 'Internal server error' });
        }
    });
    // Get order by ID
    app.get('/:id', async (request, reply) => {
        try {
            const order = await (0, orders_service_1.getOrderDetail)(request.params.id);
            if (!order) {
                return reply.code(404).send({ error: 'Order not found' });
            }
            return reply.send(order);
        }
        catch (error) {
            return reply.code(500).send({ error: 'Internal server error' });
        }
    });
}
//# sourceMappingURL=order.routes.js.map