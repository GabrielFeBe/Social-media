import { Request, Response } from 'express';

export default interface IUserController {
  getUserId(req:Request, res:Response): Promise<Response>
  createUser(req:Request, res:Response): Promise<Response>
  deleteUserId(req:Request, res:Response): Promise<Response>
  getAllUser(req:Request, res:Response): Promise<Response>
  getAllUserByName(req:Request, res:Response): Promise<Response>
  loginUser(req:Request, res:Response): Promise<Response>
  createUserNotification(req:Request, res:Response): Promise<Response>
  deleteUserNotification(req:Request, res:Response): Promise<Response>
  update(req:Request, res:Response): Promise<Response>
}