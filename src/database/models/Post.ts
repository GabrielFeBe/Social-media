import {
  CreationOptional, DataTypes, ForeignKey,
  InferAttributes, InferCreationAttributes, Model
} from 'sequelize';
import db from './index';
import User from './User';

const sequelize = db;

class Post extends Model<InferAttributes<Post>, InferCreationAttributes<Post>> {
  declare id: CreationOptional<number>;

  declare postTitle: string;

  declare postDescription: string;

  declare userId: ForeignKey<User['id']>;

  declare isPublic: boolean;

  declare postDate: Date;

  declare postPicture: CreationOptional<string>;
}

Post.init({
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
  postTitle: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  postDescription: {
    type: DataTypes.TEXT,
    allowNull: false,
    field: 'post_description',
  },
  isPublic: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    field: 'is_public',
  },
  postDate: {
    type: DataTypes.DATE,
    defaultValue: new Date(),
    field: 'post_date',
  }, postPicture: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'post_picture'
  }

}, {
  sequelize,
  tableName: 'post_info',
  timestamps: false,
  underscored: true,
});

Post.belongsTo(User, { foreignKey: { allowNull: false, name: 'userId' }, as: 'user' });
User.hasMany(Post, { foreignKey: 'userId', as: 'posts' });

export default Post;
