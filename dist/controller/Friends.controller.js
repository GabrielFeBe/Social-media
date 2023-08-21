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
class FriendsController {
    constructor(service) {
        this.Service = service;
    }
    findFriendsUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const response = yield this.Service.findFriendsUserById(+id);
            return res.status(200).json(response);
        });
    }
    createFriendRequest(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.Service.createFriendRequest(req.body);
            return res.status(201).json(response);
        });
    }
    deleteFriendRequest(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const response = yield this.Service.deleteFriendRequest(+id);
            return res.status(204).json(response);
        });
    }
    findAllUserFriends(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.Service.findAllUserFriends();
            return res.status(200).json(response);
        });
    }
    updateFriendRequest(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const response = yield this.Service.updateFriendRequest(+id, req.body);
            return res.status(200).json(response);
        });
    }
}
exports.default = FriendsController;
//# sourceMappingURL=Friends.controller.js.map