import { PrismaClient, DepositStatus, PaymentChannel } from '@prisma/client';
export interface CreateDepositInput {
    resellerId: string;
    amount: bigint;
    paymentChannel: PaymentChannel;
    expiryMinutes?: number;
}
export interface DepositWebhookPayload {
    invoiceId: string;
    externalRef: string;
    status: 'paid' | 'failed' | 'expired';
    amount: bigint;
    paidAt?: string;
}
export declare class DepositsService {
    private prisma;
    private paymentClient;
    constructor(prismaInstance: PrismaClient);
    /**
     * Create a deposit request and generate payment instruction
     */
    createDeposit(input: CreateDepositInput): Promise<{
        id: string;
        status: import(".prisma/client").$Enums.DepositStatus;
        createdAt: Date;
        updatedAt: Date;
        resellerId: string;
        amount: bigint;
        paidAt: Date | null;
        virtualAccountNumber: string | null;
        bankName: string | null;
        expiresAt: Date;
        paymentChannel: import(".prisma/client").$Enums.PaymentChannel;
        externalPaymentId: string | null;
        paymentUrl: string | null;
        qrCodeUrl: string | null;
    }>;
    /**
     * Handle payment webhook callback from payment gateway
     */
    handlePaymentWebhook(payload: DepositWebhookPayload): Promise<{
        id: string;
        status: import(".prisma/client").$Enums.DepositStatus;
        createdAt: Date;
        updatedAt: Date;
        resellerId: string;
        amount: bigint;
        paidAt: Date | null;
        virtualAccountNumber: string | null;
        bankName: string | null;
        expiresAt: Date;
        paymentChannel: import(".prisma/client").$Enums.PaymentChannel;
        externalPaymentId: string | null;
        paymentUrl: string | null;
        qrCodeUrl: string | null;
    }>;
    /**
     * Mark deposit as paid and credit reseller balance
     */
    markDepositAsPaid(depositId: string, paidAt: Date): Promise<{
        id: string;
        status: import(".prisma/client").$Enums.DepositStatus;
        createdAt: Date;
        updatedAt: Date;
        resellerId: string;
        amount: bigint;
        paidAt: Date | null;
        virtualAccountNumber: string | null;
        bankName: string | null;
        expiresAt: Date;
        paymentChannel: import(".prisma/client").$Enums.PaymentChannel;
        externalPaymentId: string | null;
        paymentUrl: string | null;
        qrCodeUrl: string | null;
    }>;
    /**
     * Mark deposit as failed
     */
    markDepositAsFailed(depositId: string): Promise<{
        id: string;
        status: import(".prisma/client").$Enums.DepositStatus;
        createdAt: Date;
        updatedAt: Date;
        resellerId: string;
        amount: bigint;
        paidAt: Date | null;
        virtualAccountNumber: string | null;
        bankName: string | null;
        expiresAt: Date;
        paymentChannel: import(".prisma/client").$Enums.PaymentChannel;
        externalPaymentId: string | null;
        paymentUrl: string | null;
        qrCodeUrl: string | null;
    }>;
    /**
     * Mark deposit as expired
     */
    markDepositAsExpired(depositId: string): Promise<{
        id: string;
        status: import(".prisma/client").$Enums.DepositStatus;
        createdAt: Date;
        updatedAt: Date;
        resellerId: string;
        amount: bigint;
        paidAt: Date | null;
        virtualAccountNumber: string | null;
        bankName: string | null;
        expiresAt: Date;
        paymentChannel: import(".prisma/client").$Enums.PaymentChannel;
        externalPaymentId: string | null;
        paymentUrl: string | null;
        qrCodeUrl: string | null;
    }>;
    /**
     * Get deposit by ID
     */
    getDeposit(id: string): Promise<{
        id: string;
        status: import(".prisma/client").$Enums.DepositStatus;
        createdAt: Date;
        updatedAt: Date;
        resellerId: string;
        amount: bigint;
        paidAt: Date | null;
        virtualAccountNumber: string | null;
        bankName: string | null;
        expiresAt: Date;
        paymentChannel: import(".prisma/client").$Enums.PaymentChannel;
        externalPaymentId: string | null;
        paymentUrl: string | null;
        qrCodeUrl: string | null;
    }>;
    /**
     * List deposits for a reseller
     */
    listDeposits(resellerId: string, skip?: number, take?: number, status?: DepositStatus): Promise<{
        deposits: {
            id: string;
            status: import(".prisma/client").$Enums.DepositStatus;
            createdAt: Date;
            updatedAt: Date;
            resellerId: string;
            amount: bigint;
            paidAt: Date | null;
            virtualAccountNumber: string | null;
            bankName: string | null;
            expiresAt: Date;
            paymentChannel: import(".prisma/client").$Enums.PaymentChannel;
            externalPaymentId: string | null;
            paymentUrl: string | null;
            qrCodeUrl: string | null;
        }[];
        total: number;
        skip: number;
        take: number;
    }>;
    /**
     * List all deposits (admin only)
     */
    listAllDeposits(skip?: number, take?: number, filter?: {
        status?: DepositStatus;
        resellerId?: string;
    }): Promise<{
        deposits: ({
            reseller: {
                id: string;
                email: string | null;
                username: string;
                name: string;
                tier: import(".prisma/client").$Enums.ResellerTier;
                status: import(".prisma/client").$Enums.ResellerStatus;
                balance: bigint;
                monthlyTurnover: bigint;
                totalTurnoverAllTime: bigint;
                discordUserId: string | null;
                telegramUserId: string | null;
                whatsappPhoneNumber: string | null;
                referrerId: string | null;
                isVerified: boolean;
                verifiedAt: Date | null;
                metadata: import("@prisma/client/runtime/library").JsonValue | null;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: string;
            status: import(".prisma/client").$Enums.DepositStatus;
            createdAt: Date;
            updatedAt: Date;
            resellerId: string;
            amount: bigint;
            paidAt: Date | null;
            virtualAccountNumber: string | null;
            bankName: string | null;
            expiresAt: Date;
            paymentChannel: import(".prisma/client").$Enums.PaymentChannel;
            externalPaymentId: string | null;
            paymentUrl: string | null;
            qrCodeUrl: string | null;
        })[];
        total: number;
        skip: number;
        take: number;
    }>;
    /**
     * Clean up expired pending deposits
     */
    cleanupExpiredDeposits(): Promise<number>;
}
export declare const depositsService: DepositsService;
export declare const createDeposit: (input: CreateDepositInput) => Promise<{
    id: string;
    status: import(".prisma/client").$Enums.DepositStatus;
    createdAt: Date;
    updatedAt: Date;
    resellerId: string;
    amount: bigint;
    paidAt: Date | null;
    virtualAccountNumber: string | null;
    bankName: string | null;
    expiresAt: Date;
    paymentChannel: import(".prisma/client").$Enums.PaymentChannel;
    externalPaymentId: string | null;
    paymentUrl: string | null;
    qrCodeUrl: string | null;
}>;
export declare const listDeposits: (resellerId: string, skip?: number, take?: number, status?: DepositStatus) => Promise<{
    deposits: {
        id: string;
        status: import(".prisma/client").$Enums.DepositStatus;
        createdAt: Date;
        updatedAt: Date;
        resellerId: string;
        amount: bigint;
        paidAt: Date | null;
        virtualAccountNumber: string | null;
        bankName: string | null;
        expiresAt: Date;
        paymentChannel: import(".prisma/client").$Enums.PaymentChannel;
        externalPaymentId: string | null;
        paymentUrl: string | null;
        qrCodeUrl: string | null;
    }[];
    total: number;
    skip: number;
    take: number;
}>;
export declare const handlePaymentWebhook: (payload: DepositWebhookPayload) => Promise<{
    id: string;
    status: import(".prisma/client").$Enums.DepositStatus;
    createdAt: Date;
    updatedAt: Date;
    resellerId: string;
    amount: bigint;
    paidAt: Date | null;
    virtualAccountNumber: string | null;
    bankName: string | null;
    expiresAt: Date;
    paymentChannel: import(".prisma/client").$Enums.PaymentChannel;
    externalPaymentId: string | null;
    paymentUrl: string | null;
    qrCodeUrl: string | null;
}>;
//# sourceMappingURL=deposits.service.d.ts.map