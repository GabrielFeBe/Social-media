import { Response, Request, Router } from 'express';
import PostsCommentsController from '../controller/PostsComments.controller';
import PostsCommentsService from '../services/PostsComments.service';
import PostsComments from '../models/posts/PostsComments.model';

const model = new PostsComments();

const service = new PostsCommentsService(model);

const router = Router();

const controller = new PostsCommentsController(service);

router.post('/', async (req:Request, res:Response) => controller.create(req, res));

router.get('/:id', async (req:Request, res:Response) => controller.findByPostId(req, res));

router.delete('/:id', async (req:Request, res:Response) => controller.delete(req, res));

router.patch('/:id', async (req:Request, res:Response) => controller.update(req, res));

export default router;