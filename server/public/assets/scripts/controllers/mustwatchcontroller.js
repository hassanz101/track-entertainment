 myApp.controller('MustwatchController', function(tmdbservice, mustwatchservice, $http, $location) {

   var vm = this;
   vm.watchList = [];

   vm.postAllMustWatch = function(title, name, release_date, first_air_date, media_type, overview) {
     mustwatchservice.postWatch(title, name, release_date, first_air_date, media_type, overview).then(function(response) {
       vm.watchList = response;
     }); //end mustwatchservice
   }; //end postAllMustwatch

   vm.getAllMustWatch = function(title, name, release_date, first_air_date, media_type, overview) {
     mustwatchservice.getWatch(title, name, release_date, first_air_date, media_type, overview).then(function(response) {
       vm.watchList = response;
     }); //end tmdbservice
   }; //end getAllMustWatch

 }); //end controller
