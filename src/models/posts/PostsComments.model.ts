import { IPostCommentsModel } from '../../interface/Models';
import IPostsComments from '../../interface/PostsComments';
import PostsCommentsModel from '../../database/models/PostsComments';

class PostsComments implements IPostCommentsModel {
  private Model = PostsCommentsModel;

  async update(id: number, data: Partial<IPostsComments>): Promise<IPostsComments | null> {
    const [response] = await this.Model.update(
      { comment: data.comment, commentDate: new Date() }, 
      { where: { id } },
    );
    if (response > 0) {
      const updatedFriendRequest = await this.Model.findByPk(id);
      return updatedFriendRequest;
    } 
    return null;
  }

  async create(data: Omit<IPostsComments, 'id'>): Promise<IPostsComments> {
    const response = await this.Model.create(data);
    return response;
  }

  async findByPostId(id: number): Promise<IPostsComments[]> {
    const response = await this.Model.findAll({ where: {
      postId: id,
    } });
    return response;
  }

  async delete(id: number): Promise<number> {
    const response = await this.Model.destroy({ where: {
      id,
    } });
    return response;
  }
}

export default PostsComments;