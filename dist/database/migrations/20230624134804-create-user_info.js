"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up(queryInterface) {
        return queryInterface.createTable('user_info', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: sequelize_1.DataTypes.INTEGER,
            },
            user_id: {
                allowNull: false,
                type: sequelize_1.DataTypes.INTEGER,
                field: 'user_id'
            },
        });
    },
    down(queryInterface) {
        return queryInterface.dropTable('user_info');
    },
};
//# sourceMappingURL=20230624134804-create-user_info.js.map