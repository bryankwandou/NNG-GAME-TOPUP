// src/bots/session.manager.ts
import { OrderFlowState } from './order.flow';

class SessionManager {
    private sessions = new Map<string, OrderFlowState>();

    saveSession(state: OrderFlowState) {
        this.sessions.set(state.sessionId, state);
    }

    getSession(sessionId: string): OrderFlowState | undefined {
        return this.sessions.get(sessionId);
    }

    deleteSession(sessionId: string) {
        this.sessions.delete(sessionId);
    }

    // Cleanup expired
    cleanup() {
        const now = Date.now();
        for (const [id, state] of this.sessions.entries()) {
            if (state.expiresAt.getTime() < now) {
                this.sessions.delete(id);
            }
        }
    }
}

export const sessionManager = new SessionManager();
setInterval(() => sessionManager.cleanup(), 60000);
