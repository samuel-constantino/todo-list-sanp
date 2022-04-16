const { findById } = require('./findById');
const { connection } = require('../connection');
const { serialize } = require('../util/serialize');
const { sendEmail } = require('../util/sendEmail');
require('dotenv').config();

const register = async (newUser) => {
    const db = await connection();
    const { insertedId: id } = await db.collection('users').insertOne(newUser);
    const userFound = await findById(id);

    if (process.env.SEND_EMAIL === 'true') {
        console.log(process.env.SEND_EMAIL);
        const { name, email, password } = newUser;
        sendEmail({ name, email, password });
    }

    return serialize(userFound);
};

module.exports = { register };
