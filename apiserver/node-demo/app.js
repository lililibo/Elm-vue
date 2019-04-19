var createError = require('http-errors');
var express = require('express');
var path = require('path');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

//允许跨域
app.use(function(req,res,next){
  res.set("Access-Control-Allow-Origin","*");
  res.set("Access-Control-Allow-Headers","content-type, x-access-token");
  res.set("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
  next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);


module.exports = app;
