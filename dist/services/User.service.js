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
const User_1 = __importDefault(require("../class/User"));
class UserService {
    constructor(model, encrypter, tokenGen) {
        this.Model = model;
        this.EncrypterC = encrypter;
        this.TokenGenerator = tokenGen;
    }
    getUserId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.Model.findById(id);
            return response;
        });
    }
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const encrypted = this.EncrypterC.encrypt(user.password);
            const userClas = new User_1.default(Object.assign(Object.assign({}, user), { password: encrypted }));
            const response = yield this.Model.create(userClas.getUser());
            return response;
        });
    }
    deleteUserId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.Model.delete(id);
            return response;
        });
    }
    getAllUser() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.Model.findAll();
            return response;
        });
    }
    getAllUserByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.Model.findAllByName(name);
            return response;
        });
    }
    loginUser(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.Model.findUserByEmail(email);
            if (!response)
                throw new Error('Usuario não existe');
            console.log(this.EncrypterC.compare(password, response === null || response === void 0 ? void 0 : response.password));
            if (!this.EncrypterC.compare(password, response.password))
                throw new Error('Senha invalida');
            // const token = this.TokenGenerator.generate({ email:
            //    response.email,
            // password: response.password,
            // id: response.id as number });
            return 'alo';
        });
    }
}
exports.default = UserService;
//# sourceMappingURL=User.service.js.map