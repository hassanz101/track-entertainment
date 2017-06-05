myApp.service('mustwatchservice', function($http, $location){
console.log('In Mustwatch service');

var vm = this;

this.getWatch = function(){
  console.log('In GET Mustwatch');
  $http({
    method:'GET',
    url:'/mustwatch',
  }).then(function(response){
    this.watchList = response.data.results;
  }); //end then
}; //end getWatch
// this.getWatch();
//post to add to must watch
this.postWatch = function() {
  console.log('In POST Mustwatch');
  var entertainToSend = {
    title: title,
    media_type: media_type,
    overview: overview,
  };
  console.log('this the Mustwatch List to send', entertainToSend);

 $http({
    method: 'POST',
    url: '/mustwatch',
    data: entertainToSend,
  }).then(function(response) {
    console.log("this is the POST response", response);
  }); //end then
}; //end postWatch
}); //end mustwatchservice
