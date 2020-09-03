const db = require('../../src/db/db');

describe('Interact with a database', () => {
  test('Can get a database', () => {
    expect(db).toBeDefined();
  });
});
