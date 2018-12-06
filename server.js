var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

port = process.env.PORT || 3000;

var swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('./swagger.json');

// const mysql = require('mysql');
// var connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : 'root',
//     database : 'whatToDo',
//     //socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
// });
// connection.connect();

app.listen(port);

console.log('what to do RESTful API server started on: ' + port);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/help', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

var historyRoute = require('./app/routes/historyRoute.js');
var userRoute = require('./app/routes/userRoute.js');

historyRoute(app);
userRoute(app);