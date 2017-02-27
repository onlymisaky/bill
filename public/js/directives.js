angular.module("Ds", [])
    .directive("showmsg", function () {
        return {
            restirct: "ACME",
            scope: false,
            template: '<div class="iconfont icon-smile" style="color:green">{{msg}}</div>',
            replace: true,
            controller: function ($scope, $element, $attrs, $transclude) {
                //暴露给外部
                
            },

            link: function ($scope, elm, attr, controller) {
                //处理指令内部的事务
                //一般在此处操作dom，监听事件等
                //$scop：父$scope
                //element：当前元素
                //controller：依赖的指令
                $scope.msg = "heh"
                elm.append("12312");
            }
        }
    });