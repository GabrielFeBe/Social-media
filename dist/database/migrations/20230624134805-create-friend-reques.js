"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up(queryInterface) {
        return queryInterface.createTable('friend_request', {
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
        });
    },
    down(queryInterface) {
        return queryInterface.dropTable('friend_request');
    },
};
//# sourceMappingURL=20230624134805-create-friend-reques.js.map