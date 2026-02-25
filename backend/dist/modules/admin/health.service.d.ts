export interface SystemHealthReport {
    database: 'CONNECTED' | 'DISCONNECTED';
    supplier: 'ONLINE' | 'OFFLINE';
    uptime: string;
    timestamp: Date;
}
export declare function getSystemHealth(): Promise<SystemHealthReport>;
//# sourceMappingURL=health.service.d.ts.map