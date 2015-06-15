angular.module('naktbApp.partials')
    .controller('OrderFormController', ['$scope', '$route', 'formHandler', 'commonHelpers', function ($scope, $route, formHandler, commonHelpers) {

      var controls = ifConfig.orderForm.controls;
      $scope.spinner = false;
      $scope.phonePat = /^[0-9]+$/;
      $scope.formName = ifConfig.orderForm.id;
      $scope.orderForm = controls;
      //$scope.orderForm.idstamp = ifConfig.orderForm.idStamp;
      //$scope.orderForm.comment = '';


      $scope.noResend = false;

      function formSentCb(status) {
        formHandler.formMessage($scope, status);
      }

      $scope.closeMessageBox = function () {
        $scope.formMessage = null;
      };


      $scope.checkForm = function ($form) {
        $scope.spinner = true;
        if (!$scope.noResend && $form.$valid) {
          var data = commonHelpers.arrayToObject($scope.orderForm,'name','default');
          data.idstamp = ifConfig.orderForm.idStamp;

          formHandler.submitWithFile({name: $scope.formName, data: data}, formSentCb);
        } else {
          $scope.spinner = false;
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


      $scope.changeNumber = function (index, count) {
        var currentValue = $scope.orderForm[index].default,
            countValue = currentValue + count;
        $scope.orderForm[index].default = countValue < 0 ? 0 : countValue;
      };

    }]);
