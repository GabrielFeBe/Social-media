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
const PostsComments_1 = __importDefault(require("../../database/models/PostsComments"));
class PostsComments {
    constructor() {
        this.Model = PostsComments_1.default;
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const [response] = yield this.Model.update({ comment: data.comment, commentDate: new Date() }, { where: { id } });
            if (response > 0) {
                const updatedFriendRequest = yield this.Model.findByPk(id);
                return updatedFriendRequest;
            }
            return null;
        });
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.Model.create(data);
            return response;
        });
    }
    findByPostId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.Model.findAll({ where: {
                    postId: id,
                } });
            return response;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.Model.destroy({ where: {
                    id,
                } });
            return response;
        });
    }
}
exports.default = PostsComments;
//# sourceMappingURL=PostsComments.model.js.map