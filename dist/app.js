"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const cors_1 = __importDefault(require("cors"));
const router_1 = __importDefault(require("./router"));
const ErrorMiddleware_1 = __importDefault(require("./middleware/ErrorMiddleware"));
// import path from 'path';
// const uploadsDirectory = path.resolve(__dirname, '../uploads');
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)());
        // this.app.use('/uploads', express.static(uploadsDirectory));
        this.routes();
        this.app.get('/', (_req, res) => res.status(200).send('social media'));
        this.app.use(ErrorMiddleware_1.default.handler);
    }
    routes() {
        this.app.use(router_1.default);
    }
    start(PORT) {
        this.app.listen({
            port: PORT,
            host: '0.0.0.0',
        }, () => console.log(`Server is running on PORT: ${PORT}`));
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map