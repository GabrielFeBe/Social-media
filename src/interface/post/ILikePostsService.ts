import LikePost from './ILikePosts';

export default interface PostLikeService{
  createLikePost(data: Omit<LikePost, 'id'>): Promise<LikePost>
  deleteLikePost(userId:number, postId:number): Promise<number>
}