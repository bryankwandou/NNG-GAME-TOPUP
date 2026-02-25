// src/integrations/payment/payment.client.ts
import axios, { AxiosInstance } from 'axios';
import { env } from '../../config/env';
import { createLogger } from '../../config/logger';
import { CryptoUtils } from '../../utils/crypto';

const logger = createLogger('PaymentClient');

export interface CreateInvoicePayload {
  externalRef: string; // Our deposit ID for idempotency
  amount: bigint;
  description: string;
  customerEmail?: string;
  customerPhone?: string;
  expiryMinutes?: number;
}

export interface CreateInvoiceResponse {
  success: boolean;
  invoiceId: string; // Payment gateway's invoice ID
  url?: string;
  qrCode?: string;
  virtualAccountNumber?: string;
  bankName?: string;
  expiresAt?: Date;
  message?: string;
}

export interface WebhookPayload {
  invoiceId: string;
  externalRef: string;
  status: 'paid' | 'failed' | 'expired';
  amount: bigint;
  paidAt?: string;
  signature?: string;
  [key: string]: any;
}

/**
 * PaymentClient is an abstraction layer for payment gateway operations.
 * This encapsulates all payment-related logic, signatures, and API calls.
 * 
 * In production, you would implement this for your actual payment provider
 * (Midtrans, DOKU, Xendit, Stripe, etc.). The interface stays the same.
 */
export class PaymentClient {
  private axios: AxiosInstance;
  private merchantId: string;
  private apiKey: string;
  private apiSecret: string;
  private baseUrl: string;

  constructor() {
    this.merchantId = env.PAYMENT_GATEWAY_MERCHANT_ID;
    this.apiKey = env.PAYMENT_GATEWAY_KEY;
    this.apiSecret = env.PAYMENT_GATEWAY_SECRET;
    this.baseUrl = env.PAYMENT_GATEWAY_API_BASE_URL;

    this.axios = axios.create({
      baseURL: this.baseUrl,
      timeout: 30000,
    });
  }

  /**
   * Generate signature for webhook validation
   */
  private generateSignature(payload: any): string {
    return CryptoUtils.generateSignature(payload, this.apiSecret);
  }

  /**
   * Verify webhook signature
   */
  verifyWebhookSignature(payload: any, signature: string): boolean {
    try {
      return CryptoUtils.verifySignature(payload, signature, this.apiSecret);
    } catch (error) {
      logger.error('Webhook signature verification failed', { error });
      return false;
    }
  }

  /**
   * Create an invoice/payment request
   */
  async createInvoice(payload: CreateInvoicePayload): Promise<CreateInvoiceResponse> {
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
    } catch (error) {
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
  async checkPaymentStatus(invoiceId: string): Promise<{
    status: 'paid' | 'pending' | 'failed' | 'expired' | 'unknown';
    data?: any;
  }> {
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
    } catch (error) {
      logger.error(`Failed to check payment status: ${invoiceId}`, { error });
      return { status: 'unknown' };
    }
  }

  /**
   * Cancel an invoice
   */
  async cancelInvoice(invoiceId: string): Promise<{ success: boolean; message?: string }> {
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
    } catch (error) {
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
  async validateConnection(): Promise<boolean> {
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
    } catch (error) {
      logger.error(`Payment gateway connection validation failed`, { error });
      return false;
    }
  }
}
