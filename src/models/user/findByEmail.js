const { connection } = require('../connection');

const findByEmail = async (email) => {
    const db = await connection();
    const userFound = await db.collection('users').findOne(
        { email },
        { projection: { password: false } },
    );
    return userFound;
};

module.exports = { findByEmail };
