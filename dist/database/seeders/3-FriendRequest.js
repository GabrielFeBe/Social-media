"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up(queryInterface) {
        return queryInterface.bulkInsert('friend_request', [
            {
                requester_id: 1,
                target_id: 2,
                status: false
            },
            {
                requester_id: 3,
                target_id: 2,
                status: true
            },
            {
                requester_id: 3,
                target_id: 1,
                status: true
            }
        ], {});
    },
    down(queryInterface) {
        return queryInterface.bulkDelete('friend_request', {});
    }
};
//# sourceMappingURL=3-FriendRequest.js.map