export declare class AppError extends Error {
    statusCode: number;
    message: string;
    details?: any | undefined;
    constructor(statusCode: number, message: string, details?: any | undefined);
}
export declare class ValidationError extends AppError {
    constructor(message: string, details?: any);
}
export declare class NotFoundError extends AppError {
    constructor(message: string, details?: any);
}
export declare class UnauthorizedError extends AppError {
    constructor(message?: string, details?: any);
}
export declare class ForbiddenError extends AppError {
    constructor(message?: string, details?: any);
}
export declare class ConflictError extends AppError {
    constructor(message: string, details?: any);
}
export declare class InternalServerError extends AppError {
    constructor(message?: string, details?: any);
}
//# sourceMappingURL=errors.d.ts.map