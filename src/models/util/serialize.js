const serialize = (payload) => {
    const { _id, ...data } = payload;
    return { id: _id, ...data };
};

module.exports = { serialize };
