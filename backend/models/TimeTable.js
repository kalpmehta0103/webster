const mongoose = require('mongoose');
const timeTableSchema = require('../schema/timetableSchema');

const TimeTable = mongoose.model("TimeTable", timeTableSchema);
module.exports = TimeTable;