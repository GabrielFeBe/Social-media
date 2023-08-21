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
class FriendsService {
    constructor(model) {
        this.Model = model;
    }
    findFriendsUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.Model.findFriendsUserById(id);
            return response;
        });
    }
    createFriendRequest(post) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.Model.create(post);
            return response;
        });
    }
    deleteFriendRequest(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.Model.delete(id);
            return response;
        });
    }
    findAllUserFriends() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.Model.findAllUserFriends();
            return response;
        });
    }
    updateFriendRequest(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.Model.update(id, data);
            return response;
        });
    }
}
exports.default = FriendsService;
//# sourceMappingURL=Friends.service.js.map