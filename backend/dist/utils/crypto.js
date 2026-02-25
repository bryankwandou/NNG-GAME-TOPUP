"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CryptoUtils = void 0;
// src/utils/crypto.ts
const crypto_1 = __importDefault(require("crypto"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class CryptoUtils {
    /**
     * Generate HMAC signature for webhook validation
     */
    static generateSignature(payload, secret) {
        const payloadStr = JSON.stringify(payload);
        return crypto_1.default.createHmac('sha256', secret).update(payloadStr).digest('hex');
    }
    /**
     * Verify HMAC signature
     */
    static verifySignature(payload, signature, secret) {
        const expectedSignature = this.generateSignature(payload, secret);
        return crypto_1.default.timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSignature));
    }
    /**
     * Hash password
     */
    static async hashPassword(password) {
        const saltRounds = 10;
        return bcryptjs_1.default.hash(password, saltRounds);
    }
    /**
     * Compare password with hash
     */
    static async comparePassword(password, hash) {
        return bcryptjs_1.default.compare(password, hash);
    }
    /**
     * Generate random token
     */
    static generateToken(length = 32) {
        return crypto_1.default.randomBytes(length).toString('hex');
    }
    /**
     * Generate idempotency key
     */
    static generateIdempotencyKey() {
        return crypto_1.default.randomUUID();
    }
}
exports.CryptoUtils = CryptoUtils;
//# sourceMappingURL=crypto.js.map