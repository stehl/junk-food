var mongoose = require('mongoose');

module.exports = mongoose.model('Burger', {
    name : String,
    restaurant : Number,
    description : String,
    price : Number,
    rate : Number,
    ingredients : String,
    picture : String
});