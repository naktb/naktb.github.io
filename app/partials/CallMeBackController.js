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

      $scope.noResend = false;

      function formSentCb(status) {
        formHandler.formMessage($scope, status);
      }

      $scope.closeMessageBox = function() {
        $scope.formMessage = null;
      };


      $scope.checkForm = function () {
        $scope.spinner = true;
        if (!$scope.noResend) {
          formHandler.sendForm({name:$scope.formName, data: $scope.callForm}, formSentCb);
        }
      };

      $scope.checkDefaults = function (inputName) {
        formHandler.checkDefault(this.callMeBackForm, inputName);
      };

      $scope.checkEntered = function (inputName) {
        formHandler.checkEntered(this.callMeBackForm, inputName);
      };


      $scope.clearForm = function () {
        $scope.callForm.Field3 = '';
        $scope.callForm.Field1 = '';
      };

    }]);
