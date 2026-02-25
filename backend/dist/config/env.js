"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
// src/config/env.ts
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.env = {
    // App
    PORT: parseInt(process.env.PORT || '3000', 10),
    NODE_ENV: (process.env.NODE_ENV || 'development'),
    API_BASE_URL: process.env.API_BASE_URL || 'http://localhost:3000',
    // Database
    DATABASE_URL: process.env.DATABASE_URL || '',
    // JWT
    JWT_SECRET: process.env.JWT_SECRET || 'dev-secret-key',
    JWT_EXPIRY: process.env.JWT_EXPIRY || '7d',
    // Admin
    ADMIN_USERNAME: process.env.ADMIN_USERNAME || 'admin',
    ADMIN_PASSWORD_HASH: process.env.ADMIN_PASSWORD_HASH || '',
    // Discord
    DISCORD_TOKEN: process.env.DISCORD_TOKEN || '',
    DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID || '',
    DISCORD_GUILD_ID: process.env.DISCORD_GUILD_ID || '',
    // Telegram
    TELEGRAM_TOKEN: process.env.TELEGRAM_TOKEN || '',
    // WhatsApp
    WHATSAPP_ACCOUNT_SID: process.env.WHATSAPP_ACCOUNT_SID || '',
    WHATSAPP_AUTH_TOKEN: process.env.WHATSAPP_AUTH_TOKEN || '',
    WHATSAPP_PHONE_NUMBER: process.env.WHATSAPP_PHONE_NUMBER || '',
    // Supplier
    SUPPLIER_API_BASE_URL: process.env.SUPPLIER_API_BASE_URL || '',
    SUPPLIER_API_KEY: process.env.SUPPLIER_API_KEY || '',
    SUPPLIER_API_SECRET: process.env.SUPPLIER_API_SECRET || '',
    // Payment Gateway
    PAYMENT_GATEWAY_API_BASE_URL: process.env.PAYMENT_GATEWAY_API_BASE_URL || '',
    PAYMENT_GATEWAY_KEY: process.env.PAYMENT_GATEWAY_KEY || '',
    PAYMENT_GATEWAY_SECRET: process.env.PAYMENT_GATEWAY_SECRET || '',
    PAYMENT_GATEWAY_MERCHANT_ID: process.env.PAYMENT_GATEWAY_MERCHANT_ID || '',
    // Logging
    LOG_LEVEL: process.env.LOG_LEVEL || 'info',
    // Features
    ENABLE_AUTO_REFUND: process.env.ENABLE_AUTO_REFUND !== 'false',
    ENABLE_TIER_CALCULATION: process.env.ENABLE_TIER_CALCULATION !== 'false',
    TIER_CALCULATION_DAY_OF_MONTH: parseInt(process.env.TIER_CALCULATION_DAY_OF_MONTH || '1', 10),
    // Tier thresholds
    TIER_BRONZE_MIN: BigInt(process.env.TIER_BRONZE_MIN || '0'),
    TIER_BRONZE_MAX: BigInt(process.env.TIER_BRONZE_MAX || '5000000'),
    TIER_SILVER_MIN: BigInt(process.env.TIER_SILVER_MIN || '5000000'),
    TIER_SILVER_MAX: BigInt(process.env.TIER_SILVER_MAX || '20000000'),
    TIER_GOLD_MIN: BigInt(process.env.TIER_GOLD_MIN || '20000000'),
    TIER_GOLD_MAX: BigInt(process.env.TIER_GOLD_MAX || '999999999999'),
    // Rate limiting
    RATE_LIMIT_WINDOW_MS: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '60000', 10),
    RATE_LIMIT_MAX_REQUESTS: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '100', 10),
    // Webhook retry
    WEBHOOK_RETRY_ATTEMPTS: parseInt(process.env.WEBHOOK_RETRY_ATTEMPTS || '3', 10),
    WEBHOOK_RETRY_DELAY_MS: parseInt(process.env.WEBHOOK_RETRY_DELAY_MS || '1000', 10),
};
//# sourceMappingURL=env.js.map