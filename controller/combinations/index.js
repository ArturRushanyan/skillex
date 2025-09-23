const { insertCombinations } = require('../../db_service/combinations');
const { generateItems, generateCombinations } = require('./service');

const generate = async (req, res, next) => {
    try {
        const { items, length } = req.body;

        const preparedItems = generateItems(items);
        const generatedCombinations = generateCombinations(preparedItems, length, items);
        const data = await insertCombinations(preparedItems, generatedCombinations);

        return res.status(200).json(data);
    } catch(error) {
        next(error);
    }
};

module.exports = {
    generate,
};