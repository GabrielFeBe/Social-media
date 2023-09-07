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
    console.log(comment);
    return response;
  }

  async delete(id: number, userId:number): Promise<number> {
    const checkingUser = await this.Model.findById(id);
    if (!checkingUser) throw new Error('Comment does not exist');
    if (checkingUser.userId !== userId) throw new Error('User can not delete this comment');
    const response = await this.Model.delete(id);
    return response;
  }

  async findByPostId(id: number): Promise<IPostsComments[]> {
    const response = await this.Model.findByPostId(id);
    return response;
  }
}

export default PostsCommentsService;