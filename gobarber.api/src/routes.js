import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionControler from './app/controllers/SessionController';

const routes = new Router();

routes.post('/sessions', SessionControler.store);

routes.post('/users', UserController.store);

export default routes;
