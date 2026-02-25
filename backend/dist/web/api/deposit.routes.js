"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = depositRoutes;
const deposits_service_1 = require("../../modules/deposits/deposits.service");
async function depositRoutes(app) {
    // Create new deposit
    app.post('/', async (request, reply) => {
        try {
            const { resellerId, amount, paymentChannel } = request.body;
            if (amount < 10000) {
                return reply.code(400).send({ error: 'Minimum deposit is 10,000 IDR' });
            }
            const result = await (0, deposits_service_1.createDeposit)({
                resellerId,
                amount: BigInt(amount),
                paymentChannel: paymentChannel
            });
            return reply.code(201).send(result);
        }
        catch (error) {
            return reply.code(400).send({ error: error.message });
        }
    });
    // Get deposits by reseller
    app.get('/', async (request, reply) => {
        try {
            const { resellerId, limit } = request.query;
            const { deposits } = await (0, deposits_service_1.listDeposits)(resellerId, 0, limit);
            return reply.send(deposits);
        }
        catch (error) {
            return reply.code(500).send({ error: 'Internal server error' });
        }
    });
}
//# sourceMappingURL=deposit.routes.js.map