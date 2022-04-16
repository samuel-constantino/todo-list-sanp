const express = require('express');
const rescue = require('express-rescue');
const tasksListController = require('../controllers/tasksList');
const { auth } = require('../middlewares');

const tasksListRouter = express.Router();

tasksListRouter.get('/', auth, rescue(tasksListController.findByUser));
tasksListRouter.get('/:id', auth, rescue(tasksListController.findById));
tasksListRouter.post('/', auth, rescue(tasksListController.create));

module.exports = { tasksListRouter };
