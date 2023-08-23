"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EcrypteCryptor_1 = __importDefault(require("../../lib/EcrypteCryptor"));
const encrypter = new EcrypteCryptor_1.default();
const password = encrypter.encrypt('teste');
exports.default = {
    up(queryInterface) {
        return queryInterface.bulkInsert('new_users', [
            {
                email: 'hu3master.zord@hotmail.com',
                password: password,
                name: 'Gabriel Fernandes',
                profile_picture: 'alasdkasodsakodosa',
                local: 'Natal',
                description: 'chimp bir sad dasd asd asd asd asd asd asd asd as fafasfasfas fas fasfj iasijf asjif jiasjf jioasf asfjio asjif iasiof jasf iasjfo iasjiof asjiifo asji fajsifji asjfi asojif saji fjiasof jiasijfo asjiof jasjfasjiof'
            },
            {
                email: 'cornoGado@hotmail.com',
                password: 'alohapedrita',
                name: 'Matheus Ramos',
                profile_picture: 'alasdkasodsakodosa',
                local: 'Recife',
                description: 'chimp bir sad dasd asd asd asd asd asd asd asd as fafasfasfas fas fasfj iasijf asjif jiasjf jioasf asfjio asjif iasiof jasf iasjfo iasjiof asjiifo asji fajsifji asjfi asojif saji fjiasof jiasijfo asjiof jasjfasjiof'
            },
            {
                email: 'rafalPif@hotmail.com',
                password: 'macarrãodepizza',
                name: 'Rafael Soares',
                profile_picture: 'alasdkasodsakodosa',
                local: 'São Paulo',
                description: 'chimp bir sad dasd asd asd asd asd asd asd asd as fafasfasfas fas fasfj iasijf asjif jiasjf jioasf asfjio asjif iasiof jasf iasjfo iasjiof asjiifo asji fajsifji asjfi asojif saji fjiasof jiasijfo asjiof jasjfasjiof'
            },
        ], {});
    },
    down(queryInterface) {
        return queryInterface.bulkDelete('new_users', {});
    }
};
//# sourceMappingURL=1-User.js.map