angular.module('naktbApp.services').factory('formHandler', function($http){

  sendForm = function (form, successCb, errorCb) {
    //$scope.spinner = true;
    //$scope.noResend = true;
    var http = $http.post('http://api.naktb.com/index.php?functionName=submitForm&formName=' + form.name, form.data)
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
