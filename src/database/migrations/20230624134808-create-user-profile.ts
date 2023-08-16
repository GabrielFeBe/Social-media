import { Model, QueryInterface, DataTypes } from 'sequelize';

import { IUser } from '../../interface/Tuser';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<any>>('user_profile', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      profilePicture: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'profile_picture'
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'user_id'
      },
      local: {
        allowNull: false,
        type: DataTypes.STRING
      }
    });
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('user_profile');
  },
};