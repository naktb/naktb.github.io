angular.module('naktbApp.main').controller('MainController', ['$scope','$route', '$rootScope', '$routeParams', '$location', function ($scope, $route, $rootScope, $routeParams, $location) {
  //$scope.$route = $route;
  //$scope.$location = $location;
  //$scope.$routeParams = $routeParams;
  $scope.topMenuUrl = '/app/partials/topMenu.html';
  $scope.footerMenuUrl = '/app/partials/footerMenu.html';
  $rootScope.pageTitle = 'Welcome';

  $scope.$on('$routeChangeSuccess', function (next, current) {
    $rootScope.pageTitle = current.pageTitle;
  });

}]);
