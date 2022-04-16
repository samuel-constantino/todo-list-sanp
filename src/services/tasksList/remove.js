const tasksListModel = require('../../models/tasksList');
const { ApiError: { badRequest } } = require('../../global/apiError');

const remove = async (id) => {
    const removedTask = await tasksListModel.remove(id);
    if (!removedTask) return badRequest('Tarefa não encontrada');
    return { message: 'Tarefa removida com sucesso' };
};

module.exports = { remove };
