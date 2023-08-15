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
const express_1 = require("express");
const Post_controller_1 = __importDefault(require("../controller/Post.controller"));
// import Post from '../database/models/Post';
// import User from '../database/models/User';
const Post_model_1 = __importDefault(require("../models/posts/Post.model"));
const Post_service_1 = __importDefault(require("../services/Post.service"));
const model = new Post_model_1.default();
const service = new Post_service_1.default(model);
class PostRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new Post_controller_1.default(service);
        this.inicializatingRoutes();
    }
    getPosts() {
        this.router.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
            // const response = await Post.findAll({ include: [{ model: User, as: 'user' }] });
            // res.status(200).json(response);
            this.controller.getAllPosts(req, res);
        }));
    }
    getPostId() {
        this.router.get('/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
            this.controller.getPostId(req, res);
        }));
    }
    deletePostId() {
        this.router.delete('/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
            this.controller.deletePostId(req, res);
        }));
    }
    createPost() {
        this.router.post('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
            this.controller.createPost(req, res);
        }));
    }
    inicializatingRoutes() {
        this.createPost();
        this.deletePostId();
        this.getPostId();
        this.getPosts();
    }
}
exports.default = PostRouter;
//# sourceMappingURL=posts.routes.js.map