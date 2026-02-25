// src/utils/crypto.ts
import crypto from 'crypto';
import bcryptjs from 'bcryptjs';

export class CryptoUtils {
  /**
   * Generate HMAC signature for webhook validation
   */
  static generateSignature(payload: any, secret: string): string {
    const payloadStr = JSON.stringify(payload);
    return crypto.createHmac('sha256', secret).update(payloadStr).digest('hex');
  }

  /**
   * Verify HMAC signature
   */
  static verifySignature(payload: any, signature: string, secret: string): boolean {
    const expectedSignature = this.generateSignature(payload, secret);
    return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSignature));
  }

  /**
   * Hash password
   */
  static async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    return bcryptjs.hash(password, saltRounds);
  }

  /**
   * Compare password with hash
   */
  static async comparePassword(password: string, hash: string): Promise<boolean> {
    return bcryptjs.compare(password, hash);
  }

  /**
   * Generate random token
   */
  static generateToken(length: number = 32): string {
    return crypto.randomBytes(length).toString('hex');
  }

  /**
   * Generate idempotency key
   */
  static generateIdempotencyKey(): string {
    return crypto.randomUUID();
  }
}
