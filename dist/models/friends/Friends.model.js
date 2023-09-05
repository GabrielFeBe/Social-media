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
const FriendRequest_1 = __importDefault(require("../../database/models/FriendRequest"));
const User_1 = __importDefault(require("../../database/models/User"));
class FriendsModel {
    constructor() {
        this.UModel = User_1.default;
        this.FModel = FriendRequest_1.default;
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.FModel.create(data);
            return response;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const request = yield this.FModel.findByPk(id);
            if (!request)
                throw new Error('user not found');
            yield request.destroy();
            return 1;
        });
    }
    // eslint-disable-next-line
    findAllUserFriends() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.UModel.findAll({
                attributes: ['id', 'name', 'email'],
                include: [
                    {
                        model: User_1.default,
                        as: 'requester',
                        attributes: ['id', 'name', 'email', 'profilePicture'],
                        through: {
                            attributes: ['status'],
                            where: {},
                        },
                    },
                    {
                        model: User_1.default,
                        as: 'requested',
                        attributes: ['id', 'name', 'email', 'profilePicture'],
                        through: {
                            attributes: ['status'],
                        },
                    },
                ],
            });
            const allAcceptedRequests = response.map((request) => ({
                id: request.id,
                email: request.email,
                profilePicture: request.profilePicture,
                local: request.local,
                name: request.name,
                friends: [...request.requested || [], ...request.requester || []],
                password: request.password,
                description: request.description,
            }));
            return allAcceptedRequests;
        });
    }
    // eslint-disable-next-line
    findFriendsUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.UModel.findByPk(id, {
                attributes: ['id', 'name', 'email', 'profilePicture', 'local', 'description'],
                include: [
                    {
                        model: User_1.default,
                        as: 'requester',
                        attributes: ['id', 'name', 'email', 'profilePicture'],
                        through: {
                            attributes: [],
                            where: {
                                status: true,
                            },
                        },
                    },
                    {
                        model: User_1.default,
                        as: 'requested',
                        attributes: ['id', 'name', 'email', 'profilePicture'],
                        through: {
                            attributes: [],
                            where: {
                                status: true,
                            },
                        },
                    },
                ],
            });
            if (!response)
                throw new Error('falha');
            const obj = {
                id: response.id,
                email: response.email,
                profilePicture: response.profilePicture,
                local: response.local,
                name: response.name,
                friends: [...response.requested || [], ...response.requester || []],
                password: response.password,
                description: response.description,
            };
            return obj;
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const [response] = yield this.FModel.update({ status: data.status }, { where: { id } });
            if (response > 0) {
                const updatedFriendRequest = yield this.FModel.findByPk(id);
                return updatedFriendRequest;
            }
            return null;
        });
    }
}
exports.default = FriendsModel;
//# sourceMappingURL=Friends.model.js.map