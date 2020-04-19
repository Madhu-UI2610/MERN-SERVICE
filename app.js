var createError = require('http-errors');
var express = require('express');
var path = require('path');
const cors = require('cors');

var cookieParser = require('cookie-parser');
var logger = require('morgan');
//Import the mongoose module
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var employeRouter = require('./routes/employee');
var dummyEmployee = require('./routes/dummy');
var contractorRouter = require('./routes/contractor');
var app = express();
//Set up default mongoose connection
var dbURL = require('./config').db;
mongoose.connect(dbURL, { useNewUrlParser: true });

mongoose.connection.on('connected', function () {
  console.log("Mongoose default connection is open to ", dbURL);
});

mongoose.connection.on('error', function (err) {
  console.log("Mongoose default connection has occured " + err + " error");
});

mongoose.connection.on('disconnected', function () {
  console.log("Mongoose default connection is disconnected");
});
// view engine setup
app.use(cors())

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/employee', employeRouter);
app.use('/dummy', dummyEmployee);
app.use('/contractor',contractorRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
