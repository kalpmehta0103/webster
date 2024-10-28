const mongoose = require('mongoose');
const imageSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
        unique: true
    },
    image: {
        type: String,
        default: ""
    }
});
module.exports = imageSchema;