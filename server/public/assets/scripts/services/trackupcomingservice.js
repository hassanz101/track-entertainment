myApp.service('trackupcomingService', function($http, $location) {
  console.log('in trackupcoming service');
  var vm = this;

  //get call for trackupcoming
  this.getUpcoming = function() {
    console.log('In GET Upcoming');
    return $http({
      method: 'GET',
      url: '/trackupcoming'
    }).then(function success(response) {
    return response.data;
    }); //end then
  }; //end getUpcoming

  //post call to add to trackupcoming
  this.postUpcoming = function(user_id, title, name, release_date, first_air_date, media_type, overview, poster_path) {
    console.log('In POST Upcoming');
    var upcomingToSend = {
      userid :user_id,
      title: title,
      name: name,
      release_date: release_date,
      first_air_date: first_air_date,
      media_type: media_type,
      overview: overview,
      poster_path: poster_path
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

  this.deleteUpcoming = function(user_id) {
   console.log('this is the Upcoming DELETE');
  return $http({
     method: 'DELETE',
     url: '/trackupcoming/' + user_id
   }).then(function(response) {
     console.log(response);
     return response;
   });
 };
}); //end trackupcoming service
