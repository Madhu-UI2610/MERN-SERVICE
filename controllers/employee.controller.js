var employeeDet = require('../models/employeemodal');
exports.findAll = function (req, res, next) {
    employeeDet.find(function (error, employeedetils) {
        if (error) {
            res.json({ data: error, msg: "error", status: "101" })
        }
        else {
            res.json({ data: employeedetils, msg: "success", status: "0" })
        }
    })

}
exports.save = function (req, res, next) {
    let employeeDetailsList = new employeeDet(req.body)

    employeeDetailsList.save(function (error, employedetaillist) {
        if (error) {
            res.json({ data: error, msg: "error", status: "101" })
        }
        else {
            res.json({ data: employedetaillist, msg: "success", status: "1" })
        }
    })
}
exports.put = function (req, res, next) {
    // res.json({"name":"madhu"})
    employeeDet.findOneAndUpdate({ "_id": req.body._id }, req.body, function (error, document, resp) {
        res.json({ error: error, doc: document, response: resp })
    })
}
exports.deleteOne = function (req, res, next) {
    //res.json({"name":"madhu"})
    //console.log("madhuuuu", req, "mathiii", res)
    let myKey = req.url.split("=")[1];
    employeeDet.deleteOne({ "_id": myKey }, function (error) {
        res.json({ error: error })
    })

}