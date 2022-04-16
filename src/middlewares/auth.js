const { StatusCodes } = require('http-status-codes');
const { decodeToken } = require('../global/token');

const auth = async (req, res, next) => {
    try {
        const { authorization } = req.headers;
        if (!authorization) throw new Error('Cabeçaho de autorização não encontrado');

        const token = authorization.split(' ')[1];

        if (!token) throw new Error('Token não encontrado');
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
