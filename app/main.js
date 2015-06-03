angular.module('naktbApp.main').controller('MainCtrl', ['$scope','$route', '$routeParams', '$location', function ($scope, $route, $routeParams, $location) {
  $scope.$route = $route;
  $scope.$location = $location;
  $scope.$routeParams = $routeParams;
  alert('ssss');
}]);
