var express = require('express');
var router = express.Router();
var employeeDet = require('../models/employeemodal');
const employeeContoller = require('../controllers/employee.controller');
router.get('/employe', function (req, res, next) {
    res.json({ 'raj': 12000 });
})
router.get('/employeeDetails', employeeContoller.findAll)
router.post('/employee/list', employeeContoller.save)
router.put('/employee/list/updation', employeeContoller.put)
router.delete('/employee/delete', employeeContoller.deleteOne)
module.exports = router;