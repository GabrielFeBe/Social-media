import PostLikes from '../../database/models/LikePosts';
import Post from '../../database/models/Post';
import PostsComments from '../../database/models/PostsComments';
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
  // eslint-disable-next-line
  async findAll(): Promise<IPost[]> {
    const response = await this.Model.findAll({
      order: [['postDate', 'DESC']],
      include: [{
        model: User,
        as: 'user',
        attributes: ['id', 'name', 'email', 'profilePicture'],
      }, {
        model: PostsComments,
        as: 'comments',
        separate: true,
        order: [
          ['commentDate', 'ASC'],
        ],
        include: [
          {
            model: User,
            as: 'user',
          },
        ],

      }, {
        model: PostLikes,
        as: 'usersWichLiked',
        attributes: ['userId'],
        include: [
          {
            model: User,
            as: 'user',
            attributes: ['id', 'name', 'email', 'profilePicture', 'local', 'description'],
          },
        ],
     
      },

      ],
    });
    return response;
  }

  async findById(id: number): Promise<IPost | null> {
    const response = await this.Model.findByPk(id);
    return response;
  }
  // eslint-disable-next-line
  async findPostByUserId(id:number) :Promise<IPost[]> {
    const response = await this.Model.findAll({ where: {
      userId: id,
    },
    include: [{
      model: User,
      as: 'user',
      attributes: ['id', 'name', 'email', 'profilePicture'],
    }, {
      model: PostsComments,
      as: 'comments',
      separate: true,
      order: [
        ['commentDate', 'ASC'],
      ],
      include: [
        {
          model: User,
          as: 'user',
        },
      ],

    }],
  
    });
    return response;
  }
}

export default PostModel;