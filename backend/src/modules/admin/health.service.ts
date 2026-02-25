// src/modules/admin/health.service.ts
import { PrismaClient } from '@prisma/client';
import { supplierClient } from '../../integrations/supplier/supplier.client';
import { createLogger } from '../../config/logger';

const prisma = new PrismaClient();
const logger = createLogger('HealthService');

export interface SystemHealthReport {
    database: 'CONNECTED' | 'DISCONNECTED';
    supplier: 'ONLINE' | 'OFFLINE';
    uptime: string;
    timestamp: Date;
}

export async function getSystemHealth(): Promise<SystemHealthReport> {
    let dbStatus: 'CONNECTED' | 'DISCONNECTED' = 'CONNECTED';
    let supplierStatus: 'ONLINE' | 'OFFLINE' = 'ONLINE';

    try {
        await prisma.$queryRaw`SELECT 1`;
    } catch (err) {
        dbStatus = 'DISCONNECTED';
        logger.error('Database health check failed', err);
    }

    try {
        const isSupplierOk = await supplierClient.validateConnection();
        supplierStatus = isSupplierOk ? 'ONLINE' : 'OFFLINE';
    } catch (err) {
        supplierStatus = 'OFFLINE';
        logger.error('Supplier health check failed', err);
    }

    return {
        database: dbStatus,
        supplier: supplierStatus,
        uptime: process.uptime().toFixed(0) + 's',
        timestamp: new Date(),
    };
}
