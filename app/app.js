angular.module('naktbApp.services',[]);
angular.module('naktbApp.main', []);
angular.module('naktbApp.partials', []);

angular.module('naktbApp',
    [
      'ngRoute',
      'naktbApp.main',
      'naktbApp.services',
      'naktbApp.partials'

    ])



    .config(function($routeProvider, $locationProvider) {
      $routeProvider
          .when('/', {
            templateUrl: '/app/Home/_home.html',
            controller: 'HomeController',
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


