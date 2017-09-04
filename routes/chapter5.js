var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('chapter5', { title: 'Child properties' });
});

module.exports = router;