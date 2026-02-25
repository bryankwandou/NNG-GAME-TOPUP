// src/integrations/supplier/supplier.client.ts
import axios, { AxiosInstance, AxiosError } from 'axios';
import { env } from '../../config/env';
import { createLogger } from '../../config/logger';
import { CryptoUtils } from '../../utils/crypto';

const logger = createLogger('SupplierClient');

export interface SupplierOrderPayload {
  productCode: string;
  targetGameId: string;
  quantity: number;
  clientReference: string; // Our internal order ID for idempotency
}

export interface SupplierOrderResponse {
  success: boolean;
  status: 'success' | 'processing' | 'failed';
  externalRef: string; // Supplier's order ID
  message?: string;
  data?: any;
}

export interface SupplierStatusResponse {
  status: 'success' | 'processing' | 'failed' | 'unknown';
  externalRef: string;
  data?: any;
}

/**
 * SupplierClient is an abstraction layer that handles all supplier API calls.
 * This encapsulates authentication, retries, error handling, and payload signing.
 * 
 * In production, you would swap this with your actual supplier's API details.
 * The interface remains the same, only the implementation details change.
 */
export class SupplierClient {
  private axios: AxiosInstance;
  private apiKey: string;
  private apiSecret: string;
  private baseUrl: string;

  constructor() {
    this.apiKey = env.SUPPLIER_API_KEY;
    this.apiSecret = env.SUPPLIER_API_SECRET;
    this.baseUrl = env.SUPPLIER_API_BASE_URL;

    // Create axios instance with defaults
    this.axios = axios.create({
      baseURL: this.baseUrl,
      timeout: 30000,
    });

    // Add retry interceptor
    this.setupRetryInterceptor();
  }

  /**
   * Generate signature for request authentication
   */
  private generateSignature(payload: any, timestamp: string): string {
    const data = `${JSON.stringify(payload)}${timestamp}${this.apiSecret}`;
    return CryptoUtils.generateSignature(data, this.apiSecret);
  }

  /**
   * Setup retry interceptor for transient failures
   */
  private setupRetryInterceptor() {
    this.axios.interceptors.response.use(
      (response) => response,
      async (error: AxiosError) => {
        const config = error.config;
        if (!config) return Promise.reject(error);

        // Don't retry if we've already retried
        const retryCount = (config as any).__retryCount || 0;
        if (retryCount >= env.WEBHOOK_RETRY_ATTEMPTS) {
          return Promise.reject(error);
        }

        // Only retry on transient errors
        if (error.response?.status && error.response.status >= 500) {
          (config as any).__retryCount = retryCount + 1;
          const delay = env.WEBHOOK_RETRY_DELAY_MS * Math.pow(2, retryCount); // Exponential backoff
          await new Promise((resolve) => setTimeout(resolve, delay));
          return this.axios(config);
        }

        return Promise.reject(error);
      }
    );
  }

  /**
   * Create an order with the supplier (top-up request)
   */
  async createOrder(payload: SupplierOrderPayload): Promise<SupplierOrderResponse> {
    try {
      const timestamp = new Date().toISOString();
      const signature = this.generateSignature(payload, timestamp);

      logger.info(`Creating order with supplier: ${payload.productCode} for ${payload.targetGameId}`);

      const response = await this.axios.post('/orders', payload, {
        headers: {
          'X-API-Key': this.apiKey,
          'X-Signature': signature,
          'X-Timestamp': timestamp,
          'Content-Type': 'application/json',
        },
      });

      const data = response.data;

      logger.info(`Order created: ${data.externalRef}`);

      return {
        success: true,
        status: data.status || 'processing',
        externalRef: data.externalRef,
        data: data,
      };
    } catch (error) {
      logger.error(`Failed to create order`, { error, payload });

      return {
        success: false,
        status: 'failed',
        externalRef: '',
        message: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  /**
   * Check status of an order
   */
  async checkOrderStatus(externalRef: string): Promise<SupplierStatusResponse> {
    try {
      logger.debug(`Checking order status: ${externalRef}`);

      const timestamp = new Date().toISOString();
      const signature = this.generateSignature({ externalRef }, timestamp);

      const response = await this.axios.get(`/orders/${externalRef}`, {
        headers: {
          'X-API-Key': this.apiKey,
          'X-Signature': signature,
          'X-Timestamp': timestamp,
        },
      });

      const data = response.data;

      return {
        status: data.status || 'unknown',
        externalRef: data.externalRef || externalRef,
        data: data,
      };
    } catch (error) {
      logger.error(`Failed to check order status: ${externalRef}`, { error });

      return {
        status: 'unknown',
        externalRef,
      };
    }
  }

  /**
   * Cancel an order
   */
  async cancelOrder(externalRef: string): Promise<{ success: boolean; message?: string }> {
    try {
      logger.info(`Canceling order: ${externalRef}`);

      const timestamp = new Date().toISOString();
      const signature = this.generateSignature({ externalRef }, timestamp);

      await this.axios.post(`/orders/${externalRef}/cancel`, {}, {
        headers: {
          'X-API-Key': this.apiKey,
          'X-Signature': signature,
          'X-Timestamp': timestamp,
        },
      });

      logger.info(`Order canceled: ${externalRef}`);
      return { success: true };
    } catch (error) {
      logger.error(`Failed to cancel order: ${externalRef}`, { error });
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Failed to cancel order',
      };
    }
  }

  /**
   * Get available products from supplier
   */
  async getAvailableProducts() {
    try {
      logger.debug(`Fetching available products from supplier`);

      const timestamp = new Date().toISOString();
      const signature = this.generateSignature({}, timestamp);

      const response = await this.axios.get('/products', {
        headers: {
          'X-API-Key': this.apiKey,
          'X-Signature': signature,
          'X-Timestamp': timestamp,
        },
      });

      return response.data;
    } catch (error) {
      logger.error(`Failed to fetch products from supplier`, { error });
      throw error;
    }
  }

  /**
   * Validate supplier credentials
   */
  async validateConnection(): Promise<boolean> {
    try {
      logger.info(`Validating supplier connection`);

      const timestamp = new Date().toISOString();
      const signature = this.generateSignature({ test: true }, timestamp);

      const response = await this.axios.get('/health', {
        headers: {
          'X-API-Key': this.apiKey,
          'X-Signature': signature,
          'X-Timestamp': timestamp,
        },
      });

      logger.info(`Supplier connection valid`);
      return response.status === 200;
    } catch (error) {
      logger.error(`Supplier connection validation failed`, { error });
      return false;
    }
  }
}

// Export singleton instance for unified access
export const supplierClient = new SupplierClient();
