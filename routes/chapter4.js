var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('chapter4', { title: 'Properties for the Children' });
});

module.exports = router;