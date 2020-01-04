const { Router } = require('express');
import userController from '../controllers/userController';
import reminderController from '../controllers/reminderController';
import authMiddleware from '../middleware/auth';
const routes = new Router();

routes.post('/users', userController.store);
routes.post('/users/auth', userController.authenticate);

routes.use(authMiddleware);

routes.get('/reminders', reminderController.index);
routes.post('/reminders', reminderController.store);

module.exports = routes;
