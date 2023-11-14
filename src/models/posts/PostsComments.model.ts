import { IPostCommentsModel } from '../../interface/Models';
import IPostsComments from '../../interface/PostsComments';
import PostsCommentsModel from '../../database/models/PostsComments';
import User from '../../database/models/User';

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
    const resonseCommentWithUser = await this.Model.findByPk(response.id, {
      include: [
        { model: User, as: 'user' },
      ],
    });
    if (!resonseCommentWithUser) throw new Error('Error on create comment');
    return resonseCommentWithUser;
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

  async findById(id:number) {
    const response = await this.Model.findByPk(id);
    return response;
  }
}

export default PostsComments;