import { Request, Response } from 'express';

export default interface ILikesPostsController{
  createLikePost(req:Request, res:Response): Promise<Response>
  deleteLikePost(req:Request, res:Response): Promise<Response>
}