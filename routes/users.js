var express = require('express');
var router = express.Router();
var UserTest = require('../models/user.model');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

// User Data
router.get('/allUsers', function (req, res, next) {
  res.json({ 'user': 'Madhu' });
})


router.get('/allUsers2', function (req, res, next) {
  res.json({ 'hello': 'hello2' });
})

router.get('/user2', function (req, res, next) {
  res.json({ 'hi': 'hello' });
})
router.get('/user', function (req, res, next) {
  UserTest.find(function (error, userdetail) {
    if (error) {
      res.json({
        data: error, msg: "error", status: "101"
      })
    }
    else {
      res.json({ data: userdetail, msg: "success", status: "0" })
    }
  })
})
router.post('/user/details', function (req, res, next) {
  let UserList = new UserTest(req.body);

  UserList.save(function (error, userdetails) {
    if (error) {
      res.json({ data: error, msg: "error", status: "101" })
    }
    else {
      res.json({ data: userdetails, msg: "data", status: "0" })
    }
  })
})



module.exports = router;
