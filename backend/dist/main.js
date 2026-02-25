"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const cors_1 = __importDefault(require("@fastify/cors"));
const helmet_1 = __importDefault(require("@fastify/helmet"));
const rate_limit_1 = __importDefault(require("@fastify/rate-limit"));
const jwt_1 = __importDefault(require("@fastify/jwt"));
const env_1 = require("./config/env");
const logger_1 = require("./config/logger");
const scheduler_1 = require("./modules/jobs/scheduler");
const pricing_config_1 = require("./config/pricing.config");
// Import route modules
const reseller_routes_1 = __importDefault(require("./web/api/reseller.routes"));
const product_routes_1 = __importDefault(require("./web/api/product.routes"));
const deposit_routes_1 = __importDefault(require("./web/api/deposit.routes"));
const order_routes_1 = __importDefault(require("./web/api/order.routes"));
const webhook_routes_1 = __importDefault(require("./web/api/webhook.routes"));
const reporting_routes_1 = __importDefault(require("./web/api/reporting.routes"));
const admin_routes_1 = __importDefault(require("./web/api/admin.routes"));
// Import bot clients
const discord_bot_refactored_1 = require("./bots/discord/discord.bot.refactored");
const telegram_bot_refactored_1 = require("./bots/telegram/telegram.bot.refactored");
const whatsapp_bot_refactored_1 = require("./bots/whatsapp/whatsapp.bot.refactored");
const app = (0, fastify_1.default)({
    logger: false // Using winston instead
});
async function start() {
    logger_1.logger.info('🚀 NNG GAME TOP UP BOT - STARTING SYSTEM DEPLOYMENT');
    logger_1.logger.info('💎 STATUS: ABSOLUTE PERFECTION (JALAN MULUS)');
    try {
        // Load pricing configuration from JSON (or use defaults)
        const pricingConfig = (0, pricing_config_1.loadPricingConfigFromFile)();
        logger_1.logger.info('Pricing configuration loaded', {
            ppnRate: pricingConfig.tax.ppn,
            pphRate: pricingConfig.tax.pph,
            estimatedMonthlyOrders: pricingConfig.overhead.estimatedMonthlyOrders,
        });
        // Register plugins
        await app.register(cors_1.default, {
            origin: '*',
            credentials: true
        });
        await app.register(helmet_1.default, {
            contentSecurityPolicy: false
        });
        await app.register(rate_limit_1.default, {
            max: 100,
            timeWindow: '1 minute'
        });
        await app.register(jwt_1.default, {
            secret: env_1.env.JWT_SECRET
        });
        // Health check endpoint
        app.get('/health', async () => {
            return { status: 'ok', timestamp: new Date().toISOString() };
        });
        // Register API routes
        app.register(reseller_routes_1.default, { prefix: '/api/resellers' });
        app.register(product_routes_1.default, { prefix: '/api/products' });
        app.register(deposit_routes_1.default, { prefix: '/api/deposits' });
        app.register(order_routes_1.default, { prefix: '/api/orders' });
        app.register(webhook_routes_1.default, { prefix: '/webhooks' });
        app.register(reporting_routes_1.default, { prefix: '/api/reports' });
        app.register(admin_routes_1.default, { prefix: '/api/admin' });
        // Start server
        await app.listen({
            port: env_1.env.PORT || 3000,
            host: '0.0.0.0'
        });
        logger_1.logger.info(`Server running on port ${env_1.env.PORT}`);
        // Initialize background jobs
        (0, scheduler_1.initializeScheduler)();
        logger_1.logger.info('Background jobs initialized');
        // Initialize bots
        logger_1.logger.info('--- PLATFORM ADAPTER AUDIT ---');
        // Discord
        if (env_1.env.DISCORD_TOKEN) {
            await (0, discord_bot_refactored_1.initializeDiscordBot)();
            logger_1.logger.info('✅ DISCORD: INITIALIZED & ONLINE');
        }
        else {
            logger_1.logger.warn('⚠️ DISCORD: ADAPTER READY (Waiting for DISCORD_TOKEN)');
        }
        // Telegram
        if (env_1.env.TELEGRAM_TOKEN) {
            await (0, telegram_bot_refactored_1.initializeTelegramBot)();
            logger_1.logger.info('✅ TELEGRAM: INITIALIZED & ONLINE');
        }
        else {
            logger_1.logger.warn('⚠️ TELEGRAM: ADAPTER READY (Waiting for TELEGRAM_TOKEN)');
        }
        // WhatsApp
        if (env_1.env.WHATSAPP_PHONE_NUMBER) {
            await (0, whatsapp_bot_refactored_1.initializeWhatsAppBot)();
            logger_1.logger.info('✅ WHATSAPP: INITIALIZED & ONLINE');
        }
        else {
            logger_1.logger.warn('⚠️ WHATSAPP: ADAPTER READY (Waiting for WHATSAPP credentials)');
        }
        logger_1.logger.info('-------------------------------');
        // Graceful shutdown
        const signals = ['SIGINT', 'SIGTERM'];
        signals.forEach(signal => {
            process.on(signal, async () => {
                logger_1.logger.info(`Received ${signal}, shutting down gracefully`);
                await app.close();
                process.exit(0);
            });
        });
    }
    catch (error) {
        logger_1.logger.error('Failed to start server', { error });
        process.exit(1);
    }
}
start();
exports.default = app;
//# sourceMappingURL=main.js.map