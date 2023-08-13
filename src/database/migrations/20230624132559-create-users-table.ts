import { Model, QueryInterface, DataTypes } from 'sequelize';

import { User } from '../../interface/Tuser';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<User>>('new_users', {
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
    });
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('new_users');
  },
};