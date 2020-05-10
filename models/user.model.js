var mongoose = require('mongoose')
var userCredentials = new mongoose.Schema({
    username: { type: String, required: true, unique:true },
    password: { type: String, required: true },
    email: { type: String, required: true }
})
const UserTest = module.exports = mongoose.model('UserTest', userCredentials);
