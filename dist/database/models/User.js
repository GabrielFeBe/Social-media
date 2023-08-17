"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const FriendRequest_1 = __importDefault(require("./FriendRequest"));
const index_1 = __importDefault(require("./index"));
const sequelize = index_1.default;
class User extends sequelize_1.Model {
}
User.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
    },
    email: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
    },
    password: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
    },
    name: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
    },
    profilePicture: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
        field: 'profile_picture'
    },
    local: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING
    },
    description: {
        type: sequelize_1.DataTypes.TEXT,
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
    through: FriendRequest_1.default,
});
User.belongsToMany(User, {
    as: 'requested',
    foreignKey: 'targetId',
    through: FriendRequest_1.default,
});
exports.default = User;
//# sourceMappingURL=User.js.map