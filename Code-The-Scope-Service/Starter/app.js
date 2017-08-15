var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope) {
  $scope.name = 'Jane doe';
  $scope.occupation = 'Coder';

  $scope.getname = function() {
    return 'John Doe';
  };

  console.log($scope);
});
