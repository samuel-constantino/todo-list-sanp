const express = require('express');
const { registerRouter } = require('./registerRouter');
const { loginRouter } = require('./loginRouter');
const { tasksListRouter } = require('./tasksListRouter');
const { error, swagger } = require('../middlewares');

const router = express.Router({ mergeParams: true });

router.use('/swagger', swagger.serve, swagger.setup);

router.use('/register', registerRouter);
router.use('/login', loginRouter);
router.use('/task', tasksListRouter);

router.use(error);

module.exports = { router };
