function CallMeCtrl($scope, $http) {
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

  $scope.checkForm = function () {
    if (!$scope.noResend) {
      $scope.postCallMeForm();
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


  $scope.postCallMeForm = function () {
    $scope.spinner = true;
    $scope.noResend = true;
    return $http.post('http://api.naktb.com/index.php?functionName=submitForm&formName=' + $scope.formName, $scope.callForm)
        .success(function (data, status, headers, config) {
          $scope.spinner = false;
          if (status === 200) {
            $scope.sendSuccess = true;
          } else {
            $scope.sendError = true;
          }
        })
        .error(function (data, status, headers, config) {
          $scope.spinner = false;
          $scope.sendError = true;
        });
  };

};
