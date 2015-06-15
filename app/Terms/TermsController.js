angular.module('naktbApp').controller('TermsController', ['$scope', '$rootScope', '$location', '$route', function($scope, $rootScope, $location, $route) {

  $rootScope.page = $route.current.page;

}]);
