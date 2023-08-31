import { Response, Request, Router } from 'express';
import UserController from '../controller/User.controller';
import EncrypterCrypto from '../lib/EcrypteCryptor';
import TokenJwt from '../lib/TokenJWT';
import UserModel from '../models/user/User.model';
import UserService from '../services/User.service';

const router = Router();

const model = new UserModel();

const encrypter = new EncrypterCrypto();

const tokenGenerator = new TokenJwt();

const service = new UserService(model, encrypter, tokenGenerator);

const controller = new UserController(service);

router.get('/', async (req:Request, res :Response) => controller.getAllUser(req, res));

router.post('/', async (req:Request, res:Response) => controller.createUser(req, res));

router.post('/login', async (req:Request, res:Response) => controller.loginUser(req, res));

router.delete('/:id', async (req:Request, res:Response) => controller.deleteUserId(req, res));

router.get('/names', async (req:Request, res:Response) => controller.getAllUserByName(req, res));

router.get('/:id', async (req:Request, res:Response) => controller.getUserId(req, res));

export default router;