import { Request, Response } from 'express';
import IUserController from '../interface/IUserController';
import IUserService from '../interface/IUserService';

export default class UserController implements IUserController {
  private Service:IUserService;

  constructor(service:IUserService) {
    this.Service = service;
  }

  async getUserId(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const response = await this.Service.getUserId(+id);
    return res.status(200).json({ user: response });
  }

  async createUser(req: Request, res: Response): Promise<Response> {
    const response = await this.Service.createUser(req.body);
    return res.status(201).json({ userCreated: response });
  }

  async deleteUserId(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const response = await this.Service.deleteUserId(+id);
    return res.status(204).json(response);
  }

  async getAllUser(req: Request, res: Response): Promise<Response> {
    const response = await this.Service.getAllUser();
    return res.status(200).json({ users: response });
  }

  async getAllUserByName(req: Request, res: Response): Promise<Response> {
    const { name } = req.body;
    const response = await this.Service.getAllUserByName(name);
    return res.status(200).json({ users: response });
  }

  async loginUser(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;
    const response = await this.Service.loginUser(email, password);
    return res.status(200).json({ token: response });
  }
}