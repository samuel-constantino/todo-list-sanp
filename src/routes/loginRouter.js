const express = require('express');
const rescue = require('express-rescue');
const userController = require('../controllers/user');

const loginRouter = express.Router();

loginRouter.post('/', rescue(userController.login));

module.exports = { loginRouter };
