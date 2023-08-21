"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const friends_routes_1 = __importDefault(require("./friends.routes"));
const posts_routes_1 = __importDefault(require("./posts.routes"));
const user_routes_1 = __importDefault(require("./user.routes"));
const router = (0, express_1.Router)();
const postRoutes = new posts_routes_1.default();
const userRoutes = new user_routes_1.default();
const friendsRoutes = new friends_routes_1.default();
router.use('/posts', postRoutes.router);
router.use('/user', userRoutes.router);
router.use('/friends', friendsRoutes.router);
// router.get('/friends', async (req:Request, res :Response) => {
//   const response = await friend.findAllUserFriends();
//   return res.status(200).json(response);
// });
exports.default = router;
//# sourceMappingURL=index.js.map