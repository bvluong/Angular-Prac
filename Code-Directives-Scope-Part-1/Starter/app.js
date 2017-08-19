const myApp = angular.module('myApp', ['ngRoute']);

myApp.config(($routeProvider) => {
  $routeProvider
    .when('/', {
      templateUrl: 'pages/main.html',
      controller: 'mainController',
    })
    .when('/second', {
      templateUrl: 'pages/second.html',
      controller: 'secondController',
    })
    .when('/second/:num', {
      templateUrl: 'pages/second.html',
      controller: 'secondController',
    });
});

myApp.controller('mainController', [
  '$scope',
  '$log',
  function ($scope, $log) {
    $scope.person = {
      name: 'John Doe',
      street: '911 Police',
      city: 'Sunnyvale',
      state: 'CA',
      zip: '94089',
    };

    $scope.formattedAddress = function (person) {
      return `${person.street}, ${person.city}, ${person.state} ${person.zip}`;
    };
  },
]);

myApp.controller('secondController', [
  '$scope',
  '$log',
  '$routeParams',
  function ($scope, $log, $routeParams) {},
]);

myApp.directive('searchResult', () => ({
  restrict: 'AECM',
  templateUrl: 'directives/searchresult.html',
  replace: true,
  scope: {
    personObject: '=',
    formattedAddressFunction: '&',
  },
}));
