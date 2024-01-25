const mysql = require('mysql');

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'Rahul*2000',
  database: 'user_db'
};

const pool = mysql.createPool(dbConfig);

module.exports = pool;
