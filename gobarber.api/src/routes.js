import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionControler from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/sessions', SessionControler.store);

routes.put('/users', authMiddleware, UserController.update);
routes.post('/users', UserController.store);

export default routes;
