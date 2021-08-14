var express = require('express');
var router = express.Router();
var User = require('../models/userModel');
/* GET users listing. */

router.get('/', function (req, res, next) {
  res.render('index');
});
router.post('/', function (req, res, next) {
  User.create(req.body, (err, user) => {
    console.log(user);
  });
});

module.exports = router;
