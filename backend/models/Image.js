const mongoose = require('mongoose');
const imageSchema = require('../schema/imageSchema');

const Image = mongoose.model('Image', imageSchema);
module.exports = Image;