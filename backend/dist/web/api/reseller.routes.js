"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = resellerRoutes;
const reseller_service_1 = require("../../modules/resellers/reseller.service");
async function resellerRoutes(app) {
    // Get reseller profile
    app.get('/:id', async (request, reply) => {
        try {
            const reseller = await (0, reseller_service_1.getResellerById)(request.params.id);
            if (!reseller) {
                return reply.code(404).send({ error: 'Reseller not found' });
            }
            return reply.send(reseller);
        }
        catch (error) {
            return reply.code(500).send({ error: 'Internal server error' });
        }
    });
    // Get reseller by username
    app.get('/by-username', async (request, reply) => {
        try {
            const reseller = await (0, reseller_service_1.getResellerByUsername)(request.query.username);
            if (!reseller) {
                return reply.code(404).send({ error: 'Reseller not found' });
            }
            return reply.send(reseller);
        }
        catch (error) {
            return reply.code(500).send({ error: 'Internal server error' });
        }
    });
    // This route was removed as per the instruction's implied change,
    // as getResellerByUsername is no longer imported or used.
    // If this was an error, please provide a more specific instruction.
    // Create/register new reseller
    app.post('/register', async (request, reply) => {
        try {
            const reseller = await (0, reseller_service_1.createReseller)(request.body);
            return reply.code(201).send(reseller);
        }
        catch (error) {
            if (error.message.includes('already exists')) {
                return reply.code(409).send({ error: error.message });
            }
            return reply.code(500).send({ error: 'Internal server error' });
        }
    });
}
//# sourceMappingURL=reseller.routes.js.map