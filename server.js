var express = require('express'),
    app = express(),
    bodyParser = require('body-parser')
    jwt = require('jsonwebtoken')
    config = require('./configuration/config.js')
    morgan = require('morgan');

port = process.env.PORT || 3000;

const ProtectedRoutes = express.Router();

var swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');

const mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'whatToDo',
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
});
connection.connect();

app.listen(port);

//app.set('Secret', config.secret);

//app.use(morgan('dev'));

console.log('what to do RESTful API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/help', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', function (req, res) {
    res.send('Hello to the wonderful API, running on http://http://localhost:3000/');
})

// app.post('/authenticate', (req, res) => {
//     if (req.body.username === "claire") {
//         if (req.body.password === 123) {
//             const payload = {
//                 check: true
//             };

//             var token = jwt.sign(payload, app.get('Secret'), {
//                 expiresIn: 1440
//             });

//             res.json({
//                 message: 'Authentication done ',
//                 token: token
//             });
//         } else {
//             res.json({ message: 'User not found !' })
//         }
//     }
// })

// app.use('/api', ProtectedRoutes);

// ProtectedRoutes.use((req, res, next) => {
//     var token = req.headers['token'];
//     if (token) {
//         jwt.verify(token, app.get('Secret'), (err, decoded) => {
//             if (err) {
//                 return res.json({ message: 'invalid token' });
//             } else {
//                 req.decoded = decoded;
//                 next();
//             }
//         });
//     } else {
//         res.send({
//             message: 'No token provided.'
//         });

//     }
// });

var historyRoute = require('./app/routes/historyRoute.js');
var userRoute = require('./app/routes/userRoute.js');
var typeRoute = require('./app/routes/typeRoute.js');

historyRoute(app);
userRoute(app);
typeRoute(app);