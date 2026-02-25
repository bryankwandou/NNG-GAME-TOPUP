import { PrismaClient } from '@prisma/client';
import { CommandContext } from './command.registry';
export declare class DashboardFlow {
    private prisma;
    constructor(prisma: PrismaClient);
    handleDashboardCommand(ctx: CommandContext): Promise<void>;
}
//# sourceMappingURL=dashboard.flow.d.ts.map