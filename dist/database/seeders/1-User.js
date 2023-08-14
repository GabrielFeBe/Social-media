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
        ], {});
    },
    down(queryInterface) {
        return queryInterface.bulkDelete('new_users', {});
    }
};
//# sourceMappingURL=1-User.js.map