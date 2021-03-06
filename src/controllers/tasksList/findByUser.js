const { StatusCodes } = require('http-status-codes');
const tasksListService = require('../../services/tasksList');

const findByUser = async (req, res) => {
    const { id } = req.loggedUser;
    const tasksLists = await tasksListService.findByUser(id);
    return res.status(StatusCodes.OK).json(tasksLists);
};

module.exports = { findByUser };
