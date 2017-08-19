var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

myApp.controller('mainController', ['$scope', '$timeout', '$filter', '$http', ($scope, $timeout, $filter, $http) => ({

  $scope.handle = "";
  
  $scope.lowercasehandle = function() {
     return $filter('lowercase')($scope.handle);
   };

   $scope.characters = 5;


   $scope.rules = [

     { rulename: "Must be 5 characters"},
     { rulename: "Must not be used elsewhere"},
     { rulename: "Must be cool"}

   ];

})]);


myApp.controller('secondController', ['$scope',
 function($scope) {
   $scope.name = 'Second';
}]);
