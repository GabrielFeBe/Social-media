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
const Post_1 = __importDefault(require("../class/Post"));
class PostService {
    constructor(model) {
        this.Model = model;
    }
    getPostId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.Model.findById(id);
            return response;
        });
    }
    createPost(post) {
        return __awaiter(this, void 0, void 0, function* () {
            const postClass = new Post_1.default(post);
            const response = yield this.Model.create(postClass.getPost());
            return response;
        });
    }
    deletePostId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.Model.delete(id);
            return response;
        });
    }
    getAllPosts() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.Model.findAll();
            return response;
        });
    }
    findPostByUserId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.Model.findPostByUserId(id);
            return response;
        });
    }
}
exports.default = PostService;
//# sourceMappingURL=Post.service.js.map