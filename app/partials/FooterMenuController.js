angular.module('naktbApp.partials')
  .controller('FooterMenuController', ['$scope', '$rootScope', '$route', '$routeParams', function($scope, $rootScope, $route, $routeParams) {
      $scope.menuItems = [
        {
          url: 'return_policy.html',
          title: 'Return Policy',
          slug: 'returnPolicy'
        },
        {
          url: 'terms.html',
          title: 'Terms&Conditions',
          slug: 'terms'
        }
      ];


    }]);
