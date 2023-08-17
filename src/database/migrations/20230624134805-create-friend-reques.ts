import { Model, QueryInterface, DataTypes } from 'sequelize';
import FriendRequest from '../../interface/FriendRequest';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<FriendRequest>>('friend_request', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      requesterId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'requester_id'
      },
      targetId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'target_id'
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      }
    });
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('friend_request');
  },
};