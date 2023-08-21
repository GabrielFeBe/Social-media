import crypto from 'crypto';
import Encrypter from '../interface/Encrypter';

export default class EncrypterCrypto implements Encrypter {
  private algorithm = 'aes-256-cbc';

  private encoding = 'hex';

  private ivLength = 16;

  private key = process.env.ENCRYPTION_KEY || crypto.randomBytes(32);
  
  encrypt(password: string): string {
    const iv = crypto.randomBytes(this.ivLength);
    const cipher = crypto.createCipheriv(this.algorithm, Buffer.from(this.key), iv);
    return Buffer.concat([cipher.update(password), cipher.final(), iv])
      .toString(this.encoding as BufferEncoding);
  }

  compare(encyptedP: string, password:string): boolean {
    const binaryData = Buffer.from(encyptedP, this.encoding as BufferEncoding);
    const iv = binaryData.slice(-this.ivLength);
    const encryptedData = binaryData.slice(0, binaryData.length - this.ivLength);
    const decipher = crypto.createDecipheriv(this.algorithm, Buffer.from(this.key), iv);
    const decoded = Buffer.concat([decipher.update(encryptedData), decipher.final()]).toString();
    return decoded === password;
  }
}