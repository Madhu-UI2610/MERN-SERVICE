var express = require('express');
var router = express.Router();

router.get('/employe', function (req, res, next) {
    res.json({ 'raj': 12000 });
})

module.exports = router;