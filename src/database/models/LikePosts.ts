import {
  CreationOptional, DataTypes, ForeignKey,
  InferAttributes, InferCreationAttributes, Model
} from 'sequelize';
import db from './index';
import User from './User';
import Post from './Post';

const sequelize = db;

class PostLikes extends
  Model<InferAttributes<PostLikes>, InferCreationAttributes<PostLikes>> {
  declare id: CreationOptional<number>;
  declare userId: ForeignKey<User['id']>;
  declare postId: ForeignKey<Post['id']>;
  
}

PostLikes.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  userId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'user_id'
  },
  postId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'post_id'
  }
  

}, {
  sequelize,
  tableName: 'like_posts',
  timestamps: false,
  underscored: true,
});

User.hasMany(PostLikes, { foreignKey: 'userId', as: 'postsLikes' });
Post.hasMany(PostLikes, { foreignKey: 'postId', as: 'usersWichLiked' });

export default PostLikes;
