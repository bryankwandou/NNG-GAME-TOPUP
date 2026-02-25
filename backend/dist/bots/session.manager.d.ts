import { OrderFlowState } from './order.flow';
declare class SessionManager {
    private sessions;
    saveSession(state: OrderFlowState): void;
    getSession(sessionId: string): OrderFlowState | undefined;
    deleteSession(sessionId: string): void;
    cleanup(): void;
}
export declare const sessionManager: SessionManager;
export {};
//# sourceMappingURL=session.manager.d.ts.map