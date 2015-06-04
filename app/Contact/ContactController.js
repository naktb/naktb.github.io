angular.module('naktbApp').controller('ContactController', ['$scope', '$rootScope', '$location', '$route', function($scope, $rootScope, $location, $route) {

  $rootScope.page = $route.current.page;

}]);
