import { PrismaClient } from '@prisma/client';
export declare class MarginWatchdog {
    private prisma;
    constructor(prisma: PrismaClient);
    /**
     * Scans all active products to ensure our current retail prices
     * are not generating a predatory margin due to sudden supplier cost drops.
     */
    detectPredatoryMargins(): Promise<void>;
}
//# sourceMappingURL=margin.watchdog.d.ts.map