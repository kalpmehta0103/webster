const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
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
    isVerified: {
        type: Boolean,
        default: false
    },
    profilePicture: {
        type: String,
        default: 'https://res.cloudinary.com/dohsbkivm/image/upload/v1730283142/webster/websterProfilevecteezy_user-icon-on-transparent-background_19879186.png.png'
    }
});

module.exports = userSchema;