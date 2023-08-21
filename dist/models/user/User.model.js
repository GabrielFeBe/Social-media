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
const sequelize_1 = require("sequelize");
const User_1 = __importDefault(require("../../database/models/User"));
class UserModel {
    constructor() {
        this.Model = User_1.default;
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = this.Model.create(data);
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
    // eslint-disable-next-line
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const perPage = 100;
            const page = 1;
            const response = yield this.Model.findAll({
                attributes: ['id', 'name', 'email'],
                include: [
                    {
                        model: User_1.default,
                        as: 'requested',
                        attributes: ['id', 'name', 'email', 'profilePicture'],
                        through: {
                            attributes: [],
                            where: {
                                status: false,
                            },
                        },
                    },
                ],
                offset: page * perPage - perPage,
                limit: perPage,
            });
            return response;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.Model.findByPk(id, {
                attributes: ['id', 'name', 'email'],
                include: [
                    {
                        model: User_1.default,
                        as: 'requested',
                        attributes: ['id', 'name', 'email'],
                        through: {
                            attributes: [],
                        },
                    },
                ],
            });
            return response;
        });
    }
    findAllByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.Model.findAll({
                where: {
                    name: {
                        [sequelize_1.Op.like]: `%${name}%`,
                    },
                },
            });
            return response;
        });
    }
}
exports.default = UserModel;
//# sourceMappingURL=User.model.js.map