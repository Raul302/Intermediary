const mysql = require('mysql');

const pool =mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port:33060,
    database: 'dbApi',
    connectionLimit: 8,

    // host: process.env.DB_HOST,
    // user: process.env.DB_USER,
    // password: process.env.DB_PASS,
    // port: process.env.DB_PORT,
    // database: process.env.DB_NAME
});

module.exports = pool;
