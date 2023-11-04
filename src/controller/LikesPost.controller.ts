import { Request, Response } from 'express';
import ILikesPostsController from '../interface/post/ILikePostsController';
import PostLikeService from '../interface/post/ILikePostsService';

export default class LikesPostsController implements ILikesPostsController {
  private Service: PostLikeService;

  constructor(service:PostLikeService) {
    this.Service = service;
  }

  async createLikePost(req:Request, res: Response): Promise<Response> {
    const response = await this.Service.createLikePost(req.body);
    return res.status(201).json(response);
  }

  async deleteLikePost(req:Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const response = await this.Service.deleteLikePost(+id);
    return res.status(204).json(response);
  }
}