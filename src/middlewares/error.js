const { ApiError } = require('../global/apiError');

const error = (err, _req, res, _next) => {
    console.log(err);
    if (err instanceof ApiError) {
        return res.status(err.code).json({
            message: err.message,
        });
    }
    return res.status(500).json({ message: 'Internal Server Error' });
};

module.exports = { error };