// src/modules/security/rate-limiter.service.ts
import { createLogger } from '../../config/logger';

const logger = createLogger('RateLimiter');

interface RateLimitInfo {
    count: number;
    resetAt: number;
}

/**
 * Simple Adaptive Rate Limiter for bot commands.
 * Protects against spam while allowing normal multi-step flow usage.
 */
class RateLimiterService {
    private limits: Map<string, RateLimitInfo> = new Map();

    // Basic window: 1 minute
    private WINDOW_MS = 60000;

    // Default: 10 commands per minute for normal users
    private MAX_REQUESTS = 10;

    /**
     * Check if a user is rate limited.
     * "Adaptive" logic: Admins get infinite, Resellers get more.
     */
    isRateLimited(userId: string, tier: string = 'customer'): boolean {
        const now = Date.now();
        const limit = this.limits.get(userId);

        // Admin bypass
        if (tier === 'admin') return false;

        // Adaptive limits based on tier
        let max = this.MAX_REQUESTS;
        if (tier === 'gold' || tier === 'agency') max = 30; // High tier resellers get more headroom

        if (!limit || now > limit.resetAt) {
            this.limits.set(userId, { count: 1, resetAt: now + this.WINDOW_MS });
            return false;
        }

        if (limit.count >= max) {
            logger.warn(`Rate limit triggered for user ${userId} (${tier})`);
            return true;
        }

        limit.count++;
        return false;
    }

    /**
     * Clear old entries periodically to prevent memory leaks
     */
    cleanup() {
        const now = Date.now();
        for (const [userId, limit] of this.limits.entries()) {
            if (now > limit.resetAt) {
                this.limits.delete(userId);
            }
        }
    }
}

export const rateLimiter = new RateLimiterService();

// Auto-cleanup every 5 minutes
setInterval(() => rateLimiter.cleanup(), 300000);
