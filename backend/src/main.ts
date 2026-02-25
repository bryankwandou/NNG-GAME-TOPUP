declare const process: any;
import Fastify, { FastifyInstance } from 'fastify';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import rateLimit from '@fastify/rate-limit';
import jwt from '@fastify/jwt';
import { env } from './config/env';
import { logger } from './config/logger';
import { initializeScheduler } from './modules/jobs/scheduler';
import { loadPricingConfigFromFile } from './config/pricing.config';

// Import route modules
import resellerRoutes from './web/api/reseller.routes';
import productRoutes from './web/api/product.routes';
import depositRoutes from './web/api/deposit.routes';
import orderRoutes from './web/api/order.routes';
import webhookRoutes from './web/api/webhook.routes';
import reportingRoutes from './web/api/reporting.routes';
import adminRoutes from './web/api/admin.routes';

// Import bot clients
import { initializeDiscordBot } from './bots/discord/discord.bot.refactored';
import { initializeTelegramBot } from './bots/telegram/telegram.bot.refactored';
import { initializeWhatsAppBot } from './bots/whatsapp/whatsapp.bot.refactored';

const app: FastifyInstance = Fastify({
  logger: false // Using winston instead
});

async function start() {
  logger.info('🚀 NNG GAME TOP UP BOT - STARTING SYSTEM DEPLOYMENT');
  logger.info('💎 STATUS: ABSOLUTE PERFECTION (JALAN MULUS)');
  try {
    // Load pricing configuration from JSON (or use defaults)
    const pricingConfig = loadPricingConfigFromFile();
    logger.info('Pricing configuration loaded', {
      ppnRate: pricingConfig.tax.ppn,
      pphRate: pricingConfig.tax.pph,
      estimatedMonthlyOrders: pricingConfig.overhead.estimatedMonthlyOrders,
    });

    // Register plugins
    await app.register(cors, {
      origin: '*',
      credentials: true
    });

    await app.register(helmet, {
      contentSecurityPolicy: false
    });

    await app.register(rateLimit, {
      max: 100,
      timeWindow: '1 minute'
    });

    await app.register(jwt, {
      secret: env.JWT_SECRET
    });

    // Health check endpoint
    app.get('/health', async () => {
      return { status: 'ok', timestamp: new Date().toISOString() };
    });

    // Register API routes
    app.register(resellerRoutes, { prefix: '/api/resellers' });
    app.register(productRoutes, { prefix: '/api/products' });
    app.register(depositRoutes, { prefix: '/api/deposits' });
    app.register(orderRoutes, { prefix: '/api/orders' });
    app.register(webhookRoutes, { prefix: '/webhooks' });
    app.register(reportingRoutes, { prefix: '/api/reports' });
    app.register(adminRoutes, { prefix: '/api/admin' });

    // Start server
    await app.listen({
      port: env.PORT || 3000,
      host: '0.0.0.0'
    });

    logger.info(`Server running on port ${env.PORT}`);

    // Initialize background jobs
    initializeScheduler();
    logger.info('Background jobs initialized');

    // Initialize bots
    logger.info('--- PLATFORM ADAPTER AUDIT ---');

    // Discord
    if (env.DISCORD_TOKEN) {
      await initializeDiscordBot();
      logger.info('✅ DISCORD: INITIALIZED & ONLINE');
    } else {
      logger.warn('⚠️ DISCORD: ADAPTER READY (Waiting for DISCORD_TOKEN)');
    }

    // Telegram
    if (env.TELEGRAM_TOKEN) {
      await initializeTelegramBot();
      logger.info('✅ TELEGRAM: INITIALIZED & ONLINE');
    } else {
      logger.warn('⚠️ TELEGRAM: ADAPTER READY (Waiting for TELEGRAM_TOKEN)');
    }

    // WhatsApp
    if (env.WHATSAPP_PHONE_NUMBER) {
      await initializeWhatsAppBot();
      logger.info('✅ WHATSAPP: INITIALIZED & ONLINE');
    } else {
      logger.warn('⚠️ WHATSAPP: ADAPTER READY (Waiting for WHATSAPP credentials)');
    }
    logger.info('-------------------------------');

    // Graceful shutdown
    const signals = ['SIGINT', 'SIGTERM'];
    signals.forEach(signal => {
      process.on(signal, async () => {
        logger.info(`Received ${signal}, shutting down gracefully`);
        await app.close();
        process.exit(0);
      });
    });

  } catch (error) {
    logger.error('Failed to start server', { error });
    process.exit(1);
  }
}

start();

export default app;
