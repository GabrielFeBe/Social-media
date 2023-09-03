import { Request, Response } from 'express';

export default interface IPostController {
  getPostId(req:Request, res:Response): Promise<Response>
  createPost(req:Request, res:Response): Promise<Response>
  deletePostId(req:Request, res:Response): Promise<Response>
  getAllPosts(req:Request, res:Response): Promise<Response>
  findPostByUserId(req:Request, res:Response):Promise<Response>
}