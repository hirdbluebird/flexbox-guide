var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('chapter1', { title: 'Flexbox based frameworks' });
});

module.exports = router;