angular.module('naktbApp').controller('ReturnPolicyController', ['$scope', '$rootScope', '$location', '$route', function($scope, $rootScope, $location, $route) {

  $rootScope.page = $route.current.page;

}]);
