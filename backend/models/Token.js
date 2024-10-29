const mongoose = require('mongoose');
const tokenSchema = require('../schema/tokenSchema')

module.exports = mongoose.model('Token', tokenSchema);