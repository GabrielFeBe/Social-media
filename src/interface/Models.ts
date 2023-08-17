import FriendRequest from './FriendRequest';
import { ICRUDFriendsModel, ICRUDModelCreator, ICRUDModelDeleter, ICRUDModelReader, ICRUDModelUpdater } from './ICRUD';
import Post from './Post';
import { IUser } from './Tuser';

export type IPostModel = ICRUDModelCreator<Post> & ICRUDModelDeleter & ICRUDModelReader<Post>; 

export type IUserModel = ICRUDModelCreator<IUser> & ICRUDModelDeleter & ICRUDModelReader<IUser>;

export type IFriendsModel = ICRUDModelCreator<FriendRequest> 
& ICRUDModelDeleter & ICRUDFriendsModel<IUser> & ICRUDModelUpdater<FriendRequest>;