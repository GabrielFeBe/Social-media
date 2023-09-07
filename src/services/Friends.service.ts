import IFriendRequest from '../interface/FriendRequest';
import IFriendsService from '../interface/IFriendsService';
import { IFriendsModel } from '../interface/Models';
import { IUser } from '../interface/Tuser';

export default class FriendsService implements IFriendsService {
  private Model: IFriendsModel;

  constructor(model:IFriendsModel) {
    this.Model = model;
  }

  async findFriendsUserById(id: number): Promise<IUser | null> {
    const response = await this.Model.findFriendsUserById(id);
    return response;
  }

  async createFriendRequest(post: IFriendRequest): Promise<IFriendRequest> {
    const response = await this.Model.create(post);
    return response;
  }

  async deleteFriendRequest(id: number): Promise<number> {
    const response = await this.Model.delete(id);
    return response;
  }

  async findAllUserFriends(): Promise<IUser[]> {
    const response = await this.Model.findAllUserFriends();
    return response;
  }

  async updateFriendRequest(id: number, data: { status:boolean }, userId:number)
    : Promise<IFriendRequest | null> {
    const checkingValidation = await this.Model.findById(id);
    if (!checkingValidation) throw new Error('Request does not exist');
    if (checkingValidation.requesterId !== userId && checkingValidation.targetId !== userId) { 
      throw new Error('You are not authorized to update this request'); 
    }
    const response = await this.Model.update(id, data);
    return response;
  }
}