import { NextFunction, Request, Response } from 'express';

export default class ErrorMiddleware {
  static handler(err: Error, req: Request, res: Response, _next: NextFunction) {
    console.error('Erro capturado pelo middleware de erro:', err); // Adicione este log
    return res.status(500).json({ message: err.message });
  }
}
