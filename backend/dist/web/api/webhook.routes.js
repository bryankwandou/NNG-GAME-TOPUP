"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = webhookRoutes;
const deposits_service_1 = require("../../modules/deposits/deposits.service");
const logger_1 = require("../../config/logger");
async function webhookRoutes(app) {
    // Payment gateway webhook
    app.post('/payment', async (request, reply) => {
        try {
            logger_1.logger.info('Payment webhook received', { body: request.body });
            await (0, deposits_service_1.handlePaymentWebhook)(request.body);
            return reply.code(200).send({ success: true });
        }
        catch (error) {
            logger_1.logger.error('Payment webhook error', { error });
            if (error.message.includes('signature')) {
                return reply.code(401).send({ error: 'Invalid signature' });
            }
            return reply.code(500).send({ error: 'Internal server error' });
        }
    });
    // Supplier webhook (for order status updates)
    app.post('/supplier', async (request, reply) => {
        try {
            logger_1.logger.info('Supplier webhook received', { body: request.body });
            // TODO: Implement supplier webhook handling
            // Similar to payment webhook, validate signature and update order status
            return reply.code(200).send({ success: true });
        }
        catch (error) {
            logger_1.logger.error('Supplier webhook error', { error });
            return reply.code(500).send({ error: 'Internal server error' });
        }
    });
}
//# sourceMappingURL=webhook.routes.js.map