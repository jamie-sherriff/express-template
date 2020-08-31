require('dotenv').config();

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const fs = require('fs');
const showdown = require('showdown');

const converter = new showdown.Converter();

const indexRouter = require('./routes/index');

const usersRouter = require('./routes/users');

const app = express();
const markdownString = fs.readFileSync(path.join(__dirname, 'README.md'), 'utf-8');

console.log(markdownString);

const markdownHtml = converter.makeHtml(markdownString);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', (req, res, next) => {
  res.send(markdownHtml);
});

// app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
