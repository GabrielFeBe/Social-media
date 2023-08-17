import { Request, Response } from 'express';

export default interface IFriendsController {
  findFriendsUserById(req:Request, res:Response): Promise<Response>
  createFriendRequest(req:Request, res:Response): Promise<Response>
  deleteFriendRequest(req:Request, res:Response): Promise<Response>
  findAllUserFriends(req:Request, res:Response): Promise<Response>
  updateFriendRequest(req:Request, res:Response):Promise<Response>
}