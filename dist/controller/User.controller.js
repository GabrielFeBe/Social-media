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
class UserController {
    constructor(service) {
        this.Service = service;
    }
    getUserId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const response = yield this.Service.getUserId(+id);
            return res.status(200).json({ user: response });
        });
    }
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.Service.createUser(req.body);
            return res.status(201).json({ userCreated: response });
        });
    }
    deleteUserId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const response = yield this.Service.deleteUserId(+id);
            return res.status(204).json(response);
        });
    }
    getAllUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.Service.getAllUser();
            return res.status(200).json({ users: response });
        });
    }
    getAllUserByName(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name } = req.body;
            const response = yield this.Service.getAllUserByName(name);
            return res.status(200).json({ users: response });
        });
    }
    loginUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            const response = yield this.Service.loginUser(email, password);
            return res.status(200).json({ token: response });
        });
    }
}
exports.default = UserController;
//# sourceMappingURL=User.controller.js.map