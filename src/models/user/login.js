const { connection } = require('../connection');
const { serialize } = require('../util/serialize');

const login = async ({ email, password }) => {
    const db = await connection();
    const userFound = await db.collection('users').findOne(
        { email, password },
        { projection: { password: false } },
    );
    return serialize(userFound);
};

module.exports = { login };
