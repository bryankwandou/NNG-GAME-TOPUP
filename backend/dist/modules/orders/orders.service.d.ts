import { Order } from '@prisma/client';
/**
 * Custom error class for validation failures
 */
export declare class ValidationError extends Error {
    errors: string[];
    constructor(message: string, errors?: string[]);
}
/**
 * Custom error class for duplicate order detection
 */
export declare class DuplicateOrderError extends Error {
    duplicateOrderId?: string | undefined;
    constructor(message: string, duplicateOrderId?: string | undefined);
}
export interface CreateOrderInput {
    resellerId: string;
    productCode: string;
    targetGameId: string;
    idempotencyKey?: string;
}
/**
 * Create an order (top-up purchase)
 * 1. Validate order with comprehensive checks (idempotency, duplicate detection, player ID format)
 * 2. Validate product and pricing
 * 3. Check reseller balance
 * 4. Atomically deduct balance from reseller
 * 5. Call supplier to initiate top-up
 * 6. Handle supplier response (success/pending/failed)
 * 7. Auto-schedule retry on transient failures
 */
export declare function createOrder(input: CreateOrderInput): Promise<Order>;
/**
 * Poll supplier to check pending orders
 * Called by background job every 1-5 minutes
 */
export declare function pollPendingOrders(): Promise<void>;
/**
 * Get order details
 */
export declare function getOrderDetail(orderId: string): Promise<Order>;
/**
 * Get reseller's order history
 */
export declare function getResellerOrders(resellerId: string, limit?: number): Promise<({
    product: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        costPrice: bigint;
        code: string;
        gameName: string;
        displayName: string;
        description: string | null;
        baseMarkup: bigint;
        active: boolean;
        maxStock: number | null;
        currentStock: number | null;
    };
} & {
    id: string;
    status: import(".prisma/client").$Enums.OrderStatus;
    metadata: import("@prisma/client/runtime/library").JsonValue | null;
    createdAt: Date;
    updatedAt: Date;
    resellerId: string;
    externalRef: string | null;
    productId: string;
    targetGameId: string;
    quantity: number;
    costPrice: bigint;
    resellerPrice: bigint;
    ppnAmount: bigint;
    marginAmount: bigint;
    profit: bigint;
    failureReason: string | null;
    supplierOrderData: string | null;
    idempotencyKey: string;
    processedAt: Date | null;
    completedAt: Date | null;
})[]>;
//# sourceMappingURL=orders.service.d.ts.map