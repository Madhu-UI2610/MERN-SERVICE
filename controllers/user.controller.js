var UserTest = require('../models/user.model');
var bcrypt = require('bcryptjs');
exports.findAll = function (req, res, next) {
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
}
exports.save = function (req, res, next) {
    let UserList = new UserTest(req.body);

    UserList.save(function (error, userdetails) {
        if (error) {
            res.json({ data: error, msg: "error", status: "101" })
        }
        else {
            res.json({ data: userdetails, msg: "data", status: "1" })
        }
    })
}
exports.put = function (req, res, next) {
    UserTest.findOneAndUpdate({ "_id": req.body._id }, req.body, function (error, document, resp) {
        res.json({ error: error, doc: document, response: resp })
    })
}


exports.deleteOne = function (req, res, next) {

    let myId = req.url.split("=")[1];
    UserTest.deleteOne({ "_id": myId }, function (error) {
        res.json({
            error: error
        })
    })
}
exports.saveSign = function (req, res, next) {
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(req.body.password, salt, function (err, hash) {
            // Store hash in your password DB.
            console.log(req.body);
            console.log(hash);
            req.body.password = hash;
            let validUserList = new UserTest(req.body);
            validUserList.save(function (error, userdetails) {
                if (error) {
                    res.json({ data: error, msg: "error", status: "101" })
                }
                else {
                    res.json({ data: "Registered successfully", msg: "success", status: "1" })
                }
            })
        });
    });
}

exports.findOne = function (req, res, next) {
    const { username, password } = req.body;
    UserTest.findOne({ username}, function (error, user) {
        if (error) {
            res.json({ data: "500", msg: "Internal error please try again ", status: "500" })
        }
        else if (!user) {
            res.json({ data: "401", msg: "Incorrect email or password", status: "401" })
        }
        else {
            bcrypt.compare(password,user.password , function(err, validUser) {
                // res === true
                if(validUser){
                    res.json({ data: "200", msg: "success", status: "1" })
                }
                else{
                    res.json({ data: "300", msg: "Incorrect password", status: "1" })
                }
            });
        }
    }
    )
}