"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Post_1 = __importDefault(require("../../database/models/Post"));
const PostsComments_1 = __importDefault(require("../../database/models/PostsComments"));
const User_1 = __importDefault(require("../../database/models/User"));
class PostModel {
    constructor() {
        this.Model = Post_1.default;
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.Model.create(data);
            return response;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.Model.destroy({ where: {
                    id,
                } });
            return id;
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.Model.findAll({
                include: [{
                        model: User_1.default,
                        as: 'user',
                        attributes: ['id', 'name', 'email', 'profilePicture'],
                    }, {
                        model: PostsComments_1.default,
                        as: 'comments',
                    }],
            });
            return response;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.Model.findByPk(id);
            return response;
        });
    }
    findPostByUserId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.Model.findAll({ where: {
                    userId: id,
                } });
            return response;
        });
    }
}
exports.default = PostModel;
//# sourceMappingURL=Post.model.js.map