const { StatusCodes } = require('http-status-codes');
const tasksListService = require('../../services/tasksList');

const findById = async (req, res) => {
    const { id } = req.params;
    const tasksList = await tasksListService.findById(id);
    return res.status(StatusCodes.OK).json(tasksList);
};

module.exports = { findById };
