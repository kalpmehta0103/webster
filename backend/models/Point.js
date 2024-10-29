const mongoose = require('mongoose');
const pointSchema = require('../schema/pointSchema');

const Point = mongoose.model('Point', pointSchema);
module.exports = Point;