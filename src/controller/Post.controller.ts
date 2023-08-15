import { Request, Response } from 'express';
import IPostController from '../interface/IPostController';
import IPostService from '../interface/IPostService';

export default class PostController implements IPostController {
  private Service: IPostService;

  constructor(service:IPostService) {
    this.Service = service;
  }

  async getPostId(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const response = await this.Service.getPostId(+id);
    return res.status(200).json(response);
  }

  async createPost(req: Request, res: Response): Promise<Response> {
    const response = await this.Service.createPost(req.body);
    return res.status(201).json(response);
  }

  async deletePostId(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const response = await this.Service.deletePostId(+id);
    return res.status(204).json(response);
  }

  async getAllPosts(req: Request, res: Response): Promise<Response> {
    const response = await this.Service.getAllPosts();
    return res.status(200).json(response); 
  }
}