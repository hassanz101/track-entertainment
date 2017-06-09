var mongoose = require('mongoose');
var User = require('../models/user.model');
var Schema = mongoose.Schema;

var upcomingSchema = new Schema({
    userid: {type: String, required: true},
    title: {type: String},
    name:  {type:String},
    release_date: {type:String},
    first_air_date: {type:String},
    media_type: {type: String, required: true},
    overview: {type: String, required: true},
    poster_path: {type:String}
});

var upcomingmedia = mongoose.model('upcomingmedia', upcomingSchema);

module.exports = mongoose.model('upcomingmedia', upcomingSchema);
