angular.module('naktbApp.partials')
    .controller('OrderFormController', ['$scope', '$route', 'formHandler', function($scope, $route, formHandler) {

      $scope.formConfig = ifConfig.orderForm;
      $scope.spinner = false;
      $scope.phonePat = /^[0-9]+$/;
      $scope.formName = ifConfig.orderForm.id;
      $scope.orderForm = {};
      $scope.orderForm.idstamp = ifConfig.orderForm.idStamp;
      $scope.orderForm.comment = '';
      $scope.orderForm[ifConfig.orderForm.sources.name] = ifConfig.orderForm.sources.default;

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


      $scope.changeNumber = function(model, count) {
        var currentValue = $scope.orderForm[model],
            countValue = currentValue + count;
        debugger;
        return countValue < 0 ? 0 : countValue;
      };

    }]);
