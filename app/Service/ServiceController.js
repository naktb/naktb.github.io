angular.module('naktbApp').controller('ServiceController', ['$scope', '$rootScope', '$location', '$route', function($scope, $rootScope, $location, $route) {

  $rootScope.page = $route.current.page;


}]);
