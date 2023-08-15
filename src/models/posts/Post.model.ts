import Post from '../../database/models/Post';
import { IPostModel } from '../../interface/IPostModel';
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
    const response = await this.Model.findAll();
    return response;
  }

  async findById(id: number): Promise<IPost | null> {
    const response = await this.Model.findByPk(id);
    return response;
  }
}

export default PostModel;