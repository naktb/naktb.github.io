angular.module('naktbApp.directives')
    .directive('ngMenuHighlight', function($rootScope, $window) {
      return {
        restrict: 'A',
        //require: '',
        link: function (scope, element, attr) {
          //console.log(scope)
          console.log(element)
          //console.log(attr)
          console.count('menus')
          scope.$watch('page', function(){
            if (scope.menu.slug === $rootScope.page) {
              element.addClass('active');
            } else {
              element.removeClass('active');
            }
            console.count('$rootScope');
            console.log($rootScope);
          })
        }
      }
    });
