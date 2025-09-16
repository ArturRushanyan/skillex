const validateGenerateRequestBody = (req, res, next) => {
    try {
        const { items, length } = req.body;
        if (!items || !length) {
            throw {
                status: 400,
                // TODO: add to const messages
                message: "Invalid request body",
            };
        }


        if (!Array.isArray(items) || items.length === 0) {
            throw {
                status: 400,
                // TODO: add to const messages
                message: "Please send valid items list",
            };
        }


        next();
    } catch (error) {
        next(error);
    }
};

module.exports = {
    validateGenerateRequestBody
};