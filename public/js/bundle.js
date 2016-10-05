(function () {
	"use strict";

		angular.module('homeCtrl', ['ui.bootstrap']);
		angular.module('config', [ 'ngMaterial' ]);
		angular.module('directives', []);
		/**/
    angular.module('bioPharmaApp', ['ngMaterial','ngAnimate','ui.router','duScroll','directives', 'config','homeCtrl']);

})();

(function(){

  angular
    .module('config')
    .config(['$stateProvider', '$urlRouterProvider','$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
      $stateProvider
      .state('app', {
        url: "/",
        views: {
          'content':{
            templateUrl: 'views/home.html',
            controller: 'HomeController as hc'
          },
          'header':{
            templateUrl: 'views/templates/_header.html'
          }
        }
      })
      .state('app.construction', {
        url: "underconstruction",
        views: {
          'content@': {
            templateUrl: 'views/construction.html'
          }
        }
      });

      $urlRouterProvider.otherwise('/');
      $locationProvider.html5Mode(true);
    }]);


})();

(function(){
   "use strict";

    angular.module('homeCtrl').controller('HomeController', ['$state', function($state){
      var vm = this;
      vm.title = "Home";

      vm.sections = [
        {"id":"main", "template":'views/templates/_main.html'},
        {"id":"teamwork", "template":'views/templates/_teamwork.html'},
        {"id":"services", "template":'views/templates/_services.html'},
        {"id":"investors", "template":'views/templates/_investors.html'},
        {"id":"contactus", "template":'views/templates/_contactus.html'}
      ];

      vm.services = [
        {"title":"Nemo enim ipsam voluptatem", "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},
        {"title":"Excepteur sint occaecat cupidatat", "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},
        {"title":"Duis aute irure dolor in reprehenderit", "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}
      ];

    }]);

})();

angular.module('directives', []).directive('sectionBottom', function ($window) {
  return {
    restrict: 'EA',
    link: function ($scope, element, attrs) {

      angular.element($window).bind("scroll", function() {
        var bottomSection = angular.element(document.getElementsByClassName("mainBody"))[0].children[1].offsetTop;
        var windowp = angular.element($window)[0];
        var invPop = angular.element(document.getElementsByClassName("investorsPop"));

        if((windowp.innerHeight == bottomSection) || (windowp.pageYOffset > (bottomSection - this.innerHeight))){
          if(!invPop.hasClass("screenPass"))
            invPop.addClass("screenPass");
        }
        else {
          if(invPop.hasClass("screenPass")){
            invPop.removeClass("screenPass");
          }
        }
      });
    }
  }
});
