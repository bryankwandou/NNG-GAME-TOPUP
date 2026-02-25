"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentClient = void 0;
// src/integrations/payment/payment.client.ts
const axios_1 = __importDefault(require("axios"));
const env_1 = require("../../config/env");
const logger_1 = require("../../config/logger");
const crypto_1 = require("../../utils/crypto");
const logger = (0, logger_1.createLogger)('PaymentClient');
/**
 * PaymentClient is an abstraction layer for payment gateway operations.
 * This encapsulates all payment-related logic, signatures, and API calls.
 *
 * In production, you would implement this for your actual payment provider
 * (Midtrans, DOKU, Xendit, Stripe, etc.). The interface stays the same.
 */
class PaymentClient {
    constructor() {
        this.merchantId = env_1.env.PAYMENT_GATEWAY_MERCHANT_ID;
        this.apiKey = env_1.env.PAYMENT_GATEWAY_KEY;
        this.apiSecret = env_1.env.PAYMENT_GATEWAY_SECRET;
        this.baseUrl = env_1.env.PAYMENT_GATEWAY_API_BASE_URL;
        this.axios = axios_1.default.create({
            baseURL: this.baseUrl,
            timeout: 30000,
        });
    }
    /**
     * Generate signature for webhook validation
     */
    generateSignature(payload) {
        return crypto_1.CryptoUtils.generateSignature(payload, this.apiSecret);
    }
    /**
     * Verify webhook signature
     */
    verifyWebhookSignature(payload, signature) {
        try {
            return crypto_1.CryptoUtils.verifySignature(payload, signature, this.apiSecret);
        }
        catch (error) {
            logger.error('Webhook signature verification failed', { error });
            return false;
        }
    }
    /**
     * Create an invoice/payment request
     */
    async createInvoice(payload) {
        try {
            logger.info(`Creating payment invoice: ${payload.externalRef} for ${payload.amount.toString()}`);
            const timestamp = new Date().toISOString();
            const requestPayload = {
                merchantId: this.merchantId,
                externalRef: payload.externalRef,
                amount: Number(payload.amount),
                description: payload.description,
                customerEmail: payload.customerEmail,
                customerPhone: payload.customerPhone,
                expiryMinutes: payload.expiryMinutes || 1440, // 24 hours default
                timestamp,
            };
            const signature = this.generateSignature(requestPayload);
            const response = await this.axios.post('/invoices', requestPayload, {
                headers: {
                    'X-API-Key': this.apiKey,
                    'X-Signature': signature,
                    'Content-Type': 'application/json',
                },
            });
            const data = response.data;
            logger.info(`Invoice created: ${data.invoiceId}`);
            return {
                success: true,
                invoiceId: data.invoiceId,
                url: data.paymentUrl,
                qrCode: data.qrCode,
                virtualAccountNumber: data.virtualAccountNumber,
                bankName: data.bankName,
                expiresAt: data.expiresAt ? new Date(data.expiresAt) : undefined,
            };
        }
        catch (error) {
            logger.error(`Failed to create invoice`, { error, payload });
            return {
                success: false,
                invoiceId: '',
                message: error instanceof Error ? error.message : 'Failed to create invoice',
            };
        }
    }
    /**
     * Check payment status
     */
    async checkPaymentStatus(invoiceId) {
        try {
            logger.debug(`Checking payment status: ${invoiceId}`);
            const timestamp = new Date().toISOString();
            const payload = { merchantId: this.merchantId, timestamp };
            const signature = this.generateSignature(payload);
            const response = await this.axios.get(`/invoices/${invoiceId}`, {
                headers: {
                    'X-API-Key': this.apiKey,
                    'X-Signature': signature,
                },
            });
            const data = response.data;
            return {
                status: data.status || 'unknown',
                data: data,
            };
        }
        catch (error) {
            logger.error(`Failed to check payment status: ${invoiceId}`, { error });
            return { status: 'unknown' };
        }
    }
    /**
     * Cancel an invoice
     */
    async cancelInvoice(invoiceId) {
        try {
            logger.info(`Canceling invoice: ${invoiceId}`);
            const timestamp = new Date().toISOString();
            const payload = { merchantId: this.merchantId, timestamp };
            const signature = this.generateSignature(payload);
            await this.axios.post(`/invoices/${invoiceId}/cancel`, {}, {
                headers: {
                    'X-API-Key': this.apiKey,
                    'X-Signature': signature,
                },
            });
            logger.info(`Invoice canceled: ${invoiceId}`);
            return { success: true };
        }
        catch (error) {
            logger.error(`Failed to cancel invoice: ${invoiceId}`, { error });
            return {
                success: false,
                message: error instanceof Error ? error.message : 'Failed to cancel invoice',
            };
        }
    }
    /**
     * Validate payment gateway connection
     */
    async validateConnection() {
        try {
            logger.info(`Validating payment gateway connection`);
            const timestamp = new Date().toISOString();
            const payload = { merchantId: this.merchantId, timestamp };
            const signature = this.generateSignature(payload);
            const response = await this.axios.get('/health', {
                headers: {
                    'X-API-Key': this.apiKey,
                    'X-Signature': signature,
                },
            });
            logger.info(`Payment gateway connection valid`);
            return response.status === 200;
        }
        catch (error) {
            logger.error(`Payment gateway connection validation failed`, { error });
            return false;
        }
    }
}
exports.PaymentClient = PaymentClient;
//# sourceMappingURL=payment.client.js.map