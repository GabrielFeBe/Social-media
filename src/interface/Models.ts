import { ICRUDModelCreator, ICRUDModelDeleter, ICRUDModelReader } from './ICRUD';
import Post from './Post';
import { IUser } from './Tuser';

export type IPostModel = ICRUDModelCreator<Post> & ICRUDModelDeleter & ICRUDModelReader<Post>; 

export type IUserModel = ICRUDModelCreator<IUser> & ICRUDModelDeleter & ICRUDModelReader<IUser>; 