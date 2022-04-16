const { findById } = require('./findById');
const { connection } = require('../connection');
const { serialize } = require('../util/serialize');

const register = async (newUser) => {
    const db = await connection();

    const { insertedId: id } = await db.collection('users').insertOne(newUser);
    const userFound = await findById(id);

    return serialize(userFound);
};

module.exports = { register };
