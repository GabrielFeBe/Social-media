import { Request, Response } from 'express';

export default interface IUserController {
  getUserId(req:Request, res:Response): Promise<Response>
  createUser(req:Request, res:Response): Promise<Response>
  deleteUserId(req:Request, res:Response): Promise<Response>
  getAllUser(req:Request, res:Response): Promise<Response>
  
}