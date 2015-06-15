angular.module('naktbApp.services').factory('formHandler', function ($http, formDataObject) {

  var sendForm = function (form, cb) {
    //$scope.spinner = true;
    //$scope.noResend = true;
    var apiUrl = ifConfig.api.url ? ifConfig.api.url : '/examples/index.php';
    var http = $http.post(apiUrl + '?functionName=submitForm&formName=' + form.name, form.data)
        .success(function (data, status, headers, config) {
          //$scope.spinner = false;
          cb(status);
        })
        .error(function (data, status, headers, config) {
          //$scope.spinner = false;
          //$scope.sendError = true;
          cb(status);
        });

    return http;
  };

  var submitWithFile = function (data) {
    return $http({
      method: 'POST',
      url: '/your/url',
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      data: data,
      transformRequest: formDataObject
    });
  };

  var formMessage = function ($scope, status) {
    var successMessage = ifConfig.messages.formSuccess ? ifConfig.messages.formSuccess : 'Form has been sent';
    var errorMessage = ifConfig.messages.formFailed ? ifConfig.messages.formFailed : 'Something gone wrong';

    if (status === 200) {
      $scope.formMessage = successMessage;
      $scope.formError = false;
    } else {
      $scope.formMessage = errorMessage;
      $scope.formError = true;
    }

    $scope.spinner = false;
    $scope.noResend = true;
  };

  var checkDefault = function ($form, inputName) {

    var defaults = ifConfig[$form.$name] ? ifConfig[$form.$name].defaults : {};

    if ($form[inputName].$viewValue == defaults[inputName]) {
      $form[inputName].$viewValue = '';
    }
  };

  var checkEntered = function ($form, inputName) {

    console.log($form);

    var defaults = ifConfig[$form.$name] ? ifConfig[$form.$name].defaults : {};

    if ($form[inputName].$viewValue == '') {
      $form[inputName].$viewValue = defaults[inputName];
    } else if ($form[inputName].$viewValue == defaults[inputName]) {
      $form[inputName].$viewValue = '';
    }
  };

  return {
    sendForm: sendForm,
    submitWithFile: submitWithFile,
    formMessage: formMessage,
    checkDefault: checkDefault,
    checkEntered: checkEntered
  }

});
