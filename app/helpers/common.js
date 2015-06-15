angular.module('naktbApp.helpers').service('commonHelpers', function() {

  var formSubmitUrl = function(formId) {
    var apiUrl = ifConfig.api.url ? ifConfig.api.url : '/examples/index.php';
    return apiUrl + '?functionName=submitForm&formName=' + formId;
  };

  var arrayToObject = function (arr, key, val) {
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
      var el = arr[i];
      obj[el[key]] = el[val];
    }
    return obj;
  };

  return {
    formSubmitUrl: formSubmitUrl,
    arrayToObject: arrayToObject
  }

});
