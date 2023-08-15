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
Object.defineProperty(exports, "__esModule", { value: true });
class PostController {
    constructor(service) {
        this.Service = service;
    }
    getPostId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const response = yield this.Service.getPostId(+id);
            return res.status(200).json(response);
        });
    }
    createPost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.Service.createPost(req.body);
            return res.status(201).json(response);
        });
    }
    deletePostId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const response = yield this.Service.deletePostId(+id);
            return res.status(204).json(response);
        });
    }
    getAllPosts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.Service.getAllPosts();
            return res.status(200).json(response);
        });
    }
}
exports.default = PostController;
//# sourceMappingURL=Post.controller.js.map