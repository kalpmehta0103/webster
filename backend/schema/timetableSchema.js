const mongoose = require('mongoose');
const daySchema = new mongoose.Schema({
    "8-9": {
        type: String,
        default: ""
    },
    "9-10": {
        type: String,
        default: ""
    },
    "10-11": {
        type: String,
        default: ""
    },
    "11-12": {
        type: String,
        default: ""
    },
    "12-13": {
        type: String,
        default: ""
    },
    "13-14": {
        type: String,
        default: ""
    },
    "14-15": {
        type: String,
        default: ""
    },
    "15-16": {
        type: String,
        default: ""
    },
    "16-17": {
        type: String,
        default: ""
    },
    "17-18": {
        type: String,
        default: ""
    }
});

const timeTableSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }, 
    timeTable: {
        "monday": {
            type: daySchema,
        }, 
        "tuesday": {
            type: daySchema
        },
        "wednesday": {
            type: daySchema
        },
        "thursday": {
            type: daySchema
        },
        "friday": {
            type: daySchema
        },
        "saturday": {
            type: daySchema
        }
    }
});

module.exports = timeTableSchema;