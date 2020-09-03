const usersDB = require('../../src/db/users');

beforeAll(() => {
  return usersDB.init().then(() => {
    return usersDB.insert({ first_name: 'Bob2', last_name: 'sherman', bio: 'im a cool kid' });
  });
});

describe('Interact with a database for users', () => {
  test('Can get  users', async () => {
    const users = await usersDB.getAll();
    expect(users).toBeDefined();
    expect(Array.isArray(users)).toBe(true);
    expect(users.length).toBeGreaterThan(0);
  });

  test('Can get a user by id', async () => {
    const user = await usersDB.getById(1);
    expect(user).toBeDefined();
    expect(Array.isArray(user)).toBe(false);
    expect(typeof user).toBe('object');
  });
});
