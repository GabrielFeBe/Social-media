import { Response, Request, Router } from 'express';
import UserController from '../controller/User.controller';
import EncrypterCrypto from '../lib/EcrypteCryptor';
import TokenJwt from '../lib/TokenJWT';
import UserModel from '../models/user/User.model';
import UserService from '../services/User.service';

const model = new UserModel();

const encrypter = new EncrypterCrypto();

const tokenGenerator = new TokenJwt();

const service = new UserService(model, encrypter, tokenGenerator);

class UserRouter {
  router = Router();

  controller = new UserController(service);

  constructor() {
    this.inicializatingRoutes();
  }

  getUser() {
    this.router.get('/', async (req:Request, res :Response) => {
      this.controller.getAllUser(req, res);
    });
  }

  getAllUserByName() {
    this.router.get('/names', async (req:Request, res:Response) => {
      this.controller.getAllUserByName(req, res);
    });
  }

  getUserId() {
    this.router.get('/:id', async (req:Request, res:Response) => {
      this.controller.getUserId(req, res);
    });
  }

  deleteUserId() {
    this.router.delete('/:id', async (req:Request, res:Response) => {
      this.controller.deleteUserId(req, res);
    });
  }

  createUser() {
    this.router.post('/', async (req:Request, res:Response) => {
      this.controller.createUser(req, res);
    });
  }

  inicializatingRoutes() {
    this.getAllUserByName();
    this.createUser();
    this.deleteUserId();
    this.getUserId();
    this.getUser();
  }
}

export default UserRouter;