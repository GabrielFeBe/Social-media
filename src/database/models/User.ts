import { DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import FriendRequest from './FriendRequest';
import db from './index';

const sequelize = db;

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare id: number;

  declare email: string;

  declare password: string;

  declare name:string;
}

User.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  sequelize,
  tableName: 'new_users',
  timestamps: false,
  underscored: true,
});

User.belongsToMany(User, {
  as: 'requester',
  foreignKey: 'requesterId',
  through: FriendRequest,
});

User.belongsToMany(User, {
  as: 'requested',
  foreignKey: 'targetId',
  through: FriendRequest,
});

export default User;
