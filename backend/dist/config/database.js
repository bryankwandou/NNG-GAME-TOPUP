"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
// src/config/database.ts
const client_1 = require("@prisma/client");
const env_1 = require("./env");
const logger_1 = require("./logger");
const logger = (0, logger_1.createLogger)('Database');
const globalForPrisma = global;
exports.prisma = globalForPrisma.prisma ||
    new client_1.PrismaClient({
        log: env_1.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
    });
if (env_1.env.NODE_ENV !== 'production')
    globalForPrisma.prisma = exports.prisma;
exports.prisma.$connect()
    .then(() => {
    logger.info('Database connected successfully');
})
    .catch((err) => {
    logger.error('Database connection failed', { error: err.message });
});
exports.default = exports.prisma;
//# sourceMappingURL=database.js.map