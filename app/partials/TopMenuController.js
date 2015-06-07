angular.module('naktbApp.partials')
  .controller('TopMenuController', ['$scope', '$rootScope', '$route', '$routeParams', function($scope, $rootScope, $route, $routeParams) {
      $scope.menuItems = [
        {
          url: 'who.html',
          title: 'من نحن',
          slug: 'whoWeAre'
        },
        {
          url: 'service.html',
          title: 'خدماتنا',
          slug: 'service'
        },
        {
          url: 'price.html',
          title: 'الأسعار',
          slug: 'price'
        },
        {
          url: 'contact.html',
          title: 'اطلب',
          slug: 'contact'
        }
      ];

      //console.log($rootScope);


    }]);
