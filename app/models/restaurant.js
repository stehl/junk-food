var mongoose = require('mongoose');

module.exports = mongoose.model('Restaurant', {
    name : String,
    city : Number,
    burgers : String,
    rate : Number,
    avg_price : Number,
    picture : String
});