import FriendRequest from '../../database/models/FriendRequest';
import User from '../../database/models/User';
import IFriendRequest from '../../interface/FriendRequest';
import { IFriendsModel } from '../../interface/Models';
import { IUser } from '../../interface/Tuser';

export default class FriendsModel implements IFriendsModel {
  private UModel = User;

  private FModel = FriendRequest;

  async create(data: Omit<IFriendRequest, 'id'>): Promise<IFriendRequest> {
    const response = await this.FModel.create(data);
    return response;
  }

  async delete(id: number): Promise<number> {
    const request = await this.FModel.findByPk(id);
    if (!request) throw new Error('user not found');
    await request.destroy();
    return 1;
  }
  // eslint-disable-next-line
  async findAllUserFriends(): Promise<IUser[]> {
    const response = await this.UModel.findAll({
      attributes: ['id', 'name', 'email', 'profilePicture'],
      include: [
        {
          model: User,
          as: 'requester',
          attributes: ['id', 'name', 'email', 'profilePicture'],
          through: {
            attributes: ['status'],
            where: {
            },
          },
        },
        {
          model: User,
          as: 'requested',
          attributes: ['id', 'name', 'email', 'profilePicture'],
          through: {
            attributes: ['status'],
          },
        },
      ],
    });

    const allAcceptedRequests = response.map((request: IUser) => (
      {
        id: request.id,
        email: request.email,
        profilePicture: request.profilePicture,
        local: request.local,
        name: request.name,
        friends: [...request.requested || [], ...request.requester || []],
        password: request.password,
        description: request.description,
      }));

    return allAcceptedRequests;
  }
  // eslint-disable-next-line
  async findFriendsUserById(id: number): Promise<IUser | null> {
    const response: IUser | null = await this.UModel.findByPk(id, {
      attributes: ['id', 'name', 'email', 'profilePicture', 'local', 'description'],
      include: [
        {
          model: User,
          as: 'requester',
          attributes: ['id', 'name', 'email', 'profilePicture'],
          through: {
            attributes: ['status'],
            
          },
        },
        {
          model: User,
          as: 'requested',
          attributes: ['id', 'name', 'email', 'profilePicture'],
          through: {
            attributes: ['status'],
          },
        },
      ],
    }); 
    if (!response) throw new Error('falha');
    const obj = {
      id: response.id,
      email: response.email,
      profilePicture: response.profilePicture,
      local: response.local,
      name: response.name,
      friends: [...response.requested || [], ...response.requester || []],
      requester: response.requester,
      requested: response.requested,
      password: response.password,
      description: response.description,
    };
    return obj;
  }
  
  async update(id: number, data: { status:boolean }): Promise<IFriendRequest | null> {
    const [response] = await this.FModel.update({ status: data.status }, { where: { id } });
    if (response > 0) {
      const updatedFriendRequest = await this.FModel.findByPk(id);
      return updatedFriendRequest;
    } 
    return null; 
  }

  async findById(id: number): Promise<IFriendRequest | null> {
    const response = await this.FModel.findByPk(id);
    return response;
  }
}