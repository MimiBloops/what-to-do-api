var express = require('express'),
app = express(),
port = process.env.PORT || 3000;

const historyRoute = require('./app/routes/historyRoute');
const userRoute = require('./app/routes/userRoute')

app.listen(port);
app.use('/history', historyRoute);
app.use('/user', userRoute);


console.log('what to do RESTful API server started on: ' + port);

module.exports = app;