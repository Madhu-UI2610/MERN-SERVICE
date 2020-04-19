var mongo = require('mongoose')
var employeeDetails = new mongo.Schema({
    "employeename": {
        type: String,
        required: true
    },
    "employeeID": {
        type: Number,
        required: true
    },
    "employeeDesignation": {
        type: String,
        required: true
    },
    "employeePhoneNumber": {
        type: Number,
        required: true
    }
})
const employeeDet = module.exports = mongo.model('employeeDet', employeeDetails);
