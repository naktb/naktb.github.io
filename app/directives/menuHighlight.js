angular.module('naktbApp.directives')
    .directive('ngMenuHighlight', function($rootScope, $window) {
      return {
        restrict: 'A',
        //require: '',
        link: function (scope, element, attr) {
          console.log(scope)
          console.log(element)
          console.log(attr)
          console.count('menus')
          scope.w
        }
      }
    });
