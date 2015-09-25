var mongoose = require('mongoose');

module.exports = mongoose.model('Ingredient', {
    name : String,
    taste : Number,
    quality : Number,
    picture : String
});