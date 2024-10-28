const mongoose = require('mongoose');
module.exports = new mongoose.Schema({
    email: { 
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String
    },
    name: {
        type: String
    },
    regNo: {
        type: String
    },
    number: {
        type: String
    },
    branch: {
        type: String
    },
    year: {
        type: String
    }, 
    profilePhoto: {
        type: String
    }, 
    isVerified: {
        type: Boolean,
        default: false
    }
})