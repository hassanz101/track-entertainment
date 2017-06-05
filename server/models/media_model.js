var mongoose = require('mongoose');
var User = require('../models/user.model');
var Schema = mongoose.Schema;


var mediaSchema = new Schema({
    username: {type: String, required: true},
    title: {type: String, required: true},
    media_type: {type: String, required: true},
    overview: {type: String, required: true}
});

var media = mongoose.model('media', mediaSchema);

module.exports = mongoose.model('media', mediaSchema);
