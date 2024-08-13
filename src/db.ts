import mysql from 'mysql2/promise';

export const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Linux.123',
    database: 'backend',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});
