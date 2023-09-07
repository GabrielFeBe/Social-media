import { Request, Response } from 'express';
import IFriendsController from '../interface/IFriendsController';
import IFriendsService from '../interface/IFriendsService';

export default class FriendsController implements IFriendsController {
  private Service:IFriendsService;

  constructor(service:IFriendsService) {
    this.Service = service;
  }

  async findFriendsUserById(req: Request, res: Response): Promise<Response > { 
    const { id } = req.params;
    const response = await this.Service.findFriendsUserById(+id);
    return res.status(200).json(response);
  }

  async createFriendRequest(req: Request, res: Response): Promise<Response > {
    const response = await this.Service.createFriendRequest(req.body);
    return res.status(201).json(response);
  }

  async deleteFriendRequest(req: Request, res: Response): Promise<Response > {
    const { id } = req.params;
    const response = await this.Service.deleteFriendRequest(+id);
    return res.status(204).json(response);
  }

  async findAllUserFriends(req: Request, res: Response): Promise<Response > {
    const response = await this.Service.findAllUserFriends();
    return res.status(200).json(response);
  }

  async updateFriendRequest(req: Request, res: Response): Promise<Response > {
    const { id } = req.params;
    const { userId } = req.body;
    const response = await this.Service.updateFriendRequest(+id, req.body, +userId);
    return res.status(200).json(response);
  }
}