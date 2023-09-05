import { Request, Response } from 'express';

export default interface IPostsCommentsController {
  update(req:Request, res:Response): Promise<Response>
  create(req:Request, res:Response): Promise<Response>
  delete(req:Request, res:Response): Promise<Response>
  findByPostId(req:Request, res:Response): Promise<Response>
}