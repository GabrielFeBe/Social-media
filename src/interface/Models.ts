import FriendRequest from './FriendRequest';
import { ICRUDFriendsModel, ICRUDModelCreator, ICRUDModelDeleter, 
  ICRUDModelPostReader, 
  ICRUDModelUpdater, ICRUDModelUserReader } from './ICRUD';
import Post from './Post';
import { IUser } from './Tuser';

export type IPostModel = ICRUDModelCreator<Post> & ICRUDModelDeleter & ICRUDModelPostReader<Post>; 

export type IUserModel = ICRUDModelCreator<IUser> & ICRUDModelDeleter & ICRUDModelUserReader<IUser>;

export type IFriendsModel = ICRUDModelCreator<FriendRequest> 
& ICRUDModelDeleter & ICRUDFriendsModel<IUser> & ICRUDModelUpdater<FriendRequest>;