const { INVALID_ITEMS_LIST, INVALID_REQUEST_BODY } = require('../../utils/constMessages');

const validateGenerateRequestBody = (req, res, next) => {
    try {
        const { items, length } = req.body;
        if (!items || !length) {
            throw {
                status: 400,
                message: INVALID_REQUEST_BODY,
            };
        }


        if (!Array.isArray(items) || items.length === 0) {
            throw {
                status: 400,
                message: INVALID_ITEMS_LIST,
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