// TODO: rename file to generalErrorHandler
const errorHandler = (error, req, res, next) => {
    return res.status(error.status || 500).send({
        success: false,
        error: {
            // TODO: add const messages
            message: error?.message || 'Internal server Error!',
        },
    });
};

module.exports = errorHandler;