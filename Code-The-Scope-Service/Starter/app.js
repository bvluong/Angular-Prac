var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

myApp.controller('mainController', ['$scope', '$timeout', '$filter', function($scope, $timeout, $filter) {

  $scope.handle = "";
  $scope.lowercasehandle = function() {
     return $filter('lowercase')($scope.handle);
   };

   $scope.$watch('handle', function(newVal, oldVal) {
     console.log(newVal, oldVal);
   });


  // $timeout(function() {
  //   $scope.name = 'Everybody';
  // },3000);
}]);
//
// var searchPeople = function(firstName, lastName, height, age, occupation) {
//   return 'Jane Doe';
// };
//
// console.log(angular.injector().annotate(searchPeople));
