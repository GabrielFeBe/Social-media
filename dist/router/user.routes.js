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
const EcrypteCryptor_1 = __importDefault(require("../lib/EcrypteCryptor"));
const TokenJWT_1 = __importDefault(require("../lib/TokenJWT"));
const User_model_1 = __importDefault(require("../models/user/User.model"));
const User_service_1 = __importDefault(require("../services/User.service"));
const router = (0, express_1.Router)();
const model = new User_model_1.default();
const encrypter = new EcrypteCryptor_1.default();
const tokenGenerator = new TokenJWT_1.default();
const service = new User_service_1.default(model, encrypter, tokenGenerator);
const controller = new User_controller_1.default(service);
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () { return controller.getAllUser(req, res); }));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () { return controller.createUser(req, res); }));
router.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () { return controller.loginUser(req, res); }));
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () { return controller.deleteUserId(req, res); }));
router.get('/names', (req, res) => __awaiter(void 0, void 0, void 0, function* () { return controller.getAllUserByName(req, res); }));
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () { return controller.getUserId(req, res); }));
exports.default = router;
//# sourceMappingURL=user.routes.js.map