 myApp.controller('MustwatchController', function(tmdbservice, mustwatchservice, $http, $location) {

   var vm = this;
   vm.watchList = [];

   $http.get('/user').then(function(response){
     vm.userInfo = response.data._id;
   });

   vm.postAllMustWatch = function(title, name, release_date, first_air_date, media_type, overview, poster_path) {
     mustwatchservice.postWatch(vm.userInfo, title, name, release_date, first_air_date, media_type, overview, poster_path).then(function(response) {
       swal("Got it!", "Saved to your must watch list!", "success");
       vm.watchList = response;
     }); //end mustwatchservice
   }; //end postAllMustwatch

   vm.getAllMustWatch = function() {
     mustwatchservice.getWatch().then(function(response) {
       console.log("must watch GET RESPONSE",response);
       vm.watchList = response;
       console.log("vm watchlist LOG", vm.watchList );
     }); //end mustwatchservice
   }; //end getAllMustWatch

   vm.deleteAllMustWatch = function(id){
      mustwatchservice.deleteWatch(id).then(function(){
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
      vm.getAllMustWatch();
      });
   };
 }); //end controller
