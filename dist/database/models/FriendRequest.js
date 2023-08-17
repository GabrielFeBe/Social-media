"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_1 = __importDefault(require("./index"));
const sequelize = index_1.default;
class FriendRequest extends sequelize_1.Model {
}
FriendRequest.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
    },
    requesterId: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
        field: 'requester_id'
    },
    targetId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        field: 'target_id'
    },
    status: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'friend_request',
    timestamps: false,
    underscored: true,
});
exports.default = FriendRequest;
//# sourceMappingURL=FriendRequest.js.map