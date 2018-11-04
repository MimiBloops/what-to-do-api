'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : '192.168.1.118',
    user     : 'root',
    password : 'root',
    database : 'questcequonfait',
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;