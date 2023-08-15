import { IPostModel } from '../interface/IPostModel';
import IPostService from '../interface/IPostService';
import Post from '../interface/Post';

export default class PostService implements IPostService {
  private Model:IPostModel;

  constructor(model:IPostModel) {
    this.Model = model;
  }

  async getPostId(id: number): Promise<Post | null> {
    const response = await this.Model.findById(id);
    return response;
  }

  async createPost(post:Post): Promise<Post> {
    const response = await this.Model.create(post);
    return response;
  }

  async deletePostId(id:number): Promise<number> {
    const response = await this.Model.delete(id);
    return response;
  }

  async getAllPosts(): Promise<Post[]> {
    const response = await this.Model.findAll();
    return response;
  }
}