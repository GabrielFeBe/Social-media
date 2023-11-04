import { Response, Request, Router } from 'express';
import LikesPostsController from '../controller/LikesPost.controller';

import LikesPostsService from '../services/Likes.Posts.service';
import LikesPosts from '../models/posts/Likes.Posts';

const model = new LikesPosts();

const service = new LikesPostsService(model);

const router = Router();

const controller = new LikesPostsController(service);

router.post('/', async (req:Request, res:Response) => controller.createLikePost(req, res));

router.delete('/:id', async (req:Request, res:Response) => controller.deleteLikePost(req, res));

export default router;