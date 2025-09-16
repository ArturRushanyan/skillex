// TODO: rename file to generalErrorHandler
const { INTERNAL_SERVER_ERROR } = require('../utils/constMessages');

const errorHandler = (error, req, res, next) => {
    return res.status(error.status || 500).send({
        success: false,
        error: {
            message: error?.message || INTERNAL_SERVER_ERROR,
        },
    });
};

module.exports = errorHandler;