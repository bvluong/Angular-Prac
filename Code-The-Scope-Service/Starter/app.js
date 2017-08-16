var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

myApp.controller('mainController', ['$scope', '$timeout', '$filter', function($scope, $timeout, $filter) {

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

}]);
//
// var searchPeople = function(firstName, lastName, height, age, occupation) {
//   return 'Jane Doe';
// };
//
// console.log(angular.injector().annotate(searchPeople));
