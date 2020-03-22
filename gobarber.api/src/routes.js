import { Router } from 'express';

import multer from 'multer';
import multerConfig from './config/upload/multer';

import UserController from './app/controllers/UserController';
import SessionControler from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';

import FileController from './app/controllers/FileController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/sessions', SessionControler.store);

routes.put('/users', authMiddleware, UserController.update);
routes.post('/users', UserController.store);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
