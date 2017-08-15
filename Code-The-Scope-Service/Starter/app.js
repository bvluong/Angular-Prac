var myApp = angular.module('myApp', ['ngMessages']);

myApp.controller('mainController', function($scope, $log, $filter) {
  $scope.name = 'Jane doe';
  $scope.occupation = 'Coder';
  $scope.formattedname = $filter('uppercase')($scope.name);

  console.log($scope.formattedname);

  $scope.getname = function() {
    return 'John Doe';
  };
  // console.log($log);
  // console.log($scope);
  // console.log($filter);
});

var searchPeople = function(firstName, lastName, height, age, occupation) {
  return 'Jane Doe';
};

console.log(angular.injector().annotate(searchPeople));
