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
const router = (0, express_1.Router)();
const model = new Post_model_1.default();
const service = new Post_service_1.default(model);
const controller = new Post_controller_1.default(service);
// class PostRouter {
//   router = Router();
//   constructor() {
//     this.inicializatingRoutes();
//   }
//   getPosts() {
//     this.router.get('/', async (req:Request, res :Response) => {
//       // const response = await Post.findAll({ include: [{ model: User, as: 'user' }] });
//       // res.status(200).json(response);
//       this.controller.getAllPosts(req, res);
//     });
//   }
//   getPostId() {
//     this.router.get('/:id', async (req:Request, res:Response) => {
//       this.controller.getPostId(req, res);
//     });
//   }
//   deletePostId() {
//     this.router.delete('/:id', async (req:Request, res:Response) => {
//       this.controller.deletePostId(req, res);
//     });
//   }
//   createPost() {
//     this.router.post('/', async (req:Request, res:Response) => {
//       this.controller.createPost(req, res);
//     });
//   }
//   inicializatingRoutes() {
//     this.createPost();
//     this.deletePostId();
//     this.getPostId();
//     this.getPosts();
//   }
// }
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () { 
// const response = await Post.findAll({ include: [{ model: User, as: 'user' }] });
// res.status(200).json(response);
return controller.getAllPosts(req, res); }));
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () { return controller.getPostId(req, res); }));
router.get('/user/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () { return controller.findPostByUserId(req, res); }));
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () { return controller.deletePostId(req, res); }));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () { return controller.createPost(req, res); }));
exports.default = router;
//# sourceMappingURL=posts.routes.js.map