import FriendRequest from './FriendRequest';
import { ICRUDFriendsModel, ICRUDModelCommentsReader, ICRUDModelCreator, ICRUDModelDeleter, 
  ICRUDModelPostReader,  
  ICRUDModelUpdater, ICRUDModelUserReader } from './ICRUD';
import Post from './Post';
import PostComments from './PostsComments';
import { IUser } from './Tuser';

export type IPostModel = ICRUDModelCreator<Post> & ICRUDModelDeleter & ICRUDModelPostReader<Post>; 

export type IUserModel = ICRUDModelCreator<IUser> & ICRUDModelDeleter & ICRUDModelUserReader<IUser>;

export type IFriendsModel = ICRUDModelCreator<FriendRequest> 
& ICRUDModelDeleter & ICRUDFriendsModel<IUser> & ICRUDModelUpdater<FriendRequest>;

export type IPostCommentsModel = ICRUDModelCreator<PostComments> & ICRUDModelUpdater<PostComments> 
& ICRUDModelCommentsReader<PostComments> & ICRUDModelDeleter;