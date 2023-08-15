import { Request, Response } from 'express';
import IPostController from '../interface/IPostController';

export default class PostController implements IPostController {
  private service: any;

  getPostId(req: Request, res: Response): Promise<Response> {

  }

  createPost(req: Request, res: Response): Promise<Response> {
    throw new Error('Method not implemented.');
  }

  deletePostId(req: Request, res: Response): Promise<Response> {
    throw new Error('Method not implemented.');
  }

  getAllPosts(req: Request, res: Response): Promise<Response> {
    throw new Error('Method not implemented.');
  }
}