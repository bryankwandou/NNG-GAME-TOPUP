import { PrismaClient, ResellerTier, ResellerStatus } from '@prisma/client';
export interface CreateResellerInput {
    username: string;
    name: string;
    email?: string;
    discordUserId?: string;
    telegramUserId?: string;
    whatsappPhoneNumber?: string;
}
export interface UpdateResellerInput {
    name?: string;
    email?: string;
    tier?: ResellerTier;
    status?: ResellerStatus;
}
export declare class ResellerService {
    private prisma;
    constructor(prisma: PrismaClient);
    /**
     * Create a new reseller account
     */
    createReseller(input: CreateResellerInput): Promise<{
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
    }>;
    /**
     * Get reseller by ID
     */
    getReseller(id: string): Promise<{
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
    }>;
    /**
     * Get reseller by username
     */
    getResellerByUsername(username: string): Promise<{
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
    }>;
    /**
     * Get reseller by Discord ID
     */
    getResellerByDiscordId(discordUserId: string): Promise<{
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
    } | null>;
    /**
     * Get reseller by Telegram ID
     */
    getResellerByTelegramId(telegramUserId: string): Promise<{
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
    } | null>;
    /**
     * Get reseller by WhatsApp number
     */
    getResellerByWhatsAppNumber(phoneNumber: string): Promise<{
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
    } | null>;
    /**
     * Update reseller
     */
    updateReseller(id: string, input: UpdateResellerInput): Promise<{
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
    }>;
    /**
     * Link platform account to reseller (Discord, Telegram, WhatsApp)
     */
    linkPlatformAccount(resellerId: string, platform: 'discord' | 'telegram' | 'whatsapp', account: string): Promise<{
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
    }>;
    /**
     * Get all resellers (paginated)
     */
    listResellers(skip?: number, take?: number, filter?: {
        tier?: ResellerTier;
        status?: ResellerStatus;
    }): Promise<{
        resellers: {
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
        }[];
        total: number;
        skip: number;
        take: number;
    }>;
    /**
     * Determine tier based on monthly turnover
     */
    determineTier(monthlyTurnover: bigint): ResellerTier;
    /**
     * Calculate and update tier for a reseller
     */
    recalculateTier(resellerId: string): Promise<{
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
    }>;
    /**
     * Reset monthly turnover (typically called on first day of month)
     */
    resetMonthlyTurnover(resellerId: string): Promise<{
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
    }>;
    /**
     * Add to monthly and all-time turnover
     */
    addTurnover(resellerId: string, amount: bigint): Promise<{
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
    }>;
    updateBalance(resellerId: string, amount: bigint, operation: 'add' | 'subtract'): Promise<{
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
    }>;
}
export declare const resellerService: ResellerService;
export declare const getResellerById: (id: string) => Promise<{
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
}>;
export declare const getResellerByUsername: (username: string) => Promise<{
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
}>;
export declare const createReseller: (input: CreateResellerInput) => Promise<{
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
}>;
export declare const updateBalance: (id: string, amount: bigint, operation: "add" | "subtract") => Promise<{
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
}>;
//# sourceMappingURL=reseller.service.d.ts.map