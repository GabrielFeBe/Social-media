import { QueryInterface } from 'sequelize';
import EncrypterCrypto from '../../lib/EcrypteCryptor';
const encrypter = new EncrypterCrypto()

const password = encrypter.encrypt('teste')
export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.bulkInsert('new_users', [
      {
        email: 'hu3master.zord@hotmail.com',
        password: password,
        name: 'Gabriel Fernandes',
        profile_picture: 'alasdkasodsakodosa',
        local: 'Natal',
        description: 'chimp bir sad dasd asd asd asd asd asd asd asd as fafasfasfas fas fasfj iasijf asjif jiasjf jioasf asfjio asjif iasiof jasf iasjfo iasjiof asjiifo asji fajsifji asjfi asojif saji fjiasof jiasijfo asjiof jasjfasjiof'
      },
      {
        email: 'cornoGado@hotmail.com',
        password: 'alohapedrita',
        name: 'Matheus Ramos',
        profile_picture: 'alasdkasodsakodosa',
        local: 'Recife',
        description: 'chimp bir sad dasd asd asd asd asd asd asd asd as fafasfasfas fas fasfj iasijf asjif jiasjf jioasf asfjio asjif iasiof jasf iasjfo iasjiof asjiifo asji fajsifji asjfi asojif saji fjiasof jiasijfo asjiof jasjfasjiof'
      },
      {
        email: 'rafalPif@hotmail.com',
        password: 'macarrãodepizza',
        name: 'Rafael Soares',
        profile_picture: 'alasdkasodsakodosa',
        local: 'São Paulo',
        description: 'chimp bir sad dasd asd asd asd asd asd asd asd as fafasfasfas fas fasfj iasijf asjif jiasjf jioasf asfjio asjif iasiof jasf iasjfo iasjiof asjiifo asji fajsifji asjfi asojif saji fjiasof jiasijfo asjiof jasjfasjiof'
      },
    ], {});
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.bulkDelete('new_users', {});
  }
};
