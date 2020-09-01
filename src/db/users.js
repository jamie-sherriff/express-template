/* eslint-disable consistent-return */
const db = require('./db.js');

const users = {
  init: () => {
    return db.schema.hasTable('users').then((exists) => {
      if (!exists) {
        return db.schema.createTable('users', (t) => {
          t.increments('id').primary();
          t.string('first_name', 100).notNullable();
          t.string('last_name', 100).notNullable();
          t.text('bio');
        });
      }
    });
  },
  insert: (newUser) => {
    return db
      .insert(newUser)
      .into('users')
      .then((rows) => {
        return rows[0];
      });
  },
  get: (username) => {
    return db.select('*').from('users').where('first_name', 'like', username);
  },
  getAll: () => {
    return db
      .select('*')
      .from('users')
      .then((rows) => {
        return rows;
      });
  },
  //   get(username) {

  //   },
  //     getAll() {
  //   return db
  //     .select('*')
  //     .from('users')
  //     .then((rows) => rows);
  // },
};

module.exports = users;
