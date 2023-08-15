"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up(queryInterface) {
        return queryInterface.bulkInsert('friend_request', [
            {
                requester_id: 1,
                target_id: 2
            }
        ], {});
    },
    down(queryInterface) {
        return queryInterface.bulkDelete('friend_request', {});
    }
};
//# sourceMappingURL=3-FriendRequest.js.map