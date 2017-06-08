myApp.service('mustwatchservice', function($http, $location) {
  console.log('In Mustwatch service');

  var vm = this;
  //GET call for mustwatch
  this.getWatch = function(title, name, release_date, first_air_date, media_type, overview) {
    console.log('In GET Mustwatch');
    //http GET
    return $http({
      method: 'GET',
      url: '/mustwatch',
    }).then(function(response) {
      this.watchList = response.data.results;
    }); //end then
  }; //end getWatch
  // this.getWatch();

  //post to add to must watch
  this.postWatch = function(title, name, release_date, first_air_date, media_type, overview) {
    console.log('In POST Mustwatch');
    var entertainToSend = {
      title: title,
      name: name,
      release_date: release_date,
      first_air_date: first_air_date,
      media_type: media_type,
      overview: overview
    }; //end entertainToSend
    console.log('this the Mustwatch List to send', entertainToSend);
    //http POST
    return $http({
      method: 'POST',
      url: '/mustwatch',
      data: entertainToSend
    }).then(function(response) {
      console.log("this is the POST response", response);
    }); //end then
  }; //end postWatch
}); //end mustwatchservice
