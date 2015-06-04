angular.module('naktbApp').controller('WhoWeAreController', ['$scope', '$rootScope', '$location', '$route', function($scope, $rootScope, $location, $route) {

  $rootScope.page = $route.current.page;

}]);
