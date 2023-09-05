import { Model, QueryInterface, DataTypes } from 'sequelize';
import PostComments from '../../interface/PostsComments';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<PostComments>>('post_comments', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false
      },
      postId: {
        type: DataTypes.INTEGER,
        field: 'post_id',
        allowNull: false
      },
      comment: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      userId: {
        type: DataTypes.INTEGER,
        field: 'user_id',
        allowNull: false
      },
      commentDate: {
        type: DataTypes.DATE,
        field: 'comment_date',
        defaultValue: DataTypes.NOW
      }
    });
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('post_comments');
  },
};