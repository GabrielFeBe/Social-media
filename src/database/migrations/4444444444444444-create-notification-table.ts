import { Model, QueryInterface, DataTypes } from 'sequelize';
import UserNotification from '../../interface/user/userNotification';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<UserNotification>>('notification_users', {
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
    });
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('notification_users');
  },
};