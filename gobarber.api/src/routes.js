import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Taysa',
    email: 'taysgarcia',
    password_hash: 'fadababaca',
    provider: true,
  });

  return res.json(user);
});


export default routes;
