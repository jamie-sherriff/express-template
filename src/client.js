const axios = require('axios').default;
const log = require('loglevel');

log.setDefaultLevel(log.levels.INFO);
const server = require('./app');

(async () => {
  await server.run();
  const serverPort = server.app.get('port');
  const request = axios.create({
    baseURL: `http://localhost:${serverPort}/`,
  });
  const users = (await request.get('/users')).data;
  log.info(`got ${users.length} users`);
  const user = (await request.get(`/user/${users[0].id}`)).data;
  log.info(user);
})();
