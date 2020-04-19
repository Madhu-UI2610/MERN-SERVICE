var express = require('express');
var router = express.Router();
var CommentTest = require('../models/comments.model');
var dummyController = require('../controllers/dummy.controller');
router.get('/dummy', dummyController.findAll)
router.post('/dummyInsert', dummyController.save)
router.put('/update', dummyController.put)
router.delete('/dummy/delete', dummyController.deleteOne)
module.exports = router;