const tasksListModel = require('../../models/tasksList');

const findByUser = async (id) => {
    const tasksLists = await tasksListModel.findByUser(id);
    return tasksLists;
};

module.exports = { findByUser };
