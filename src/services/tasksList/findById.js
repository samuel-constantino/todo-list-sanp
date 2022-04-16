const tasksListModel = require('../../models/tasksList');
const { ApiError: { badRequest } } = require('../../global/apiError');

const findById = async (id) => {
    const tasksList = await tasksListModel.findById(id);
    if (!tasksList) badRequest('Lista de tarefas não encontrada');
    return tasksList;
};

module.exports = { findById };
