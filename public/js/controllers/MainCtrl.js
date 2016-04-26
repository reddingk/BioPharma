angular.module('MainCtrl', []).controller('MainController', function($scope){
  $scope.title = "Home";

  /*$scope.sections = {
    "s1": 'views/templates/_home1.html',
    "s2": 'views/templates/_services.html'
  };*/
  $scope.sections = [
    {"id":"main", "template":'views/templates/_main.html'},
    {"id":"teamwork", "template":'views/templates/_teamwork.html'},
    {"id":"services", "template":'views/templates/_services.html'},
    {"id":"investors", "template":'views/templates/_investors.html'},
    {"id":"contactus", "template":'views/templates/_contactus.html'}
  ];

  $scope.services = [
    {"title":"Nemo enim ipsam voluptatem", "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},
    {"title":"Excepteur sint occaecat cupidatat", "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},
    {"title":"Duis aute irure dolor in reprehenderit", "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}
  ];

});
