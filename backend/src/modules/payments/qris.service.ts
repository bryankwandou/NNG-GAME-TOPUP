
import { createLogger } from '../../config/logger';

const logger = createLogger('QRISService');

export interface QRISPayload {
    merchantName: string;
    merchantCity: string;
    amount: number;
    transactionId: string;
}

export class QRISService {
    /**
     * Generates a QRIS string (EMVCo format)
     * Note: This is a simplified implementation of Static/Dynamic QRIS payload generation.
     */
    generateQRIS(payload: QRISPayload): string {
        const { merchantName, merchantCity, amount, transactionId } = payload;

        // Standard QRIS Tag IDs
        const tags = {
            pbi: '000201',
            pointOfInitiation: '010212', // Dynamic
            merchantAccount: '26002000000000000000000010303ID', // Example Merchant ID
            merchantCategory: '52045812',
            currency: '5303360',
            amount: `54${amount.toString().length.toString().padStart(2, '0')}${amount}`,
            country: '5802ID',
            merchantName: `59${merchantName.length.toString().padStart(2, '0')}${merchantName}`,
            merchantCity: `60${merchantCity.length.toString().padStart(2, '0')}${merchantCity}`,
            postalCode: '610512345',
            additionalData: `62${(transactionId.length + 4).toString().padStart(2, '0')}01${transactionId.length.toString().padStart(2, '0')}${transactionId}`,
            crc: '6304'
        };

        let basePayload = Object.values(tags).join('');
        const crc = this.calculateCRC16(basePayload);

        const finalQRIS = basePayload + crc;
        logger.info('QRIS Generated', { transactionId, amount });
        return finalQRIS;
    }

    /**
     * CRC-16 CCITT calculation
     */
    private calculateCRC16(data: string): string {
        let crc = 0xFFFF;
        for (let i = 0; i < data.length; i++) {
            crc ^= data.charCodeAt(i) << 8;
            for (let j = 0; j < 8; j++) {
                if (crc & 0x8000) {
                    crc = (crc << 1) ^ 0x1021;
                } else {
                    crc = crc << 1;
                }
            }
        }
        return (crc & 0xFFFF).toString(16).toUpperCase().padStart(4, '0');
    }
}
