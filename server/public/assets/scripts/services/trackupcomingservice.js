myApp.service('trackupcomingService', function($http, $location) {
  var vm = this;
  console.log('in trackupcoming service');

  //get call for trackupcoming
  this.getUpcoming = function() {
    console.log('In GET Upcoming');
    $http({
      method: 'GET',
      url: '/trackupcoming'
    }).then(function(response) {
      this.trackList = response.data.results;
    }); //end then
  }; //end getUpcoming

  //post call to add to trackupcoming
  this.postUpcoming = function(title, name, media_type, overview) {
    console.log('In POST Upcoming');
    var upcomingToSend = {
      title: title,
      name: name,
      media_type: media_type,
      overview: overview
    }; //end upcomingToSend
    console.log('this is the Upcoming list to send', upcomingToSend);
    return $http({
      method: 'POST',
      url: '/trackupcoming',
      data: upcomingToSend
    }).then(function(response) {
      console.log('this is the trackupcoming post respon', response);
    }); //end then
  }; //end postUpcoming
}); //end trackupcoming service
