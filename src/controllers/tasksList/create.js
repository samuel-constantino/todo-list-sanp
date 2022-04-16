const { StatusCodes } = require('http-status-codes');
const tasksListService = require('../../services/tasksList');

const create = async (req, res) => {
    const { id: userId } = req.loggedUser;
    const { name, tasks, description, status, priority } = req.body;
    const tasksList = await tasksListService.create({
        userId,
        name,
        tasks,
        description,
        status,
        priority,
    });
    return res.status(StatusCodes.OK).json(tasksList);
};

module.exports = { create };
