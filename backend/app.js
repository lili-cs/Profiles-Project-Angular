
const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');

const IndexController = require('./controllers/index');
const userController = require('./controllers/userController');

app.use(express.json());
app.use(cors());

app.use(userController);
app.use('/', IndexController);

// app.use('/users', usersRouter);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

module.exports = app;
