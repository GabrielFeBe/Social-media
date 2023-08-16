import IUserService from '../interface/IUserService';
import { IUserModel } from '../interface/Models';
import { IUser } from '../interface/Tuser';

export default class UserService implements IUserService {
  private Model:IUserModel;

  constructor(model:IUserModel) {
    this.Model = model;
  }

  async getUserId(id: number): Promise<IUser | null> {
    const response = await this.Model.findById(id);
    return response;
  }

  async createUser(post: IUser): Promise<IUser> {
    const response = await this.Model.create(post);
    return response;
  }

  async deleteUserId(id: number): Promise<number> {
    const response = await this.Model.delete(id);
    return response;
  }

  async getAllUser(): Promise<IUser[]> {
    const response = await this.Model.findAll();
    return response;
  }
}