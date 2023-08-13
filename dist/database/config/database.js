"use strict";
const config = {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '123456',
    database: process.env.DB_NAME || 'TRYBE_FUTEBOL_CLUBE',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 3306,
    dialect: 'mysql',
};
module.exports = config;
//# sourceMappingURL=database.js.map