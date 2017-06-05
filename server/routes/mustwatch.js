//requires
var express = require('express');
var router = express.Router();
var passport = require( 'passport' );
var media = require( '../models/media_model' );
var path = require( 'path' );

router.get('/mustwatch', function(req,res){
  console.log('getting to must watch route', req.body);
  console.log( 'req.body.user = req.body.passport.user', req.body.user = req.body.passport.user );
  media.find(req.body, function(err, data){
    if(err){
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log('data:', data);
      res.send(data);
    }
  }); //end find
}); //end router

//in post router
router.post('/mustwatch', function (req, res){
  console.log('saving to must watch', req.body);
  var entertainment = {
      userid: req.user._id,
      title: req.body.title,
      media_type: req.body.media_type,
      overview: req.body.overview
  };
  console.log( 'entertainment', entertainment);
  var entertainToSend = media();
  entertainToSend.save(function(err, response){
    if (err) {
      console.log( ' didnt save theres a problem', err );
      res.sendStatus( 500 );
    }
    else {
      console.log( 'now its saving', response );
      res.sendStatus(201);
    }

  });
});

module.exports = router;
