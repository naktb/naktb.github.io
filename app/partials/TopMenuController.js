angular.module('naktbApp.partials')
  .controller('TopMenuController', ['$scope','$route', '$routeParams', function($scope, $route, $routeParams) {
      $scope.menuItems = [
        {
          url: 'who.html',
          title: 'Who',
          slug: 'whoWeAre'
        },
        {
          url: 'contact.html',
          title: 'Contact',
          slug: 'contact'
        },
        {
          url: 'price.html',
          title: 'Prices',
          slug: 'prices'
        },
        {
          url: 'service.html',
          title: 'Service',
          slug: 'service'
        }
      ];


    }]);
