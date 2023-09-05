import IPostsComments from './PostsComments';

export default interface IPostsCommentsService{
  update(id:number, data:Partial<IPostsComments>): Promise<IPostsComments | null>
  create(comment:IPostsComments): Promise<IPostsComments>
  delete(id:number): Promise<number>
  findByPostId(id:number): Promise<IPostsComments[]>
}