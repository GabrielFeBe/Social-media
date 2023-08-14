import { QueryInterface } from 'sequelize';



export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.bulkInsert('new_users', [
      {
        email: 'hu3master.zord@hotmail.com',
        password: 'teste',
        name: 'Gabriel Fernandes',
      },
    ], {});
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.bulkDelete('new_users', {});
  }
};
