"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
class EncrypterCrypto {
    constructor() {
        this.byteArray = [
            0x01, 0x23, 0x45, 0x67, 0x89, 0xAB, 0xCD, 0xEF,
            0xFE, 0xDC, 0xBA, 0x98, 0x76, 0x54, 0x32, 0x10,
            0x11, 0x22, 0x33, 0x44, 0x55, 0x66, 0x77, 0x88,
            0x99, 0xAA, 0xBB, 0xCC, 0xDD, 0xEE, 0xFF, 0x00,
        ];
        this.algorithm = 'aes-256-cbc';
        this.encoding = 'hex';
        this.ivLength = 16;
        this.key = process.env.ENCRYPTION_KEY || Buffer.from(this.byteArray);
    }
    encrypt(password) {
        const iv = crypto_1.default.randomBytes(this.ivLength);
        const cipher = crypto_1.default.createCipheriv(this.algorithm, Buffer.from(this.key), iv);
        return Buffer.concat([cipher.update(password), cipher.final(), iv])
            .toString(this.encoding);
    }
    compare(password, encryptedP) {
        const binaryData = Buffer.from(encryptedP, this.encoding);
        const iv = binaryData.slice(-this.ivLength);
        const encryptedData = binaryData.slice(0, binaryData.length - this.ivLength);
        const decipher = crypto_1.default.createDecipheriv(this.algorithm, Buffer.from(this.key), iv);
        const decoded = Buffer.concat([decipher.update(encryptedData), decipher.final()]).toString();
        return decoded === password;
    }
}
exports.default = EncrypterCrypto;
//# sourceMappingURL=EcrypteCryptor.js.map