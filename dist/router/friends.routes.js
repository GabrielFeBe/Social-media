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
const Friends_controller_1 = __importDefault(require("../controller/Friends.controller"));
const Friends_model_1 = __importDefault(require("../models/friends/Friends.model"));
const Friends_service_1 = __importDefault(require("../services/Friends.service"));
const model = new Friends_model_1.default();
const service = new Friends_service_1.default(model);
const router = (0, express_1.Router)();
const controller = new Friends_controller_1.default(service);
// class FriendsRouter {
//   constructor() {
//     this.inicializatingRoutes();
//   }
//   getFriendsUserById() {
//     this.router.get('/:id', async (req:Request, res :Response) => {
//       this.controller.findFriendsUserById(req, res);
//     });
//   }
//   findAllUserFriends() {
//     this.router.get('/', async (req:Request, res:Response) => {
//       this.controller.findAllUserFriends(req, res);
//     });
//   }
//   createFriendRequest() {
//     this.router.post('/', async (req:Request, res:Response) => {
//       this.controller.createFriendRequest(req, res);
//     });
//   }
//   deleteFriendRequest() {
//     this.router.delete('/:id', async (req:Request, res:Response) => {
//       this.controller.deleteFriendRequest(req, res);
//     });
//   }
//   updateFriendRequest() {
//     this.router.patch('/:id', async (req:Request, res:Response) => {
//       this.controller.updateFriendRequest(req, res);
//     });
//   }
//   inicializatingRoutes() {
//     this.findAllUserFriends();
//     this.deleteFriendRequest();
//     this.createFriendRequest();
//     this.getFriendsUserById();
//     this.updateFriendRequest();
//   }
// }
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () { return controller.findAllUserFriends(req, res); }));
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () { return controller.findFriendsUserById(req, res); }));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () { return controller.createFriendRequest(req, res); }));
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () { return controller.deleteFriendRequest(req, res); }));
router.patch('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () { return controller.updateFriendRequest(req, res); }));
exports.default = router;
//# sourceMappingURL=friends.routes.js.map