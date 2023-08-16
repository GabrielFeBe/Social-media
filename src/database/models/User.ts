import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import FriendRequest from './FriendRequest';
import db from './index';

const sequelize = db;

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare id: CreationOptional<number>;
  declare description: string;
  declare email: string;
  declare local: string;
  declare password: string;
  declare profilePicture: string;
  declare name: string;
}

User.init({

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
