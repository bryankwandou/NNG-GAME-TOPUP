import { PrismaClient, ResellerTier } from '@prisma/client';
import { CommandContext } from './command.registry';
import { PriceBreakdownService, DetailedPriceBreakdown } from '../modules/pricing/price-breakdown.service';
export type OrderFlowStep = 'CHOOSE_GAME' | 'CHOOSE_DENOMINATION' | 'ENTER_UID' | 'REVIEW' | 'CONFIRM' | 'COMPLETE';
export interface OrderFlowState {
    sessionId: string;
    userId: string;
    platform: 'discord' | 'telegram' | 'whatsapp';
    currentStep: OrderFlowStep | string;
    selectedGame?: string;
    selectedGameName?: string;
    selectedDenomination?: number;
    selectedUid?: string;
    priceDetails?: DetailedPriceBreakdown;
    expiresAt: Date;
}
export declare class OrderFlow {
    private prisma;
    private priceBreakdownService;
    constructor(prisma: PrismaClient, priceBreakdownService: PriceBreakdownService);
    startOrderFlow(context: CommandContext, userId: string): Promise<void>;
    private showGameSelector;
    promptForUid(context: CommandContext, state: OrderFlowState): Promise<void>;
    handleUidInput(context: CommandContext, state: OrderFlowState, input: string): Promise<void>;
    showPriceBreakdown(context: CommandContext, gameCode: string, denomination: number, resellerTier: ResellerTier): Promise<DetailedPriceBreakdown>;
}
//# sourceMappingURL=order.flow.d.ts.map