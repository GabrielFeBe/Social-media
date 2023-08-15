import Post from './Post';

export default interface IPostService{

  getPostId(id:number): Promise<Post | null>
  createPost(post:Post): Promise<Post>
  deletePostId(id:number): Promise<number>
  getAllPosts(): Promise<Post[]>

}