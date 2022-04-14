const md5 = require('md5');
const userModel = require('../../models/user');
const { registerValidation } = require('./validations');
const { ApiError: { conflict } } = require('../../global/apiError');

const register = async (newUser) => {
    const { name, email, password } = newUser;

    registerValidation(newUser);

    const checkUser = await userModel.findByEmail(email);
    if (checkUser) conflict('Usuário já existe');

    const data = await userModel.register({
        name,
        email,
        password: md5(password),
    });

    return data;
};

module.exports = { register };