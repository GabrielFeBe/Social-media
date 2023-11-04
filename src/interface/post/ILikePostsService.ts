import LikePost from './ILikePosts';

export default interface PostLikeService{
  createLikePost(data: Omit<LikePost, 'id'>): Promise<LikePost>
  deleteLikePost(id:number): Promise<number>
}