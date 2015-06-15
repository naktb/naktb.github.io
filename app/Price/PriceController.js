angular.module('naktbApp').controller('PriceController', ['$scope', '$rootScope', '$location', '$route', function($scope, $rootScope, $location, $route) {

  $rootScope.page = $route.current.page;
  $scope.formTemplateUrl = '/app/partials/callMeBackForm.html';

}]);
