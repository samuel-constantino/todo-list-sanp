const { connection } = require('../connection');
const { serialize } = require('../util/serialize');

const findByUser = async (id) => {
    const db = await connection();
    const tasksList = await db.collection('tasksLists').find(
        { userId: id },
    ).toArray();
    const result = tasksList.map((item) => serialize(item));
    return result;
};

module.exports = { findByUser };
