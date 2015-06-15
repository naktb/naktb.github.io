angular.module('naktbApp.directives')
    .directive('ngMenuHighlight', function($rootScope, $window) {
      return {
        restrict: 'A',
        link: function (scope, element, attr) {
          scope.$watch('page', function(){
            if (scope.menu.slug === $rootScope.page) {
              element.addClass('active');
            } else {
              element.removeClass('active');
            }
          })
        }
      }
    });
