angular.module('naktbApp.partials')
  .controller('FooterMenuController', ['$scope', '$rootScope', '$route', '$routeParams', function($scope, $rootScope, $route, $routeParams) {
      $scope.menuItems = [
        {
          url: 'return_policy.html',
          title: 'سياسة الإسترجاع',
          slug: 'returnPolicy'
        },
        {
          url: 'terms.html',
          title: 'الشروط والاحكام',
          slug: 'terms'
        }
      ];


    }]);
