// //requires
var express = require('express');
var router = express.Router();
var passport = require( 'passport' );
var upcomingmedia = require('../models/upcoming_model');
var path = require( 'path' );

router.get('/', function(req,res){
  console.log('getting to upcoming route', req.body);
  // console.log( 'req.body.user = req.body.passport.user', req.body.user = req.body.passport.user );
  upcomingmedia.find({'userid': req.user._id },function(err, data){
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
  var upcomingToSend = new upcomingmedia(req.body);
  upcomingToSend.userid = req.user._id;
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

//start delete router
router.delete('/', function (req, res){
  console.log('in delete route');
  var upcomingToDelete = req.query._id;
  upcomingToDelete.remove({ _id : upcomingToDelete },function(err){
    if (err) {
      console.log( ' didnt delete theres a problem', err );
      res.sendStatus( 500 );
    }
    else {
      console.log( 'now its deleting', response );
      res.sendStatus(201);
    }//end else

  });
});

module.exports = router;
