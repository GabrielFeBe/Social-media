import express, { Request, Response } from 'express';
import Post from './database/models/Post';
import User from './database/models/User';

const app = express();

app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
  res.status(200).send('Aplicação está funcionando!');
});

app.get('/teste', async (_req: Request, res: Response) => {
  const response = await Post.findAll({ include: [{ model: User, as: 'user' }] });
  res.status(200).json(response);
});

export default app;