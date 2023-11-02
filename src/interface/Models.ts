import FriendRequest from './FriendRequest';
import { ICRUDFriendsModel, ICRUDModelCommentsReader, ICRUDModelCreator, ICRUDModelDeleter, 
  ICRUDModelPostReader,  
  ICRUDModelReader,  
  ICRUDModelUpdater,
  ICRUDModelUserReader,
  ICRUDModelCreatorUser,
  ICRUDModelDeleterUser } from './ICRUD';
import Post from './Post';
import PostComments from './PostsComments';
import { IUser } from './Tuser';

export type IPostModel = ICRUDModelCreator<Post> & ICRUDModelDeleter & ICRUDModelPostReader<Post>; 

export type IUserModel = ICRUDModelCreatorUser<IUser> & 
ICRUDModelDeleterUser & ICRUDModelUserReader<IUser>;

export type IFriendsModel = ICRUDModelCreator<FriendRequest> 
& ICRUDModelDeleter & ICRUDFriendsModel<IUser> & ICRUDModelUpdater<FriendRequest> 
& Omit<ICRUDModelReader<FriendRequest>, 'findAll'>;

export type IPostCommentsModel = ICRUDModelCreator<PostComments> & ICRUDModelUpdater<PostComments> 
& ICRUDModelCommentsReader<PostComments> & ICRUDModelDeleter 
& Omit<ICRUDModelReader<PostComments>, 'findAll'>;