import { QueryInterface } from 'sequelize';



export default {
  up(queryInterface: QueryInterface) {
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

  down(queryInterface: QueryInterface) {
    return queryInterface.bulkDelete('new_users', {});
  }
};
