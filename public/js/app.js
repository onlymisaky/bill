var app = angular.module("app", ["ngRoute", "Cs","Ds"]);

app.run(["$rootScope", function ($rootScope) {
    $rootScope.title = "Bill"
}]);

app.config(["$routeProvider", function ($routeProvider) {

    $routeProvider
        .when("/test", {
            templateUrl: "./views/test.html",
            controller: "testCtrl"
        })
        .when("/register", {
            templateUrl: "./views/user/register.html",
            controller: "registerCtrl"
        })
        .when("/login", {
            templateUrl: "./views/user/login.html",
            controller: "loginCtrl"
        })
        .when("/edit", {
            templateUrl: "./views/user/edit.html",
            controller: "editCtrl"
        })
        .when("/info", {
            templateUrl: "./views/user/info.html",
            controller: "infoCtrl"
        })
        .when("/add", {
            templateUrl: "./views/bill/add.html",
            controller: "addCtrl"
        })
        .when("/list", {
            templateUrl: "./views/bill/list.html",
            controller: "listCtrl"
        })
        .when("/type", {
            templateUrl: "./views/bill/type.html",
            controller: "typeCtrl"
        })
        .otherwise({
            redirectTo: "/register"
        });
}]);