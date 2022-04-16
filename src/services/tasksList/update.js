const tasksListModel = require('../../models/tasksList');
const { updateTasksListValidation } = require('./validations');

const update = async (tasksList) => {
    updateTasksListValidation(tasksList);

    const updatedTasksList = await tasksListModel.update(tasksList);
    return updatedTasksList;
};

module.exports = { update };
