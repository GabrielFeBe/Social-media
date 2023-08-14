import { Response, Request, Router } from 'express';
import Post from '../database/models/Post';
import User from '../database/models/User';

const router = Router();

router.get('/', async (req:Request, res :Response) => {
  const response = await Post.findAll({ include: [{ model: User, as: 'user' }] });
  res.status(200).json(response);
});

export default router;