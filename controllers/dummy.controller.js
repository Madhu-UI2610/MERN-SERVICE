var CommentTest = require('../models/comments.model');
exports.findAll = function (req, res, next) {
    // res.json({
    //     'data': 'dummy'
    // })
    CommentTest.find(function (error, commentList) {
        if (error) {
            res.json({ data: error, msg: "error", status: "101" });
        } else {
            res.json({ data: commentList, msg: "data dummy", status: "0" });
        }
    })
}
exports.save = function (req, res, next) {
    let comment = new CommentTest(req.body);
    comment.save(function (error, onerecordcomment) {
        if (error) {
            res.json({ data: error, msg: "error", status: "101" });
        } else {
            res.json({ data: onerecordcomment, msg: "data", status: "0" });
        }
    })
}
exports.put = function (req, res, next) {
    // res.json(req.body);
    CommentTest.findOneAndUpdate({ "_id": req.body._id }, req.body, function (err, doc, resp) {
        res.json({ err: err, resp: resp, doc: doc });
    })
}
exports.deleteOne = function (req, res, next) {
    //res.json({ "name": "madhu" })
    let mykeycode = req.url.split("=")[1];
    CommentTest.deleteOne({ "_id": mykeycode }, function (error) {
        res.json({ error: error })
    })

}