import { CreationOptional, DataTypes, ForeignKey, 
  InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import db from './index';
import User from './User';

const sequelize = db;

class FriendRequest extends
 Model<InferAttributes<FriendRequest>, InferCreationAttributes<FriendRequest>> {
  declare id: CreationOptional<number>;
  declare requesterId: ForeignKey<User['id']>;
  declare targetId: ForeignKey<User['id']>;
}

FriendRequest.init({
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
  }

}, {
  sequelize,
  tableName: 'friend_request',
  timestamps: false,
  underscored: true,
});

export default FriendRequest;
