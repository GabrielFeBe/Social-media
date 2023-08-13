"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up(queryInterface) {
        return queryInterface.createTable('new_users', {
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
        });
    },
    down(queryInterface) {
        return queryInterface.dropTable('new_users');
    },
};
//# sourceMappingURL=20230624132559-create-users-table.js.map