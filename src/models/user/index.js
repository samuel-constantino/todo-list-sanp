const { register } = require('./register');
const { login } = require('./login');
const { findByEmail } = require('./findByEmail');

module.exports = {
    register,
    login,
    findByEmail,
};
