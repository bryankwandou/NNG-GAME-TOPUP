// src/config/database.ts
import { PrismaClient } from '@prisma/client';
import { env } from './env';
import { createLogger } from './logger';

const logger = createLogger('Database');

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  });

if (env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

prisma.$connect()
  .then(() => {
    logger.info('Database connected successfully');
  })
  .catch((err) => {
    logger.error('Database connection failed', { error: err.message });
  });

export default prisma;
