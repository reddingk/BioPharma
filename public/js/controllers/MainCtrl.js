angular.module('MainCtrl', []).controller('MainController', function($scope){
  $scope.title = "Home";

  $scope.sections = {
    "s1": 'views/templates/_home1.html',
    "s2": ''
  };

});
