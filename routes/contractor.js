var express = require('express');
var router = express.Router();
var contractorController = require('../controllers/contractor.controller');
router.get('/contractor', contractorController.findAll);
router.post('/insertbulk', contractorController.insertBulk);
router.get('/:id',contractorController.findOne)
module.exports = router;
