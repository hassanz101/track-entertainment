myApp.controller('TrackupcomingController', function(tmdbservice, trackupcomingService, $http, $location) {

 var vm = this;
 vm.trackList = [];
 vm.postAllUpcoming = function(title, name, media_type, overview){
   trackupcomingService.postUpcoming(title, name, media_type, overview).then(function(response){
     vm.trackList = response;
 }); //end trackupcomingService
};//end postAllUpcoming
});//end controller
