import { Model, QueryInterface, DataTypes } from 'sequelize';
import PostComments from '../../interface/PostsComments';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<PostComments>>('post_comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      postId: {
        allowNull: false,
        type: DataTypes.NUMBER,
        field: 'post_id'
      },
      comment: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      userId: {
        type: DataTypes.NUMBER,
        allowNull: false,
        field: 'user_id'
      },
      commentDate: {
        type: DataTypes.DATE,
        allowNull: true,
        field: 'comment_date',
        defaultValue: new Date()
      }
    });
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('post_comments');
  },
};