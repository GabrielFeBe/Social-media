import { Router } from 'express';
import PostRouter from './posts.routes';

const router = Router();

const postRoutes = new PostRouter();

router.use('/posts', postRoutes.router);

export default router;