const express = require('express');
const _ = require('lodash');

const router = express.Router();
const usersDB = require('../db/users');
/* GET users listing. */
router.get('/:id', (req, res, next) => {
  res.send(`respond with a single resource ${req.params.id}`);
});

/* POST users listing. */
router.post('/', async (req, res, next) => {
  const newUser = req.body;
  const requiredKeys = ['first_name'];
  console.log(newUser);
  if (requiredKeys.every((key) => key in newUser)) {
    try {
      const result = await usersDB.insert(newUser);
      console.log(result);
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
