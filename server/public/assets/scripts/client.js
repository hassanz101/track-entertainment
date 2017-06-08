var myApp = angular.module('myApp', ['ngRoute']); //"ui.bootstrap"

/// Routes ///
myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  // get rid of 1.6.4 #!
  $locationProvider.html5Mode(true);

  $routeProvider
    .when('/home', {
      templateUrl: '/views/pages/home.html',
      controller: "LoginController as lc"
    })
    .when('/register', {
      templateUrl: '/views/pages/register.html',
      controller: "LoginController as lc"
    })
    .when('/userHome', {
      templateUrl: '/views/pages/user.html',
      controller: "UserController as uc"
    })
    .when('/mustwatch', {
      templateUrl:'/views/pages/mustwatch.html',
      controller: "MustwatchController as mw"
    })
    .when('/trackupcoming', {
      templateUrl:'/views/pages/upcoming.html',
      controller:"TrackupcomingController as tu"
    })
    .otherwise({
      redirectTo: 'home'
    });

}]);
