angular.module('naktbApp.partials')
    .controller('CallMeBackController', ['$scope', '$route', 'formHandler', function($scope, $route, formHandler) {

      $scope.spinner = false;
      $scope.phonePat = /^[0-9]+$/;
      $scope.formName = 'm1fj3yms1jn9uw1';
      $scope.callForm = {};
      $scope.callForm.idstamp = '9dEE38FnE/bKQEDjFp3OJfov8wcRTE2xjgD/QyJg8Wo=';
      $scope.callForm.comment = '';
      $scope.callForm.defaults = {
        'Field1': '0000000000',
        'Field3': 'اسم'
      };

      $scope.sendSuccess = false;
      $scope.sendError = false;
      $scope.noResend = false;

      function formSent() {
        console.log('Form has been sent');
      }

      function formFailed() {
        console.warn('smth wrong with form');
      }

      $scope.checkForm = function () {
        if (!$scope.noResend) {
          formHandler.sendForm({name:$scope.formName, data: $scope.callForm}, formSent, formFailed);
        }
      };

      $scope.checkDefaults = function (inputName) {
        if ($scope.callForm[inputName] == $scope.callForm.defaults[inputName]) {
          $scope.callForm[inputName] = '';
        }
      };

      $scope.checkEntered = function (inputName) {
        if ($scope.callForm[inputName] == '') {
          $scope.callForm[inputName] = $scope.callForm.defaults[inputName];
        }
      };


      $scope.clearForm = function () {
        $scope.callForm.Field3 = '';
        $scope.callForm.Field1 = '';
      };

    }]);
