/**
 * Guided Order Message Templates
 * Platform-agnostic templates for the multi-step order flow
 * Render with price breakdown and fairness indicators
 */
import { DetailedPriceBreakdown, FairnessRating } from '../modules/pricing/price-breakdown.service';
export interface OrderPreviewData {
    gameName: string;
    denomination: string;
    playerId: string;
    breakdown: DetailedPriceBreakdown;
    estimatedTime: string;
}
/**
 * Get fairness emoji for rating
 */
export declare function getFairnessEmoji(rating: FairnessRating): string;
/**
 * Format order preview message (plain text for all platforms)
 */
export declare function formatOrderPreview(data: OrderPreviewData): string;
/**
 * Format order preview for Discord (with embed)
 */
export declare function formatOrderPreviewDiscord(data: OrderPreviewData): any;
/**
 * Format order preview for Telegram (with inline keyboard)
 */
export declare function formatOrderPreviewTelegram(data: OrderPreviewData): any;
/**
 * Format order preview for WhatsApp (plain text with quick replies)
 */
export declare function formatOrderPreviewWhatsApp(data: OrderPreviewData): string;
/**
 * Format order completion message
 */
export declare function formatOrderComplete(orderId: string, status: 'completed' | 'pending'): string;
/**
 * Format order failed message (with refund info)
 */
export declare function formatOrderFailed(orderId: string, reason: string, refundAmount: number): string;
/**
 * Format game selection message
 */
export declare function formatGameSelection(games: Array<{
    code: string;
    name: string;
    icon?: string;
}>): string;
/**
 * Format denomination selection message
 */
export declare function formatDenominationSelection(gameName: string, denominations: Array<{
    value: string;
    price: number;
    tier: string;
}>): string;
/**
 * Format System Health Report (Admin only)
 */
export declare function formatSystemHealth(data: {
    database: string;
    supplier: string;
    uptime: string;
    timestamp: Date;
}): string;
/**
 * Format health for Discord Embed
 */
export declare function formatSystemHealthDiscord(data: any): any;
/**
 * Format Sustainability Report
 */
export declare function formatSustainabilityReport(data: any): string;
/**
 * Format Sustainability Report for Discord Embed
 */
export declare function formatSustainabilityReportDiscord(data: any): any;
//# sourceMappingURL=order-message-templates.d.ts.map