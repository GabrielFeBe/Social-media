"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mockPost = {
    is_public: true,
    post_description: 'dsada asd asd asd as ad a asd as das dasd asd as das das das das gato do shadow',
    post_title: 'Hasbula Imperador',
    user_id: 1,
    post_date: new Date()
};
exports.default = {
    up(queryInterface) {
        return queryInterface.bulkInsert('post_info', [
            mockPost
        ], {});
    },
    down(queryInterface) {
        return queryInterface.bulkDelete('post_info', {});
    }
};
//# sourceMappingURL=2-Posts.js.map