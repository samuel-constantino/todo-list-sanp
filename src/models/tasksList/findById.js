const { ObjectId } = require('mongodb');
const { connection } = require('../connection');
const { serialize } = require('../util/serialize');

const findById = async (id) => {
    const db = await connection();
    const taskFound = await db.collection('tasksLists').findOne({
        _id: ObjectId(id),
    });

    return serialize(taskFound);
};

module.exports = { findById };