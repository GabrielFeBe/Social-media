"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up(queryInterface) {
        return queryInterface.createTable('post_comments', {
            id: {
                autoIncrement: true,
                primaryKey: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false
            },
            postId: {
                type: sequelize_1.DataTypes.INTEGER,
                field: 'post_id',
                allowNull: false
            },
            comment: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: false
            },
            userId: {
                type: sequelize_1.DataTypes.INTEGER,
                field: 'user_id',
                allowNull: false
            },
            commentDate: {
                type: sequelize_1.DataTypes.DATE,
                field: 'comment_date',
                defaultValue: sequelize_1.DataTypes.NOW
            }
        });
    },
    down(queryInterface) {
        return queryInterface.dropTable('post_comments');
    },
};
//# sourceMappingURL=333333333333333-create-posts-comment-table.js.map