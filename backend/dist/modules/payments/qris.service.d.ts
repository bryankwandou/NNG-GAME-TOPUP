export interface QRISPayload {
    merchantName: string;
    merchantCity: string;
    amount: number;
    transactionId: string;
}
export declare class QRISService {
    /**
     * Generates a QRIS string (EMVCo format)
     * Note: This is a simplified implementation of Static/Dynamic QRIS payload generation.
     */
    generateQRIS(payload: QRISPayload): string;
    /**
     * CRC-16 CCITT calculation
     */
    private calculateCRC16;
}
//# sourceMappingURL=qris.service.d.ts.map