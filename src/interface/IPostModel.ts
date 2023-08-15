import { ICRUDModelCreator, ICRUDModelDeleter, ICRUDModelReader } from './ICRUD';
import Post from './Post';

export type IPostModel = ICRUDModelCreator<Post> & ICRUDModelDeleter & ICRUDModelReader<Post>; 