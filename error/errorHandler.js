const errorHandler = (error, req, res, next) => {
    console.log("error ========", error);
    return res.status(error.status || 500).send({
        success: false,
        error: {
            message: error?.message || 'Internal server Error!',
        },
    });
};

module.exports = errorHandler;