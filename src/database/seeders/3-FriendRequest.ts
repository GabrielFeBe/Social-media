import { QueryInterface } from 'sequelize';


export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.bulkInsert('friend_request', [
      {
        requester_id: 1,
        target_id: 2
      }
    ], {});
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.bulkDelete('friend_request', {});
  }
};
