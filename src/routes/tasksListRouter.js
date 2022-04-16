const express = require('express');
const rescue = require('express-rescue');
const tasksListController = require('../controllers/tasksList');
const { auth } = require('../middlewares');

const tasksListRouter = express.Router();

tasksListRouter.get('/', auth, rescue(tasksListController.findByUser));
tasksListRouter.get('/:id', auth, rescue(tasksListController.findById));

module.exports = { tasksListRouter };
