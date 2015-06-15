angular.module('naktbApp.partials')
    .controller('OrderFormController', ['$scope', '$route', 'formHandler', function ($scope, $route, formHandler) {

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


      $scope.checkForm = function () {
        $scope.spinner = true;
        if (!$scope.noResend) {
          var data = $scope.arrayToObject($scope.orderForm,'name','default');
          formHandler.sendForm({name: $scope.formName, data: data}, formSentCb);
        }

      };

      $scope.arrayToObject = function (arr, key, val) {
        var obj = {};
        for (var i = 0; i < arr.length; i++) {
          var el = arr[i];
          obj[el[key]] = el[val];
        }
        return obj;
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
