myApp.controller('TrackupcomingController', function(tmdbservice, trackupcomingService, $http, $location) {

 var vm = this;
 vm.trackList = [];

 $http.get('/user').then(function(response){
   vm.userInfo = response.data._id;
 });

 vm.postAllUpcoming = function(title, name, release_date, first_air_date, media_type, overview){
   trackupcomingService.postUpcoming(vm.userInfo,title, name, release_date, first_air_date, media_type, overview).then(function(response){
     vm.trackList = response;
 }); //end trackupcomingService
};//end postAllUpcoming

vm.getAllUpcoming = function(){
  trackupcomingService.getUpcoming().then(function(response){
    console.log("getAllUpcoming", response);
    vm.trackList = response;
  });
};

});//end controller
