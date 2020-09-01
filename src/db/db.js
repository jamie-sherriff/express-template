// const path = require('path');
const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './data.db',
  },
  useNullAsDefault: true,
});

module.exports = knex;
