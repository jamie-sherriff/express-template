require('dotenv').config();

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const fs = require('fs').promises;
const showdown = require('showdown');

const converter = new showdown.Converter();

const indexRouter = require('./routes/index');

const usersRouter = require('./routes/users');
const userRouter = require('./routes/user');
const usersDB = require('./db/users');

usersDB.init();

const app = express();
let markdownHtml;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);
app.use('/user', userRouter);

app.get('/', async (req, res, next) => {
  if (!markdownHtml) {
    const markdownString = await fs.readFile(path.join(__dirname, 'README.md'), 'utf-8');
    markdownHtml = converter.makeHtml(markdownString);
  }
  res.send(markdownHtml);
});

// app.use('/', indexRouter);

module.exports = app;
