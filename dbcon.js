var mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 10,
     host : 'localhost',
     user : 'root',
     password: 'shri',
     database: 'courd',
     debug: false
});

module.exports = pool;
