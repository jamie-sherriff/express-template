// const path = require('path');
const knex = require('knex');
const config = require('./config');

let db = null;
if (process.env.NODE_ENV === 'test') {
  db = knex(config.test);
} else {
  db = knex(config.default);
}
module.exports = db;
