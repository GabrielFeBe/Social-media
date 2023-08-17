"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up(queryInterface) {
        return queryInterface.bulkInsert('new_users', [
            {
                email: 'hu3master.zord@hotmail.com',
                password: 'teste',
                name: 'Gabriel Fernandes',
                profile_picture: 'alasdkasodsakodosa',
                local: 'Natal',
                description: 'random'
            },
            {
                email: 'cornoGado@hotmail.com',
                password: 'alohapedrita',
                name: 'Matheus Ramos',
                profile_picture: 'alasdkasodsakodosa',
                local: 'Recife',
                description: 'chimp bir'
            },
            {
                email: 'rafalPif@hotmail.com',
                password: 'macarrãodepizza',
                name: 'Rafael Soares',
                profile_picture: 'alasdkasodsakodosa',
                local: 'São Paulo',
                description: 'UM cara bem diferente'
            },
        ], {});
    },
    down(queryInterface) {
        return queryInterface.bulkDelete('new_users', {});
    }
};
//# sourceMappingURL=1-User.js.map