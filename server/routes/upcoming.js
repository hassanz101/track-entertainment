// //requires
var express = require('express');
var router = express.Router();
var passport = require( 'passport' );
var upcomingmedia = require('../models/upcoming_model');
var path = require( 'path' );

router.get('/', function(req,res){
  console.log('getting to upcoming route', req.body);
  // console.log( 'req.body.user = req.body.passport.user', req.body.user = req.body.passport.user );
  upcomingmedia.find(function(err, data){
    if(err){
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log('data:', data);
      res.send(data);
    } //end else
  }); //end find
}); //end router.get

//in post router
router.post('/', function (req, res){
  console.log('saving to upcoming', req.body);
  var trackupcoming = {
    userid: req.user._id,
    title: req.body.title,
    name: req.body.name,
    release_date: req.body.release_date,
    first_air_date: req.body.first_air_date,
    media_type: req.body.media_type,
    overview: req.body.overview
  };
  console.log( 'trackupcoming', trackupcoming);
  var upcomingToSend = new upcomingmedia();
  upcomingToSend.userid = req.user._id;
  upcomingToSend.title = req.body.title;
  upcomingToSend.name = req.body.name;
  upcomingToSend.release_date = req.body.release_date;
  upcomingToSend.media_type = req.body.media_type;
  upcomingToSend.first_air_date = req.body.first_air_date;
  upcomingToSend.overview = req.body.overview;
  upcomingToSend.save(function(err, response){
    if (err) {
      console.log( ' didnt save theres a problem', err );
      res.sendStatus( 500 );
    }
    else {
      console.log( 'now its saving', response );
      res.sendStatus(201);
    }//end else

  });
}); //end router.post

module.exports = router;
