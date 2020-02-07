var express = require('express');
var router = express.Router();

router.get('/dummy', function (req, res, next) {
    res.json({
        'data': 'dummy'
    })
})

module.exports = router;