module.exports = {
  test: {
    client: 'sqlite3',
    connection: ':memory:',
    useNullAsDefault: true,
  },
  default: {
    client: 'sqlite3',
    connection: {
      filename: './data.db',
    },
    useNullAsDefault: true,
  },
};
