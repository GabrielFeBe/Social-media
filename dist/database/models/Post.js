"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_1 = __importDefault(require("./index"));
const User_1 = __importDefault(require("./User"));
const sequelize = index_1.default;
class Post extends sequelize_1.Model {
}
Post.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
    },
    userId: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
        field: 'user_id',
    },
    postTitle: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    postDescription: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
        field: 'post_description',
    },
    isPublic: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        field: 'is_public',
    },
    postDate: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: new Date(),
        field: 'post_date',
    },
}, {
    sequelize,
    tableName: 'post_info',
    timestamps: false,
    underscored: true,
});
Post.belongsTo(User_1.default, { foreignKey: { allowNull: false, name: 'userId' } });
User_1.default.hasMany(Post, { foreignKey: 'userId', as: 'posts' });
exports.default = Post;
//# sourceMappingURL=Post.js.map