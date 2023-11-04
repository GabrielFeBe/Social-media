import LikePost from '../interface/post/ILikePosts';
import ILikesPostsService from '../interface/post/ILikePostsService';
import { IPostLikeModel } from '../interface/Models';

export default class LikesPostsService implements ILikesPostsService {
  private Model: IPostLikeModel;

  constructor(model: IPostLikeModel) { 
    this.Model = model;
  }

  public async createLikePost(data: Omit<LikePost, 'id'>): Promise<LikePost> {
    const likePost = await this.Model.create(data);
    return likePost;
  }

  public async deleteLikePost(id: number): Promise<number> {
    const likePost = await this.Model.delete(id);
    return likePost;
  }
}