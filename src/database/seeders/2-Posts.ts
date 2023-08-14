import { QueryInterface } from 'sequelize';

const mockPost = {
  is_public: true,
  post_description: 'dsada asd asd asd as ad a asd as das dasd asd as das das das das gato do shadow',
  post_title: 'Hasbula Imperador',
  user_id: 1,
  post_date: new Date()
}


export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.bulkInsert('post_info', [
      mockPost
    ], {});
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.bulkDelete('post_info', {});
  }
};
