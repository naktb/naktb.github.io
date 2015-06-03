angular.module('naktbApp.main').controller('MainController', ['$scope','$route', '$routeParams', '$location', function ($scope, $route, $routeParams, $location) {
  $scope.$route = $route;
  $scope.$location = $location;
  $scope.$routeParams = $routeParams;
  $scope.formTemplateUrl = '/app/partials/callMeBackForm.html';
  alert('ssss');
}]);
