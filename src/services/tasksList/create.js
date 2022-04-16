const tasksListModel = require('../../models/tasksList');
const { addTasksListValidation } = require('./validations');

const create = async (newTaskslist) => {
    addTasksListValidation(newTaskslist);
    
    const result = await tasksListModel.create(newTaskslist);
    return result;
};

module.exports = { create };
