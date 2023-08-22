import jwt from 'jsonwebtoken';
import { JwtPayload, TokenGenerator, UserDefault } from '../interface/TokenGenerator';

export default class TokenJwt implements TokenGenerator {
  private JWT = jwt;

  private jwtSecret = process.env.JWT_SECRET || 'segurodms';

  private jwtExpiration = process.env.JWT_EXPIRATION || (60 * 60 * 24 * 7);

  generate(user: UserDefault): string {
    const token = this.JWT.sign(
      { id: user.id, email: user.email }, 
      this.jwtSecret,
      { expiresIn: this.jwtExpiration },
    );
    return token;
  }

  verifyToken(token: string): JwtPayload {
    const data = this.JWT.verify(token, this.jwtSecret) as JwtPayload;
    return data;
  }
}