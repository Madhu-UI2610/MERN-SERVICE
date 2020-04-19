var mongoose = require('mongoose');
var contractorSchema = new mongoose.Schema({
    
        "Name": {
            type : String,
            required :true
        },
        "Age": {
            type : Number,
            required : true
        },
        "Email": {
            type : String,
            required : true
        },
        "Date of joining": {
            type : String,
            required :true
        },
        "Phone number": {
            type : Number,
            required : true
        },
        "Street": {
            type : String,
            required : true
        },
        "City": {
            type : String,
            required : true
        },
        "Zip": {
            type : String,
            required : true 
        },
        "Region": {
            type : String,
            required : false
        },
        "Country": {
            type : String,
            required : false
        },
        "EmployeeID": {
            type : String,
            required : true
        } 
    
})

const ContractorDetails = module.exports = mongoose.model('ContractorDetails',contractorSchema)