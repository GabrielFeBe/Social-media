import { NextFunction, Request, Response } from 'express';
import User from '../database/models/User';
// Estou usando o Model diretamente para deixar a classe como estatica
// não sei se é a melhor opção mas caso troque a tecnologia de ORM tera que alterar a importação e logica nesse arquivo
import TokenJwt from '../lib/TokenJWT';

const tokenGenerator = new TokenJwt();

export default class TokenMiddleware {
  static async decoder(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    console.log(authorization);
    const verify = tokenGenerator.verifyToken(authorization as string);
    if (!verify) throw new Error('Token invalido');
    const lookingForUser = await User.findByPk(verify.id);
    if (!lookingForUser) throw new Error('User invalido');
    req.body.userId = verify.id;
    return next();
  }
}