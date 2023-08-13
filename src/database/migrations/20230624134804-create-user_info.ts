import { Model, QueryInterface, DataTypes } from 'sequelize';

import { User } from '../../interface/Tuser';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<any>>('user_info', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field:'user_id'
      },
    });
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('user_info');
  },
};