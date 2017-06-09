//requires
var express = require('express');
var router = express.Router();
var passport = require('passport');
var media = require('../models/media_model');
var path = require('path');

router.get('/', function(req, res) {
  console.log('getting to must watch route', req.body);
  // console.log('req.body.user = req.body.passport.user', req.body.user = req.body.passport.user);
  media.find({'userid': req.user._id }, function(err, data) {
    console.log('saving to user info', req.user._id);
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log('data:', data);
      res.send(data);
    }
  }); //end find
}); //end router

//in post router
router.post('/', function(req, res) {
  var entertainToSend = new media(req.body);
  entertainToSend.userid = req.user._id;

  entertainToSend.save(function(err, response) {
    if (err) {
      console.log(' didnt save theres a problem', err);
      res.sendStatus(500);
    } else {
      console.log('now its saving', response);
      res.sendStatus(201);
    }

  });
}); //end router.post

router.delete('/:id', function (req, res){
  console.log('in delete route');
  var mustwatchToDelete = req.params.id;
  media.remove({ _id : mustwatchToDelete },function(err){
    if (err) {
      console.log( ' didnt delete theres a problem', err );
      res.sendStatus( 500 );
    }
    else {
      // console.log( 'now its deleting', response );
      res.sendStatus(201);
    }//end else

  });
});

module.exports = router;
