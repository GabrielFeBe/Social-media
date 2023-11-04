import { Model, QueryInterface, DataTypes } from 'sequelize';
import LikePost from '../../interface/post/ILikePosts';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<LikePost>>('like_posts', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false
      },
      userId: {
        type: DataTypes.INTEGER,
        field: 'user_id',
        allowNull: false
      },
      postId: {
        type: DataTypes.INTEGER,
        field: 'post_id',
        allowNull: false
      },
    });
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('like_posts');
  },
};