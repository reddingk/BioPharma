// routes

(function () {
	'use strict';

  angular.module('appRoutes').config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'MainController'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutController'
    })
    .otherwise({
       redirectTo: '/'
    });

    $locationProvider.html5Mode(true);

  }]);

})();
