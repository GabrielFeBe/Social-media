import { Model, QueryInterface, DataTypes } from 'sequelize';

import { IUser } from '../../interface/Tuser';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IUser>>('new_users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      profilePicture: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'profile_picture'
      },
      local: {
        allowNull: false,
        type: DataTypes.STRING
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    });
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('new_users');
  },
};