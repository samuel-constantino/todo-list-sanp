const md5 = require('md5');
const userModel = require('../../models/user');
const { loginValidation } = require('./validations');
const { ApiError: { badRequest } } = require('../../global/apiError');
const { getToken } = require('../../global/token');

const login = async (user) => {
    loginValidation(user);
    const { email, password } = user;

    const userFound = await userModel.findByEmail(email);
    if (!userFound) badRequest('Usuário não exite');

    const result = await userModel.login({
        email,
        password: md5(password),
    });
    if (!result) badRequest('Invalid password');

    const token = getToken(result);

    return { ...result, token };
};

module.exports = { login };
