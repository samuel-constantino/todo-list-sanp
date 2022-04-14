const express = require('express');
const rescue = require('express-rescue');
const userController = require('../controllers/user');

const registerRouter = express.Router();

registerRouter.post('/', rescue(userController.register));

module.exports = { registerRouter };
