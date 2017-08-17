var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {

  $routeProvider

  .when('/', {
    templateUrl: 'pages/main.html',
    controller: 'mainController'

  })
  .when('/second/', {
    templateUrl: 'pages/second.html',
    controller: 'secondController'
  })
  .when('/second/:num', {
    templateUrl: 'pages/second.html',
    controller: 'secondController'
  });

});

myApp.service('nameService', function() {

  this.name = 'John Doe';

  this.namelength = function() {
    return this.name.length;
  }.bind(this);

});

myApp.controller('mainController', ['$scope', '$location', '$log', 'nameService',
  function($scope, $location, $log, nameService) {

    $scope.name = nameService.name;

    $scope.$watch('name', function() {
      nameService.name = $scope.name;
    });

    $log.main = 'Property from main';

}]);

myApp.controller('secondController', ['$scope', '$location', '$log', '$routeParams', 'nameService',
  function($scope, $location, $log, $routeParams, nameService) {
    $scope.name = nameService.name;

    $scope.$watch('name', function() {
      nameService.name = $scope.name;
    });

    $scope.num = $routeParams.num || 0;
  //
  $log.second = 'Property from second';

}]);


myApp.directive('searchResult', function() {
  return {
    restrict: 'AEC',
    templateUrl: 'directives/searchresult.html',
    replace: true
  };
});
