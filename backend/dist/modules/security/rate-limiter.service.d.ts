/**
 * Simple Adaptive Rate Limiter for bot commands.
 * Protects against spam while allowing normal multi-step flow usage.
 */
declare class RateLimiterService {
    private limits;
    private WINDOW_MS;
    private MAX_REQUESTS;
    /**
     * Check if a user is rate limited.
     * "Adaptive" logic: Admins get infinite, Resellers get more.
     */
    isRateLimited(userId: string, tier?: string): boolean;
    /**
     * Clear old entries periodically to prevent memory leaks
     */
    cleanup(): void;
}
export declare const rateLimiter: RateLimiterService;
export {};
//# sourceMappingURL=rate-limiter.service.d.ts.map