const { StatusCodes } = require('http-status-codes');
const tasksListService = require('../../services/tasksList');

const update = async (req, res) => {
    const { id } = req.params;
    const { name, tasks, description, status, priority } = req.body;
    const updatedTasksList = await tasksListService.update({
        id,
        name,
        tasks,
        description,
        status,
        priority,
    });
    return res.status(StatusCodes.OK).json(updatedTasksList);
};

module.exports = { update };
