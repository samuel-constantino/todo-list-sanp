const { ObjectId } = require('mongodb');
const { connection } = require('../connection');
const { serialize } = require('../util/serialize');

const updateById = async (tasksList) => {
    const { id, name, tasks, description, status, priority } = tasksList;
    
    const db = await connection();

    const query = { _id: ObjectId(id) };
    const update = { $set: { name, tasks, description, status, priority } };
    const options = { returnDocument: 'after' };

    const { value: updatedTask } = await db.collection('tasksLists').findOneAndUpdate(
        query,
        update,
        options,
    );
    return serialize(updatedTask);
};

module.exports = { updateById };