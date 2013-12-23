var naktbApp = angular.module('naktbApp', []);

function CallMeCtrl($scope, $http) {
    $scope.spinner = false;
    $scope.phonePat = /^[0-9]+$/;
    $scope.formName = 'mkfg85l0d34huw';
    $scope.callForm = {};
    $scope.callForm.idstamp = 'xhbHmxD/zTYioxaXirLo01P69S1wBcuKZB8yPVHW1uE=';
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
    }

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
        return $http.post('http://api.naktb.com/index.php?functionName=submitForm&formName=' + $scope.formName, $scope.callForm)
            .success(function (data, status, headers, config) {
                $scope.spinner = false;
                if (status === 200) {
                    $scope.sendSuccess = true;
                } else {
                    $scope.sendError = true;
                }
                $scope.noResend = true;
            })
            .error(function (data, status, headers, config) {
                $scope.spinner = false;
                $scope.sendError = true
                $scope.noResend = true;
            });
    };

};

function RequestCtrl($scope, $http) {
    $scope.spinner = false;
    $scope.formName = 'z1h9lu2k1r50dmw';
    $scope.reqForm = {};
    $scope.reqForm.idstamp = '9JafsAHmdSCQ8bbqqNpstzAidGRgtd9O1+zsm0/6vAA=';
    $scope.reqForm.comment = '';
    $scope.reqForm.defaults = {
        'Field3': 'email@example.com',
        'Field5': ' رسالة',
        'Field7': 'الإســــم'
    };
    $scope.noResend = false;

    $scope.reqForm.Field3 = $scope.reqForm.defaults.Field3;
    $scope.reqForm.Field7 = $scope.reqForm.defaults.Field7;
    $scope.sendSuccess = false;
    $scope.sendError = false;

    $scope.checkForm = function () {
        if (!$scope.noResend) {
            $scope.postRequestForm();
        }
    }

    $scope.checkDefaults = function (inputName) {
        if ($scope.reqForm[inputName] == $scope.reqForm.defaults[inputName]) {
            $scope.reqForm[inputName] = '';
        }
    };

    $scope.checkEntered = function (inputName) {
        if ($scope.reqForm[inputName] == '') {
            $scope.reqForm[inputName] = $scope.reqForm.defaults[inputName];
        }
    };

    $scope.clearForm = function () {
        $scope.reqForm.Field3 = '';
        $scope.reqForm.Field7 = '';
    };


    $scope.postRequestForm = function () {
        $scope.spinner = true;
        return $http.post('http://api.naktb.com/index.php?functionName=submitForm&formName=' + $scope.formName, $scope.reqForm)
            .success(function (data, status, headers, config) {
                $scope.spinner = false;
                if (status === 200) {
                    $scope.sendSuccess = true;
                } else {
                    $scope.sendError = true;
                }
                $scope.noResend = true;
            })
            .error(function (data, status, headers, config) {
                $scope.spinner = false;
                $scope.sendError = true;
                $scope.noResend = true;
            });
    };

}
