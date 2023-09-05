"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_1 = __importDefault(require("./index"));
const User_1 = __importDefault(require("./User"));
const Post_1 = __importDefault(require("./Post"));
const sequelize = index_1.default;
class PostsComments extends sequelize_1.Model {
}
PostsComments.init({
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
    comment: {
        allowNull: false,
        type: sequelize_1.DataTypes.TEXT,
    },
    commentDate: {
        type: sequelize_1.DataTypes.DATE,
        field: 'comment_date',
        allowNull: true,
        defaultValue: new Date()
    }, postId: {
        allowNull: false,
        type: sequelize_1.DataTypes.NUMBER,
        field: 'post_id'
    }
}, {
    sequelize,
    tableName: 'post_comments',
    timestamps: false,
    underscored: true,
});
PostsComments.belongsTo(User_1.default, { foreignKey: { allowNull: false, name: 'userId' }, as: 'user' });
User_1.default.hasMany(PostsComments, { foreignKey: 'userId', as: 'postsComments' });
Post_1.default.hasMany(PostsComments, { foreignKey: 'postId', as: 'comments' });
exports.default = PostsComments;
//# sourceMappingURL=PostsComments.js.map