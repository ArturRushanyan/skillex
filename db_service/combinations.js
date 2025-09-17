const dbConnectionPool = require('../configs/dbConnection');

const insertCombinations = async (generatedItems, combination) => {
    const connection = await dbConnectionPool.getConnection();
    try {
        await connection.beginTransaction();


        const itemsValuesCount = generatedItems.map(() => "(?)").join(", ");
        // NOTE: To ignore duplicate items
        const itemsInsertQuery = `INSERT IGNORE INTO items (name) VALUES ${itemsValuesCount}`;
        await connection.query(itemsInsertQuery, generatedItems);

        const [result] = await connection.query(
            "INSERT INTO combinations (combination_items) VALUES (?)",
            [JSON.stringify(combination)]
        );

        const responseData = {
            id: result.insertId,
            combination,
        };

        await connection.query(
            "INSERT INTO responses (response_json) VALUES (?)",
            [JSON.stringify(responseData)]
        );

        await connection.commit();
        return responseData;
    } catch(error) {
        await connection.rollback();
        throw error
    } finally {
        connection.release();
    }
}

module.exports = {
    insertCombinations
}