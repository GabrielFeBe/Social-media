import {
  CreationOptional, DataTypes, ForeignKey,
  InferAttributes, InferCreationAttributes, Model
} from 'sequelize';
import db from './index';
import User from './User';

const sequelize = db;

class UserNotification extends
  Model<InferAttributes<UserNotification>, InferCreationAttributes<UserNotification>> {
  declare id: CreationOptional<number>;
  declare userId: ForeignKey<User['id']>;
  
}

UserNotification.init({
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
  

}, {
  sequelize,
  tableName: 'notification_users',
  timestamps: false,
  underscored: true,
});

User.hasMany(UserNotification, { foreignKey: 'userId', as: 'notifications' });

export default UserNotification;
