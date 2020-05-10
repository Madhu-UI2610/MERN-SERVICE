var express = require('express');
var router = express.Router();
var UserTest = require('../models/user.model');
var userController = require('../controllers/user.controller');
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
router.get('/user', userController.findAll);
router.post('/user/details', userController.save);
router.put('/user/update', userController.put);
router.delete('/user/delete', userController.deleteOne);
router.post('/user/signin',userController.saveSign)
router.post('/user/checkvaliduser',userController.findOne)

module.exports = router;
