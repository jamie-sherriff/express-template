const request = require('supertest');
const { app, initialize } = require('../../src/app');

beforeAll(() => {
  return initialize();
});

describe('Test the users endpoint', () => {
  test('It should response the GET a user', async () => {
    const response = await request(app).get('/users');
    expect(response.headers['content-type']).toContain('application/json');
    expect(response.statusCode).toBe(200);
  });

  test('It should response the POST a user', async () => {
    const response = await request(app).post('/user');
    expect(response.headers['content-type']).toContain('application/json');
    expect(response.statusCode).toBe(400);
  });

  test('It should response the POST a valid user', async () => {
    const response = await request(app).post('/user');
    expect(response.headers['content-type']).toContain('application/json');
    expect(response.statusCode).toBe(400);
  });
});
