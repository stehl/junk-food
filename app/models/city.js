var mongoose = require('mongoose');

module.exports = mongoose.model('City', {
    name : String,
    population : Number,
    rate : Number
});