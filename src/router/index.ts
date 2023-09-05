import { Router } from 'express';
import FriendsRouter from './friends.routes';
import PostRouter from './posts.routes';
import UserRouter from './user.routes';
import CommentsRouter from './comments.routes';
import TokenMiddleware from '../middleware/TokenMiddkeware';

const router = Router();

// const userRoutes = new UserRouter();

router.use('/comments', CommentsRouter);
router.use('/posts', TokenMiddleware.decoder, PostRouter);
// router.use('/user', userRoutes.router);
router.use('/friends', TokenMiddleware.decoder, FriendsRouter);
router.use('/user', UserRouter);

export default router;