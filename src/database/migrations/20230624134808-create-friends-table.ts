import { Model, QueryInterface, DataTypes } from 'sequelize';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<any>>('friends', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      userId1: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'user_id1'
      },
      userId2: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id2'
      }
    });
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('friends');
  },
};