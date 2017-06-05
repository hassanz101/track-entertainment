 myApp.controller('MustwatchController', function(tmdbservice, mustwatchservice, $http, $location) {

  var vm = this;
  vm.watchList = [];
  vm.postAllMustWatch = function(){
    mustwatchservice.postWatch().then(function(response){
      vm.watchList = response;
  }); //end tmdbservice
};//end getAllMustwatch

 });//end controller
