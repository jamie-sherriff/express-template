module.exports = {
  test: {
    client: 'sqlite3',
    connection: ':memory:',
    useNullAsDefault: true,
    seeds: {
      directory: './seeds/',
    },
  },
  default: {
    // debug: true,
    client: 'sqlite3',
    connection: {
      filename: './data.db',
    },
    seeds: {
      directory: './seeds/',
    },
    useNullAsDefault: true,
  },
};
