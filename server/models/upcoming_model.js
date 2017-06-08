var mongoose = require('mongoose');
var User = require('../models/user.model');
var Schema = mongoose.Schema;

var upcomingSchema = new Schema({
    userid: {type: String, required: true},
    title: {type: String},
    name:  {type:String},
    release_date: {type:Date},
    first_air_date: {type:Date},
    media_type: {type: String, required: true},
    overview: {type: String, required: true}
});

var upcomingmedia = mongoose.model('upcomingmedia', upcomingSchema);

module.exports = mongoose.model('upcomingmedia', upcomingSchema);
