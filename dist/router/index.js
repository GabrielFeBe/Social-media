"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const friends_routes_1 = __importDefault(require("./friends.routes"));
const posts_routes_1 = __importDefault(require("./posts.routes"));
const user_routes_1 = __importDefault(require("./user.routes"));
const TokenMiddkeware_1 = __importDefault(require("../middleware/TokenMiddkeware"));
const router = (0, express_1.Router)();
// const userRoutes = new UserRouter();
router.use('/posts', TokenMiddkeware_1.default.decoder, posts_routes_1.default);
// router.use('/user', userRoutes.router);
router.use('/friends', TokenMiddkeware_1.default.decoder, friends_routes_1.default);
router.use('/user', user_routes_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map