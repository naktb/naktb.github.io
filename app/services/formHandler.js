angular.module('naktbApp.services').factory('formHandler', function ($http, formDataObject, commonHelpers) {

  var sendForm = function (form, cb) {
    var formSubmitUrl = commonHelpers.formSubmitUrl(form.name);
    var http = $http.post(formSubmitUrl, form.data)
        .success(function (data, status, headers, config) {
          cb(status);
        })
        .error(function (data, status, headers, config) {
          cb(status);
        });

    return http;
  };

  var submitWithFile = function (form, cb) {
    var formSubmitUrl = commonHelpers.formSubmitUrl(form.name);
    var http = $http({
      method: 'POST',
      url: formSubmitUrl,
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      data: form.data,
      transformRequest: formDataObject
    })
        .success(function (data, status, headers, config) {
          cb(status);
        })
        .error(function (data, status, headers, config) {
          cb(status);
        });

    return http;
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
