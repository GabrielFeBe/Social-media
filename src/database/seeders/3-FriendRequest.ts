import { QueryInterface } from 'sequelize';


export default {
  up(queryInterface: QueryInterface) {
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

  down(queryInterface: QueryInterface) {
    return queryInterface.bulkDelete('friend_request', {});
  }
};
