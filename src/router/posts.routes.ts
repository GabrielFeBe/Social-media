import { Response, Request, Router } from 'express';
import PostController from '../controller/Post.controller';
// import Post from '../database/models/Post';
// import User from '../database/models/User';
import PostModel from '../models/posts/Post.model';
import PostService from '../services/Post.service';

const router = Router();

const model = new PostModel();

const service = new PostService(model);

const controller = new PostController(service);

// class PostRouter {
//   router = Router();

//   constructor() {
//     this.inicializatingRoutes();
//   }

//   getPosts() {
//     this.router.get('/', async (req:Request, res :Response) => {
//       // const response = await Post.findAll({ include: [{ model: User, as: 'user' }] });
//       // res.status(200).json(response);
//       this.controller.getAllPosts(req, res);
//     });
//   }

//   getPostId() {
//     this.router.get('/:id', async (req:Request, res:Response) => {
//       this.controller.getPostId(req, res);
//     });
//   }

//   deletePostId() {
//     this.router.delete('/:id', async (req:Request, res:Response) => {
//       this.controller.deletePostId(req, res);
//     });
//   }

//   createPost() {
//     this.router.post('/', async (req:Request, res:Response) => {
//       this.controller.createPost(req, res);
//     });
//   }

//   inicializatingRoutes() {
//     this.createPost();
//     this.deletePostId();
//     this.getPostId();
//     this.getPosts();
//   }
// }

router.get('/', async (req:Request, res :Response) => 
  // const response = await Post.findAll({ include: [{ model: User, as: 'user' }] });
  // res.status(200).json(response);
  controller.getAllPosts(req, res));

router.get('/:id', async (req:Request, res:Response) => controller.getPostId(req, res));

router.get('/user/:id', async (req:Request, res:Response) => controller.findPostByUserId(req, res));

router.delete('/:id', async (req:Request, res:Response) => controller.deletePostId(req, res));

router.post('/', async (req:Request, res:Response) => controller.createPost(req, res));

export default router;