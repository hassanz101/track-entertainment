myApp.controller('UserController', function(tmdbservice, mustwatchservice, $http, $location) {
  // This happens after view/controller loads
  var vm = this;

  console.log('checking user');

  // Upon load, check this user's session on the server
  $http.get('/user').then(function(response) {
      if(response.data.username) {
          // user has a curret session on the server
          vm.userName = response.data.username;
          console.log('User Data: ', vm.userName);
      } else {
          // user has no session, bounce them back to the login page
          $location.path("/home");
      }
  });

  vm.logout = function() {
    $http.get('/user/logout').then(function(response) {
      console.log('logged out');
      $location.path("/home");
    });
  };

    vm.mediaList = [];
    vm.getAllMedia = function(){
      tmdbservice.getMedia(vm.searchbox).then(function(response){
        vm.mediaList = response;
    }); //end tmdbservice
  };//end getAllMedia
});//end UserController