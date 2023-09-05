import { Request, Response } from 'express';
import IPostsCommentsController from '../interface/IPostsCommentsController';
import IPostsCommentsService from '../interface/IPostsCommentsService';

class PostsCommentsController implements IPostsCommentsController {
  private Service:IPostsCommentsService;

  constructor(service:IPostsCommentsService) {
    this.Service = service;
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const response = await this.Service.update(+id, req.body);
    return res.status(200).json(response);
  }

  async create(req: Request, res: Response): Promise<Response> {
    const response = await this.Service.create(req.body);
    return res.status(201).json(response);
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const response = await this.Service.delete(+id);
    return res.status(204).json(response);
  }

  async findByPostId(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const response = await this.Service.findByPostId(+id);
    return res.status(200).json(response);
  }
}

export default PostsCommentsController;