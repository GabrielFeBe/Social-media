"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up(queryInterface) {
        return queryInterface.bulkInsert('new_users', [
            {
                email: 'hu3master.zord@hotmail.com',
                password: 'teste',
                name: 'Gabriel Fernandes',
            },
            {
                email: 'cornoGado@hotmail.com',
                password: 'alohapedrita',
                name: 'Matheus Ramos',
            },
        ], {});
    },
    down(queryInterface) {
        return queryInterface.bulkDelete('new_users', {});
    }
};
//# sourceMappingURL=1-User.js.map