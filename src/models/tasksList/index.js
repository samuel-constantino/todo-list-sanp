const { findByUser } = require('./findByUser');
const { findById } = require('./findById');
const { create } = require('./create');
const { updateById: update } = require('./update');
const { removeById: remove } = require('./remove');

module.exports = {
    findByUser,
    findById,
    create,
    update,
    remove,
};
