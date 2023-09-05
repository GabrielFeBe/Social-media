import IPostsCommentsService from '../interface/IPostsCommentsService';
import { IPostCommentsModel } from '../interface/Models';
import IPostsComments from '../interface/PostsComments';

class PostsCommentsService implements IPostsCommentsService {
  private Model:IPostCommentsModel;

  constructor(model:IPostCommentsModel) {
    this.Model = model;
  }

  async update(id: number, data: Partial<IPostsComments>): Promise<IPostsComments | null> {
    const response = await this.Model.update(id, data);
    return response;
  }

  async create(comment: IPostsComments): Promise<IPostsComments> {
    const response = await this.Model.create(comment);
    return response;
  }

  async delete(id: number): Promise<number> {
    const response = await this.Model.delete(id);
    return response;
  }

  async findByPostId(id: number): Promise<IPostsComments[]> {
    const response = await this.Model.findByPostId(id);
    return response;
  }
}

export default PostsCommentsService;