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
          .when('/price.html', {
            templateUrl: '/app/Price/_price.html',
            controller: 'PriceController',
            page: 'price'
          })
          .when('/contact.html', {
            templateUrl: '/app/Contact/_contact.html',
            controller: 'ContactController',
            page: 'contact'
          })
          .when('/who.html', {
            templateUrl: '/app/WhoWeAre/_whoWeAre.html',
            controller: 'WhoWeAreController',
            page: 'whoWeAre'
          })
          .when('/terms.html', {
            templateUrl: '/app/Terms/_terms.html',
            controller: 'TermsController',
            page: 'terms'
          })
          .when('/return_policy.html', {
            templateUrl: '/app/ReturnPolicy/_returnPolicy.html',
            controller: 'ReturnPolicyController',
            page: 'returnPolicy'
          })
          .otherwise({
            templateUrl: '/app/Home/_home.html',
            controllerName: 'MainController',
            page: 'homePage'
          });
      //.when('/who.html', {templateUrl: 'app/WhoWeAre/_whoWeAre.html', pageName: 'whoWeAre'})
      $locationProvider.html5Mode(true);
    });


