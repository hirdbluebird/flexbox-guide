var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('chapter4', { title: 'Parent properties' });
});

module.exports = router;
