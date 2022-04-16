const { findById } = require('./findById');
const { connection } = require('../connection');

const create = async (newTasksList) => {
    const db = await connection();
    const { insertedId: id } = await db.collection('tasksLists').insertOne(newTasksList);
    const tasksListFound = await findById(id);
    return tasksListFound;
};

module.exports = { create };
