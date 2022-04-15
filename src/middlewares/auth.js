const { StatusCodes } = require('http-status-codes');
const { decodeToken } = require('../global/token');

const auth = async (req, res, next) => {
    try {
        const { authorization } = req.headers;
        const token = authorization.split(' ')[1];

        if (!token) throw new Error('Token not found');
        const decoded = decodeToken(token);
        req.loggedUser = decoded.data;
 
        return next();
    } catch (err) {
        return res.status(StatusCodes.UNAUTHORIZED).json({
            message: err.message,
        });
    }
};

module.exports = { auth };
