import { Router, Response, Request } from 'express';
import User from '../database/models/User';
import PostRouter from './posts.routes';

const router = Router();

const postRoutes = new PostRouter();

router.use('/posts', postRoutes.router);
router.use('/user', async (req:Request, res :Response) => {
  const users = await User.findAll({
    attributes: ['id', 'name', 'email'],
    include: [
      {
        model: User,
        as: 'requested',
        attributes: ['id', 'name', 'email'],
        through: {
          attributes: [], // Para evitar trazer informações duplicadas
        },
      },
    ],
  });

  res.status(200).json(users);
});

export default router;