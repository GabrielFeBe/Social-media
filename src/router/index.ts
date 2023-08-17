import { Router } from 'express';
import FriendsRouter from './friends.routes';
import PostRouter from './posts.routes';
import UserRouter from './user.routes';

const router = Router();

const postRoutes = new PostRouter();
const userRoutes = new UserRouter();
const friendsRoutes = new FriendsRouter();

router.use('/posts', postRoutes.router);
router.use('/user', userRoutes.router);
router.use('/friends', friendsRoutes.router);

// router.get('/friends', async (req:Request, res :Response) => {
//   const response = await friend.findAllUserFriends();
 
//   return res.status(200).json(response);
// });

export default router;