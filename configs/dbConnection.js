const mysql = require("mysql2/promise");
const configs = require('./config')

// TODO: add here connection configs
const pool = mysql.createPool({
    host: String(configs.DB_CONNECTION_HOST),
    user: String(configs.DB_USER),
    password: String(configs.PASSWORD),
    database: String(configs.DATABASE),
});

module.exports = pool;