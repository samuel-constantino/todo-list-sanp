const { ObjectId } = require('mongodb');
const { connection } = require('../connection');

const findById = async (id) => {
    const db = await connection();
    const userFound = await db.collection('users').findOne(
        { _id: ObjectId(id) },
        { projection: { password: false } },
    );
    return userFound;
};

module.exports = { findById };
