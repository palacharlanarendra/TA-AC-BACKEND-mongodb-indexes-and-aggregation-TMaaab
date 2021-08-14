var express = require('express');
var router = express.Router();
var Article = require('../models/articleModel');
/* GET articles listing. */

router.get('/', function (req, res, next) {
  res.render('article');
});
router.post('/', function (req, res, next) {
  Article.create(req.body, (err, article) => {
    console.log(article);
  });
});

module.exports = router;
