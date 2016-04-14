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

});
