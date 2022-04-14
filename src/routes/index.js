const express = require('express');
const { error, swagger } = require('../middlewares');

const router = express.Router({ mergeParams: true });

router.use('/swagger', swagger.serve, swagger.setup);

router.get('/', (_req, res) => res.status(200).json({ message: 'hello world' }));

router.use(error);

module.exports = { router };
