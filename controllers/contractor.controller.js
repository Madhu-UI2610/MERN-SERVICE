var ContractorDetails = require('../models/contractor.model');
exports.findAll = function (req, res, next) {
    ContractorDetails.find(function (error, contractdet) {
        if (error) {
            res.json({
                data: error, msg: "error", status: "101"
            })
        } else {
            res.json({
                data: contractdet, msg: "data is coming", status: "0"
            })
        }
    })
}
// exports.insertbulk = function(req,res,next){
//     res.json({
//         data : 'bulkinsertcalled'
//     })
// }
exports.insertBulk = function (req, res, next) {
    try {
        console.log('Inside insert bulk');
        let bulkInsert = {
            error: [],
            success: [],
            globalStatus: 1
        };
        for (let i = 0; i < req.body.length; i++) {
            let newEmployees = new ContractorDetails(req.body[i]);

            newEmployees.save(function (error, employees) {
                if (error) {
                    bulkInsert.error.push({
                        'data': error,
                        'Msg': 'Failed record in bulk insert',
                        'Status': -106,
                        'failedData': newEmployees,
                        'recievedData': req.body[i]
                    });
                    bulkInsert.globalStatus = -106;
                } else {
                    bulkInsert.success.push({
                        'data': employees,
                        'Msg': 'success in bulk insert',
                        'Status': 1,
                        'recievedData': req.body[i]
                    });
                }
                if (i === (req.body.length - 1)) {
                    res.json({ 'data': bulkInsert, 'Msg': 'Bulk insert status', 'Status': bulkInsert.globalStatus });
                }
            });
        }
    } catch (ex) {
        res.json({ 'data': ex, 'Msg': 'Something Bad happend', 'Status': -206 });
    }
}
exports.findOne = function (req, res, next) {
    try {
        console.log(req.params.id);
        ContractorDetails.findById(req.params.id, function (error, contractor) {
            if (error) {
                res.json({ 'data': error, 'Msg': 'Fetch findbyId failed', 'Status': -105 });
            } else {
                res.json({ 'data': contractor, 'Msg': 'Fetch findById success', 'Status': 1 });
            }
        });
    } catch (ex) {
        res.json({ 'data': ex, 'Msg': 'Something Bad happend', 'Status': -205 });
    }
}