"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateResellerTiers = updateResellerTiers;
exports.resetMonthlyTurnover = resetMonthlyTurnover;
const client_1 = require("@prisma/client");
const logger_1 = require("../../config/logger");
const prisma = new client_1.PrismaClient();
// Tier thresholds in IDR
const TIER_THRESHOLDS = {
    BRONZE: 0,
    SILVER: 5000000, // 5M IDR
    GOLD: 20000000, // 20M IDR
    AGENCY: 50000000 // 50M IDR (or manually assigned)
};
/**
 * Determine tier based on monthly turnover
 */
function calculateTier(turnover, currentTier) {
    // Agency tier is manually assigned, never auto-downgrade
    if (currentTier === 'AGENCY') {
        return 'AGENCY';
    }
    if (turnover >= TIER_THRESHOLDS.GOLD) {
        return 'GOLD';
    }
    else if (turnover >= TIER_THRESHOLDS.SILVER) {
        return 'SILVER';
    }
    else {
        return 'BRONZE';
    }
}
/**
 * Update reseller tiers based on monthly turnover
 * This job should run daily or monthly
 */
async function updateResellerTiers() {
    try {
        logger_1.logger.info('Starting tier update job');
        const resellers = await prisma.reseller.findMany({
            where: {
                status: 'ACTIVE'
            }
        });
        let updated = 0;
        let unchanged = 0;
        for (const reseller of resellers) {
            const turnover = Number(reseller.monthlyTurnover);
            const newTierStr = calculateTier(turnover, reseller.tier);
            const newTier = newTierStr;
            if (newTier !== reseller.tier) {
                await prisma.reseller.update({
                    where: { id: reseller.id },
                    data: { tier: newTier }
                });
                await prisma.auditLog.create({
                    data: {
                        resellerId: reseller.id,
                        action: 'TIER_UPGRADE',
                        entityType: 'RESELLER',
                        entityId: reseller.id,
                        notes: `Upgraded to ${newTier} based on turnover ${turnover}`
                    }
                });
                logger_1.logger.info('Tier updated', {
                    resellerId: reseller.id,
                    oldTier: reseller.tier,
                    newTier
                });
                updated++;
            }
            else {
                unchanged++;
            }
        }
        logger_1.logger.info('Tier update job completed', { updated, unchanged });
    }
    catch (error) {
        logger_1.logger.error('Error updating reseller tiers', { error });
        throw error;
    }
}
/**
 * Reset monthly turnover at the start of each month
 * This job should run on the 1st of every month
 */
async function resetMonthlyTurnover() {
    try {
        logger_1.logger.info('Starting monthly turnover reset job');
        const result = await prisma.reseller.updateMany({
            data: {
                monthlyTurnover: 0
            }
        });
        await prisma.auditLog.create({
            data: {
                action: 'MONTHLY_TURNOVER_RESET',
                entityType: 'SYSTEM',
                entityId: 'SYSTEM',
                notes: `Monthly turnover reset for ${result.count} resellers`
            }
        });
        logger_1.logger.info('Monthly turnover reset completed', { count: result.count });
    }
    catch (error) {
        logger_1.logger.error('Error resetting monthly turnover', { error });
        throw error;
    }
}
//# sourceMappingURL=tier.jobs.js.map