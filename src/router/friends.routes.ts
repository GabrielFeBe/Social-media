import { Response, Request, Router } from 'express';
import FriendsController from '../controller/Friends.controller';
import FriendsModel from '../models/friends/Friends.model';
import FriendsService from '../services/Friends.service';

const model = new FriendsModel();

const service = new FriendsService(model);

const router = Router();

const controller = new FriendsController(service);

router.get('/', async (req:Request, res:Response) => controller.findAllUserFriends(req, res));

router.get('/:id', async (req:Request, res :Response) => controller.findFriendsUserById(req, res));

router.post('/', async (req:Request, res:Response) => controller.createFriendRequest(req, res));

router.delete('/:id', async (req:Request, res:Response) =>
  controller.deleteFriendRequest(req, res));

router.patch('/:id', async (req:Request, res:Response) => controller.updateFriendRequest(req, res));

export default router;