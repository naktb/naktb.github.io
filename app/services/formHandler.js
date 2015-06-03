angular.module('naktbApp.services').factory('formHelper', function(){

  sendForm = function (successCb, errorCb) {
    $scope.spinner = true;
    $scope.noResend = true;
    //return $http.post('http://api.naktb.com/index.php?functionName=submitForm&formName=' + $scope.formName, $scope.callForm)
    //    .success(function (data, status, headers, config) {
    //      $scope.spinner = false;
    //      if (status === 200) {
    //        $scope.sendSuccess = true;
    //        successCb();
    //      } else {
    //        $scope.sendError = true;
    //        errorCb();
    //      }
    //    })
    //    .error(function (data, status, headers, config) {
    //      $scope.spinner = false;
    //      $scope.sendError = true;
    //      errorCb();
    //    });
  };

  return {
    sendForm: sendForm
  }

})
