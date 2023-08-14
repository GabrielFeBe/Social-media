import { Router } from 'express';
import postRouter from './posts.routes';

const router = Router();

router.use('/posts', postRouter);

export default router;