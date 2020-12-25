var mysql = require('mysql');

var host = 'localhost';
var user = 'root';
var password = '26032002';
var database = 'tattooApp';

var connMySQL = function(){
    return mysql.createConnection({
        host: host,
        user: user,
        password:password,
        database: database
    });
}

module.exports = function(){
    return connMySQL;
}