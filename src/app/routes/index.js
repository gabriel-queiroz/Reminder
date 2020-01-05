import { Router } from 'express';
import userController from '../controllers/userController';
import reminderController from '../controllers/reminderController';
import authMiddleware from '../middleware/auth';
const routes = new Router();

routes.get('/', (req, res) => {
  throw new Error('aconteceu erro');
});
routes.post('/users', userController.store);
routes.post('/users/auth', userController.authenticate);

routes.use(authMiddleware);

routes.get('/reminders', reminderController.index);
routes.post('/reminders', reminderController.store);
routes.put('/reminders/:id', reminderController.update);
routes.delete('/reminders/:id', reminderController.update);

module.exports = routes;
