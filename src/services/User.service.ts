import User from '../class/User';
import Encrypter from '../interface/Encrypter';
import IUserService from '../interface/IUserService';
import { IUserModel } from '../interface/Models';
import { TokenGenerator } from '../interface/TokenGenerator';
import { IUser } from '../interface/Tuser';

export default class UserService implements IUserService {
  private Model:IUserModel;

  private EncrypterC : Encrypter;

  private TokenGenerator:TokenGenerator;

  constructor(model:IUserModel, encrypter: Encrypter, tokenGen:TokenGenerator) {
    this.Model = model;
    this.EncrypterC = encrypter;
    this.TokenGenerator = tokenGen;
  }

  async getUserId(id: number): Promise<IUser | null> {
    const response = await this.Model.findById(id);
    return response;
  }

  async createUser(user: IUser): Promise<IUser> {
    const encrypted = this.EncrypterC.encrypt(user.password);
    const userClas = new User({ ...user, password: encrypted });
    const response = await this.Model.create(userClas.getUser());
    const token = this.TokenGenerator.generate({ email:
      response.email,
    password: response.password,
    id: response.id as number });
    return { ...response, token };
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

  async loginUser(email: string, password: string): Promise<string> {
    const response = await this.Model.findUserByEmail(email);
    if (!response) throw new Error('Usuario não existe');
    if (!this.EncrypterC.compare(password, response.password)) throw new Error('Senha invalida');
    const token = this.TokenGenerator.generate({ email:
       response.email,
    password: response.password,
    id: response.id as number });
    return token;
  }

  async createUserNotification(userId: number): Promise<boolean> {
    const response = await this.Model.createUserNotification(userId);
    if (!response) throw new Error('Erro ao criar notificação');
    return response;
  }
}