import User from '../class/User';
import Encrypter from '../interface/Encrypter';
import IUserService from '../interface/IUserService';
import { IUserModel } from '../interface/Models';
import { IUser } from '../interface/Tuser';

export default class UserService implements IUserService {
  private Model:IUserModel;

  private EncrypterC : Encrypter;

  constructor(model:IUserModel, encrypter: Encrypter) {
    this.Model = model;
    this.EncrypterC = encrypter;
  }

  async getUserId(id: number): Promise<IUser | null> {
    const response = await this.Model.findById(id);
    return response;
  }

  async createUser(user: IUser): Promise<IUser> {
    const encrypted = this.EncrypterC.encrypt(user.password);
    const userClas = new User({ ...user, password: encrypted });
    const response = await this.Model.create(userClas.getUser());
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

  async getAllUserByName(name: string): Promise<IUser[]> {
    const response = await this.Model.findAllByName(name);
    return response;
  }
}