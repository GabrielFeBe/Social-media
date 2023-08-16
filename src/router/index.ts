import { Router } from 'express';
import PostRouter from './posts.routes';
import UserRouter from './user.routes';

const router = Router();

const postRoutes = new PostRouter();
const userRoutes = new UserRouter();

router.use('/posts', postRoutes.router);
router.use('/user', userRoutes.router);

export default router;