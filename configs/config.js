require("dotenv").config();

module.exports = {
    PORT: process.env.PORT || 3000,
    DB_CONNECTION_HOST: process.env.DB_CONNECTION_HOST,
    DB_USER: process.env.DB_USER,
    PASSWORD: process.env.PASSWORD,
    DATABASE: process.env.DATABASE
};