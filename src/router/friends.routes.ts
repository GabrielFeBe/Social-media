import { Response, Request, Router } from 'express';
import FriendsController from '../controller/Friends.controller';
import FriendsModel from '../models/friends/Friends.model';
import FriendsService from '../services/Friends.service';

const model = new FriendsModel();

const service = new FriendsService(model);

class FriendsRouter {
  router = Router();

  controller = new FriendsController(service);

  constructor() {
    this.inicializatingRoutes();
  }

  getFriendsUserById() {
    this.router.get('/:id', async (req:Request, res :Response) => {
      this.controller.findFriendsUserById(req, res);
    });
  }

  findAllUserFriends() {
    this.router.get('/', async (req:Request, res:Response) => {
      this.controller.findAllUserFriends(req, res);
    });
  }

  createFriendRequest() {
    this.router.post('/', async (req:Request, res:Response) => {
      this.controller.createFriendRequest(req, res);
    });
  }

  deleteFriendRequest() {
    this.router.delete('/:id', async (req:Request, res:Response) => {
      this.controller.deleteFriendRequest(req, res);
    });
  }

  updateFriendRequest() {
    this.router.patch('/:id', async (req:Request, res:Response) => {
      this.controller.updateFriendRequest(req, res);
    });
  }
 
  inicializatingRoutes() {
    this.findAllUserFriends();
    this.deleteFriendRequest();
    this.createFriendRequest();
    this.getFriendsUserById();
    this.updateFriendRequest();
  }
}

export default FriendsRouter;