myApp.controller('TrackupcomingController', function(tmdbservice, trackupcomingService, $http, $location) {

 var vm = this;
 vm.trackList = [];

 $http.get('/user').then(function(response){
   vm.userInfo = response.data._id;
 });

 vm.postAllUpcoming = function(title, name, release_date, first_air_date, media_type, overview, poster_path){
   trackupcomingService.postUpcoming(vm.userInfo, title, name, release_date, first_air_date, media_type, overview, poster_path).then(function(response){
      swal("Got it!", "Saved to your upcoming list!", "success");
     vm.trackList = response;
 }); //end trackupcomingService
};//end postAllUpcoming

vm.getAllUpcoming = function(){
  trackupcomingService.getUpcoming().then(function(response){
    console.log("getAllUpcoming", response);
    vm.trackList = response;
  });
}; //end getAllUpcoming

vm.deleteAllUpcoming = function(id){
  swal({
title: 'Are you sure?',
text: "You won't be able to revert this!",
type: 'warning',
showCancelButton: true,
confirmButtonColor: '#3085d6',
cancelButtonColor: '#d33',
confirmButtonText: 'Yes, delete it!'
}).then(function () {
swal(
'Deleted!',
'Your file has been deleted.',
'success'
);
});
  trackupcomingService.deleteUpcoming(id).then(function(response){
    vm.getAllUpcoming();
  });
};
});//end controller
