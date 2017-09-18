var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('chapter6', { title: 'Influence on  markup' });
});

module.exports = router;