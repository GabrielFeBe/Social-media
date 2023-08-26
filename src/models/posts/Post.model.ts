import Post from '../../database/models/Post';
import User from '../../database/models/User';
import { IPostModel } from '../../interface/Models';
import IPost from '../../interface/Post';

class PostModel implements IPostModel {
  private Model = Post;

  async create(data: Omit<Post, 'id'>): Promise<IPost> {
    const response = await this.Model.create(data);
    return response;
  }

  async delete(id: number): Promise<number> {
    await this.Model.destroy({ where: {
      id,
    } });
    return id;
  }

  async findAll(): Promise<IPost[]> {
    const response = await this.Model.findAll({
      include: [{
        model: User,
        as: 'user',
        attributes: ['id', 'name', 'email', 'profilePicture'],
      }],
    });
    return response;
  }

  async findById(id: number): Promise<IPost | null> {
    const response = await this.Model.findByPk(id);
    return response;
  }
}

export default PostModel;