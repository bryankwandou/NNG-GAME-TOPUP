/**
 * Order validation and idempotency checking
 * Ensures safe order processing with no double-charging
 */
import { PrismaClient } from '@prisma/client';
export interface OrderValidationResult {
    isValid: boolean;
    isDuplicate: boolean;
    existingOrderId?: string;
    errors: string[];
    warnings: string[];
}
export declare class OrderValidator {
    private prisma;
    constructor(prisma: PrismaClient);
    /**
     * Comprehensive order validation
     */
    validateOrder(data: {
        resellerId: string;
        productCode: string;
        targetGameId: string;
        resellerPrice: bigint;
        idempotencyKey?: string;
    }): Promise<OrderValidationResult>;
    /**
     * Check for potential duplicate order (same reseller, product, player within 5 min)
     */
    private checkForDuplicateOrder;
    /**
     * Basic player ID validation
     */
    private isValidPlayerId;
}
//# sourceMappingURL=order.validator.d.ts.map