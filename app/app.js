angular.module('naktbApp.services', []);
angular.module('naktbApp.main', []);
angular.module('naktbApp.partials', []);
angular.module('naktbApp.directives', []);

angular.module('naktbApp',
    [
      'ngRoute',
      'naktbApp.main',
      'naktbApp.services',
      'naktbApp.directives',
      'naktbApp.partials'

    ])


    .config(function ($routeProvider, $locationProvider) {
      $routeProvider
          .when('/', {
            templateUrl: '/app/Home/_home.html',
            controller: 'HomeController',
            page: 'homePage'
          })
          .when('/service.html', {
            templateUrl: '/app/Service/_service.html',
            controller: 'ServiceController',
            page: 'service'
          })
          .otherwise({
            templateUrl: '/app/Home/_home.html',
            controllerName: 'MainController',
            page: 'homePage'
          });
      //.when('/who.html', {templateUrl: 'app/WhoWeAre/_whoWeAre.html', pageName: 'whoWeAre'})
      $locationProvider.html5Mode(true);
    });


