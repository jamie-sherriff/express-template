var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('here');
  res.send('respond with a root');
  //res.json('index', { title: 'Express' });
});

module.exports = router;
