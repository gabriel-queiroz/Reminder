const { Router } = require('express');
const reminderController = require('../controllers/reminderController');
const routes = new Router();

routes.get('/reminders', reminderController.index);
routes.post('/reminders', reminderController.store);

module.exports = routes;
