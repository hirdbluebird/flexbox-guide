var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('chapter2', { title: 'Great, what about support?' });
});

module.exports = router;