const { StatusCodes } = require('http-status-codes');
const userService = require('../../services/user');

const login = async (req, res) => {
    const { email, password } = req.body;
    const data = await userService.login({ email, password });
    return res.status(StatusCodes.OK).json(data);
};

module.exports = { login };
