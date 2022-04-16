const { connection } = require('../connection');

const findByUser = async (id) => {
    const db = await connection();
    const tasksList = await db.collection('tasksLists').find(
        { userId: id },
    ).toArray();
    return tasksList;
};

module.exports = { findByUser };
