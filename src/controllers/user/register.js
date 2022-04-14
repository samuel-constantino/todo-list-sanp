const { StatusCodes } = require('http-status-codes');
const userService = require('../../services/user');

const register = async (req, res) => {
    const { name, email, password } = req.body;
    const data = await userService.register({
        name,
        email,
        password,
    });

    return res.status(StatusCodes.CREATED).json(data);
};

module.exports = { register };