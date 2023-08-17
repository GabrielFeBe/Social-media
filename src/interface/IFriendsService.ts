import IFriendRequest from './FriendRequest';
import { IUser } from './Tuser';

export default interface IFriendsService{
  findFriendsUserById(id:number): Promise<IUser | null>
  createFriendRequest(post:IFriendRequest): Promise<IFriendRequest>
  deleteFriendRequest(id:number): Promise<number>
  findAllUserFriends(): Promise<IUser[]>
  updateFriendRequest(id: number, data: Partial<IFriendRequest>):Promise<IFriendRequest | null>
}