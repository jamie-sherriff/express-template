const express = require('express');
const _ = require('lodash');

const router = express.Router();
const usersDB = require('../db/users');
/* GET users listing. */
router.get('/:id', async (req, res) => {
  if (req.params.id && Number.isSafeInteger(Number.parseInt(req.params.id, 10))) {
    const user = await usersDB.getById(Number.parseInt(req.params.id, 10));
    if (user && typeof user === 'object') {
      res.send(user);
    } else {
      res.status(400).json({ message: 'no user found' });
    }
  } else {
    res.status(400).json({
      message: 'invalid id',
    });
  }
});

/* POST users listing. */
router.post('/', async (req, res) => {
  const newUser = req.body;
  const requiredKeys = ['first_name'];
  if (requiredKeys.every((key) => key in newUser)) {
    try {
      const result = await usersDB.insert(newUser);
      res.json({
        message: `user added: ${JSON.stringify(newUser)}`,
        result,
      });
    } catch (error) {
      res.status(500).json({ message: error.message, error });
    }
  } else {
    res.status(400).json({ message: 'invalid user' });
  }
});

module.exports = router;
