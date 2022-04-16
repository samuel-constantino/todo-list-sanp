const { StatusCodes } = require('http-status-codes');
const tasksListService = require('../../services/tasksList');

const remove = async (req, res) => {
    const { id } = req.params;
    const removedTask = await tasksListService.remove(id);
    return res.status(StatusCodes.OK).json(removedTask);
};

module.exports = { remove };
