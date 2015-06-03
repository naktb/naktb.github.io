//angular.module('naktbApp.services',[]);
angular.module('naktbApp.main', ['ngRoute']);

angular.module('naktbApp', [
  'ngRoute',
  'naktbApp.main',
  //'naktbApp.services'
])
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
      alert('asdsd');
      $routeProvider
          .when('/', {templateUrl: 'app/Home/_home.html', controller: 'MainController', pageName: 'homePage'})
      //.when('/who.html', {templateUrl: 'app/WhoWeAre/_whoWeAre.html', pageName: 'whoWeAre'})

    }]);


