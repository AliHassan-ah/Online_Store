var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");
const session = require('express-session');
const sessionAuth  = require('./middlewares/sessionAuth')

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users/users");
const config = require("config")

var app = express();
app.use(session({ 		//Usuage
  secret: 'dummytext',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge:60000}
}));

// app.use(sessionAuth)
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.json({ error: err.message }); // Sending a JSON error response
});

mongoose.connect(config.get("db"))
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));

module.exports = app;
