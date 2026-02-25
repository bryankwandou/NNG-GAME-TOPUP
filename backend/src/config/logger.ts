// src/config/logger.ts
import pino from 'pino';
import { env } from './env';

const pinoConfig = {
  level: env.LOG_LEVEL,
  timestamp: pino.stdTimeFunctions.isoTime,
};

const transport =
  env.NODE_ENV === 'production'
    ? undefined
    : {
        target: 'pino-pretty',
        options: {
          colorize: true,
          ignore: 'pid,hostname',
          singleLine: false,
        },
      };

export const logger = pino(pinoConfig, transport ? pino.transport(transport) : undefined);

// Child loggers for different modules
export const createLogger = (module: string) => logger.child({ module });
