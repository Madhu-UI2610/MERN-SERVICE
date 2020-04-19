
var mongoose = require('mongoose');

var commentsSchema = new mongoose.Schema({
    "postId": {
        type: Number,
        required: true
    },
    "id": {
        type: Number,
        required: true
    },
    "name": {
        type: String,
        required: true
    },
    "email": {
        type: String,
        required: true
    },
    "body": {
        type: String,
        required: true
    }
});

// module.exports = commentsSchema;
const CommentTest = module.exports = mongoose.model('CommentTest', commentsSchema);



// {
//     "_id": {
//         "$oid": "5e48dccd5383c88720be3eba"
//     },
//     "postId": {
//         "$numberDouble": "1"
//     },
//     "id": {
//         "$numberDouble": "4"
//     },
//     "name": "alias odio sit",
//     "email": "Lew@alysha.tv",
//     "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
// }