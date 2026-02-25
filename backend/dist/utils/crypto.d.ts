export declare class CryptoUtils {
    /**
     * Generate HMAC signature for webhook validation
     */
    static generateSignature(payload: any, secret: string): string;
    /**
     * Verify HMAC signature
     */
    static verifySignature(payload: any, signature: string, secret: string): boolean;
    /**
     * Hash password
     */
    static hashPassword(password: string): Promise<string>;
    /**
     * Compare password with hash
     */
    static comparePassword(password: string, hash: string): Promise<boolean>;
    /**
     * Generate random token
     */
    static generateToken(length?: number): string;
    /**
     * Generate idempotency key
     */
    static generateIdempotencyKey(): string;
}
//# sourceMappingURL=crypto.d.ts.map