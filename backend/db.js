const mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017/webster";

const connectMongo = () => {
    mongoose.connect(mongoURI)
    .then(() => {
        console.log('mongoDB connected');
    })
    .catch((err) => {
        console.log("error: " + err);
    });
}
module.exports = connectMongo;