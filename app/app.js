angular.module('naktbApp.main', []);
angular.module('naktbApp.services', []);
angular.module('naktbApp.helpers', []);
angular.module('naktbApp.directives', []);
angular.module('naktbApp.partials', []);

angular.module('naktbApp',
    [
      'ngRoute',
      'naktbApp.main',
      'naktbApp.services',
      'naktbApp.helpers',
      'naktbApp.directives',
      'naktbApp.partials'

    ])


    .config(function ($routeProvider, $locationProvider) {
      $routeProvider
          .when('/', {
            templateUrl: '/app/Home/_home.html',
            controller: 'HomeController',
            pageTitle: 'Welcome',
            page: 'homePage'
          })
          .when('/index.html', {
            templateUrl: '/app/Home/_home.html',
            controller: 'HomeController',
            pageTitle: 'Welcome',
            page: 'homePage'
          })
          .when('/service.html', {
            templateUrl: '/app/Service/_service.html',
            controller: 'ServiceController',
            pageTitle: 'Our Services',
            page: 'service'
          })
          .when('/price.html', {
            templateUrl: '/app/Price/_price.html',
            controller: 'PriceController',
            pageTitle: 'Prices',
            page: 'price'
          })
          .when('/contact.html', {
            templateUrl: '/app/Contact/_contact.html',
            controller: 'ContactController',
            pageTitle: 'Contact Us',
            page: 'contact'
          })
          .when('/who.html', {
            templateUrl: '/app/WhoWeAre/_whoWeAre.html',
            controller: 'WhoWeAreController',
            pageTitle: 'Who We Are',
            page: 'whoWeAre'
          })
          .when('/terms.html', {
            templateUrl: '/app/Terms/_terms.html',
            controller: 'TermsController',
            pageTitle: 'Terms of Use',
            page: 'terms'
          })
          .when('/return_policy.html', {
            templateUrl: '/app/ReturnPolicy/_returnPolicy.html',
            controller: 'ReturnPolicyController',
            pageTitle: 'Return Policy',
            page: 'returnPolicy'
          })
          .otherwise({
            templateUrl: '/app/Home/_home.html',
            controllerName: 'MainController',
            pageTitle: 'Welcome',
            page: 'homePage'
          });
      $locationProvider.html5Mode(true);
    });


