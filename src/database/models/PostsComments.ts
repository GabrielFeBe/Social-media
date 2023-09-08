import {
  CreationOptional, DataTypes, ForeignKey,
  InferAttributes, InferCreationAttributes, Model
} from 'sequelize';
import db from './index';
import User from './User';
import Post from './Post';

const sequelize = db;

class PostsComments extends Model<InferAttributes<PostsComments>, InferCreationAttributes<PostsComments>> {
  declare id: CreationOptional<number>;

  declare postId: ForeignKey<Post['id']>;

  declare comment: string;

  declare userId: ForeignKey<User['id']>;

  declare commentDate: Date

}

PostsComments.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  userId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'user_id',
  },
  comment: {
    allowNull: false,
    type: DataTypes.TEXT,
  },
  commentDate: {
    type: DataTypes.DATE,
    field: 'comment_date',
    allowNull: true,
    defaultValue: new Date()

  }, postId: {
    allowNull: false,
    type: DataTypes.NUMBER,
    field: 'post_id'

  }
}, {
  sequelize,
  tableName: 'post_comments',
  timestamps: false,
  underscored: true,
});

PostsComments.belongsTo(User, { foreignKey: { allowNull: false, name: 'userId' }, as: 'user' });
// User.hasMany(PostsComments, { foreignKey: 'userId', as: 'postsComments' });
Post.hasMany(PostsComments, { foreignKey: 'postId', as: 'comments' })

export default PostsComments;
