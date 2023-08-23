"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class TokenJwt {
    constructor() {
        this.JWT = jsonwebtoken_1.default;
        this.jwtSecret = process.env.JWT_SECRET || 'segurodms';
        this.jwtExpiration = process.env.JWT_EXPIRATION || (60 * 60 * 24 * 7);
    }
    generate(user) {
        const token = this.JWT.sign({ id: user.id, email: user.email }, this.jwtSecret, { expiresIn: this.jwtExpiration });
        return token;
    }
    verifyToken(token) {
        const data = this.JWT.verify(token, this.jwtSecret);
        return data;
    }
}
exports.default = TokenJwt;
//# sourceMappingURL=TokenJWT.js.map