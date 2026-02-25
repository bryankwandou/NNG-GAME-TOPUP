"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionManager = void 0;
class SessionManager {
    constructor() {
        this.sessions = new Map();
    }
    saveSession(state) {
        this.sessions.set(state.sessionId, state);
    }
    getSession(sessionId) {
        return this.sessions.get(sessionId);
    }
    deleteSession(sessionId) {
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
exports.sessionManager = new SessionManager();
setInterval(() => exports.sessionManager.cleanup(), 60000);
//# sourceMappingURL=session.manager.js.map