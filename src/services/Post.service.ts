import { IPostModel } from '../interface/Models';
import IPostService from '../interface/IPostService';
import Post from '../interface/Post';
import Posts from '../class/Post';

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
    await Posts.validate(post);
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

  async findPostByUserId(id: number): Promise<Post[]> {
    const response = await this.Model.findPostByUserId(id);
    return response;
  }
}