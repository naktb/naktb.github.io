//angular.module('naktbApp.services',[]);
angular.module('naktbApp.main', []);

angular.module('naktbApp', ['ngRoute', 'naktbApp.main'])



    .config(function($routeProvider, $locationProvider) {
      alert('asdsd');
      $routeProvider
          .when('/', {
            templateUrl: '/app/Home/_home.html',
            controller: 'MainController',
            pageName: 'homePage'
          })
          .otherwise({
            templateUrl: '/app/Home/_home.html',
            controllerName: 'MainController',
            pageName: 'homePage'
          });
      //.when('/who.html', {templateUrl: 'app/WhoWeAre/_whoWeAre.html', pageName: 'whoWeAre'})
      $locationProvider.html5Mode(true);
    });


