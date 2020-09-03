/* eslint-disable consistent-return */
const db = require('./db.js');

const tableName = 'users';
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
      .into(tableName)
      .then((rows) => {
        return rows[0];
      });
  },
  get: (username) => {
    return db.select('*').from(tableName).where('first_name', 'like', username);
  },
  getById: (id) => {
    return db
      .select('*')
      .from(tableName)
      .where('id', id)
      .then((rows) => rows[0]);
  },
  getAll: () => {
    return db
      .select('*')
      .from(tableName)
      .then((rows) => {
        return rows;
      });
  },
  updateUser: (id, updatedUser) => {
    return db(tableName).where({ id }).update(updatedUser);
  },
  deleteUser: (id) => {
    return db(tableName).where('id', id).del().returning('*');
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
