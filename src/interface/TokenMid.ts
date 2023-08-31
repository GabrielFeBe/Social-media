import { NextFunction, Request, Response } from 'express';

export default interface TokenMid {
  decoder(req: Request, res: Response, next: NextFunction):NextFunction
}