import PostLikes from '../../database/models/LikePosts';
import { IPostLikeModel } from '../../interface/Models';
import LikePost from '../../interface/post/ILikePosts';

export default class LikesPosts implements IPostLikeModel {
  constructor(private Model = PostLikes) {
  }

  async create(data: Omit<LikePost, 'id'>): Promise<LikePost> {
    const response = await this.Model.create(data);
    return response;
  }

  delete(id: number): Promise<number> {
    const response = this.Model.destroy({ 
      where: {
        id,
      },
    });
    return response;
  }
}