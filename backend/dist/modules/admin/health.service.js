"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSystemHealth = getSystemHealth;
// src/modules/admin/health.service.ts
const client_1 = require("@prisma/client");
const supplier_client_1 = require("../../integrations/supplier/supplier.client");
const logger_1 = require("../../config/logger");
const prisma = new client_1.PrismaClient();
const logger = (0, logger_1.createLogger)('HealthService');
async function getSystemHealth() {
    let dbStatus = 'CONNECTED';
    let supplierStatus = 'ONLINE';
    try {
        await prisma.$queryRaw `SELECT 1`;
    }
    catch (err) {
        dbStatus = 'DISCONNECTED';
        logger.error('Database health check failed', err);
    }
    try {
        const isSupplierOk = await supplier_client_1.supplierClient.validateConnection();
        supplierStatus = isSupplierOk ? 'ONLINE' : 'OFFLINE';
    }
    catch (err) {
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
//# sourceMappingURL=health.service.js.map