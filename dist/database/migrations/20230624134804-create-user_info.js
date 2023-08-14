"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up(queryInterface) {
        return queryInterface.createTable('post_info', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: sequelize_1.DataTypes.INTEGER,
            },
            userId: {
                allowNull: false,
                type: sequelize_1.DataTypes.INTEGER,
                field: 'user_id'
            },
            postTitle: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
                field: 'post_title'
            },
            postDescription: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: false,
                field: 'post_description'
            },
            isPublic: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: false,
                field: 'is_public'
            },
            postDate: {
                type: sequelize_1.DataTypes.DATE,
                defaultValue: new Date(),
                field: 'post_date'
            }
        });
    },
    down(queryInterface) {
        return queryInterface.dropTable('post_info');
    },
};
//# sourceMappingURL=20230624134804-create-user_info.js.map