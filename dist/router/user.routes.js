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
const User_controller_1 = __importDefault(require("../controller/User.controller"));
const User_model_1 = __importDefault(require("../models/user/User.model"));
const User_service_1 = __importDefault(require("../services/User.service"));
const model = new User_model_1.default();
const service = new User_service_1.default(model);
class UserRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new User_controller_1.default(service);
        this.inicializatingRoutes();
    }
    getUser() {
        this.router.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
            this.controller.getAllUser(req, res);
        }));
    }
    getAllUserByName() {
        this.router.get('/names', (req, res) => __awaiter(this, void 0, void 0, function* () {
            this.controller.getAllUserByName(req, res);
        }));
    }
    getUserId() {
        this.router.get('/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
            this.controller.getUserId(req, res);
        }));
    }
    deleteUserId() {
        this.router.delete('/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
            this.controller.deleteUserId(req, res);
        }));
    }
    createUser() {
        this.router.post('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
            this.controller.createUser(req, res);
        }));
    }
    inicializatingRoutes() {
        this.getAllUserByName();
        this.createUser();
        this.deleteUserId();
        this.getUserId();
        this.getUser();
    }
}
exports.default = UserRouter;
//# sourceMappingURL=user.routes.js.map