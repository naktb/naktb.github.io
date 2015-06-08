angular.module('naktbApp.services').factory('formHandler', function($http){

  sendForm = function (form, successCb, errorCb) {
    //$scope.spinner = true;
    //$scope.noResend = true;
    var apiUrl = ifConfig.api.url ? ifConfig.api.url : '/examples/index.php';
    var http = $http.post(apiUrl + '?functionName=submitForm&formName=' + form.name, form.data)
        .success(function (data, status, headers, config) {
          //$scope.spinner = false;
          if (status === 200) {
            //$scope.sendSuccess = true;
            successCb();
          } else {
            //$scope.sendError = true;
            errorCb();
          }
        })
        .error(function (data, status, headers, config) {
          //$scope.spinner = false;
          //$scope.sendError = true;
          errorCb();
        });

    return http;
  };

  return {
    sendForm: sendForm
  }

})
