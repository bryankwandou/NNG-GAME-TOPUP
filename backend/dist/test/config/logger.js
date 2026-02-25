"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLogger = exports.logger = void 0;
// src/config/logger.ts
const pino_1 = __importDefault(require("pino"));
const env_1 = require("./env");
const pinoConfig = {
    level: env_1.env.LOG_LEVEL,
    timestamp: pino_1.default.stdTimeFunctions.isoTime,
};
const transport = env_1.env.NODE_ENV === 'production'
    ? undefined
    : {
        target: 'pino-pretty',
        options: {
            colorize: true,
            ignore: 'pid,hostname',
            singleLine: false,
        },
    };
exports.logger = (0, pino_1.default)(pinoConfig, transport ? pino_1.default.transport(transport) : undefined);
// Child loggers for different modules
const createLogger = (module) => exports.logger.child({ module });
exports.createLogger = createLogger;
