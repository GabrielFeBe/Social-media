import { Model, QueryInterface, DataTypes } from 'sequelize';
import Post from '../../interface/Post';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<Post>>('post_info', {
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
      postTitle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      postDescription: {
        type: DataTypes.TEXT,
        allowNull: false,
        field: 'post_description'
      },
      isPublic: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        field: 'is_public'
      },
      postDate: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
        field: 'post_date'
      }
    });
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('post_info');
  },
};