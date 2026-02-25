import { PrismaClient } from '@prisma/client';
import { CommandContext } from './command.registry';
import { PriceBreakdownService } from '../modules/pricing/price-breakdown.service';
export declare class PriceFlow {
    private prisma;
    private priceBreakdownService;
    constructor(prisma: PrismaClient, priceBreakdownService: PriceBreakdownService);
    handlePriceCommand(ctx: CommandContext): Promise<void>;
}
//# sourceMappingURL=price.flow.d.ts.map