angular.module("Cs", [])
    // user
    // 注册
    .controller("registerCtrl", ["$scope", "$http", "$rootScope", "$location", function ($scope, $http, $rootScope, $location) {
        $rootScope.title = "用户注册";
        $scope.disabled = false;
        $scope.register = function () {
            $scope.disabled = true;
            var data = $scope.user;
            console.log(data);
            $http({
                url: "./users/register",
                method: "post",
                data: data
            }).then(function (r) {
                var data = r.data;
                if (data.code == "s") {
                    $location.path("/login");
                } else {
                    $scope.disabled = false;
                }
            }).catch(function (e) {
                console.log(e);
                $scope.disabled = false;
            });
        }
    }])
    // 登陆
    .controller("loginCtrl", ["$scope", function ($scope) {

    }])
    // 修改个人信息
    .controller("editCtrl", ["$scope", function ($scope) {

    }])
    // 个人信息
    .controller("infoCtrl", ["$scope", function ($scope) {

    }])
    // 账单
    // 记账
    .controller("addCtrl", ["$scope", function ($scope) {

    }])
    // 查看
    .controller("listCtrl", ["$scope", function ($scope) {

    }])
    // 分类
    .controller("typeCtrl", ["$scope", function ($scope) {

    }]);