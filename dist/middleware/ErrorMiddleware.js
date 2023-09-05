"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorMiddleware {
    static handler(err, req, res, _next) {
        console.error('Erro capturado pelo middleware de erro:', err); // Adicione este log
        return res.status(500).json({ message: err.message });
    }
}
exports.default = ErrorMiddleware;
//# sourceMappingURL=ErrorMiddleware.js.map