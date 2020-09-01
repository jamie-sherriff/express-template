const express = require('express');

const router = express.Router();
const db = require('../db/users');

/* GET users listing. */
router.get('/', async (req, res, next) => {
  const users = await db.getAll();
  res.send(users);
});

/* POST users listing. */
router.post('/', (req, res, next) => {
  res.send('respond with a post resource');
});

module.exports = router;
