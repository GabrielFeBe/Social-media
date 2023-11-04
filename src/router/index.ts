import { Router } from 'express';
import FriendsRouter from './friends.routes';
import PostRouter from './posts.routes';
import UserRouter from './user.routes';
import CommentsRouter from './comments.routes';
import TokenMiddleware from '../middleware/TokenMiddkeware';
import LikesPostsRouter from './likes.posts.routes';

const router = Router();

router.use('/comments', CommentsRouter);
router.use('/posts', TokenMiddleware.decoder, PostRouter);
router.use('/friends', TokenMiddleware.decoder, FriendsRouter);
router.use('/likes/posts', LikesPostsRouter);
router.use('/user', UserRouter);

export default router;