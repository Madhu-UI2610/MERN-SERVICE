var express = require('express');
var router = express.Router();

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

router.get('/user2',function(req,res,next){
  res.json({'hi':'hello'});
})

module.exports = router;
