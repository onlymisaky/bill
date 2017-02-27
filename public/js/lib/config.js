'use strict';

(function (w) {
    var baseUrl = ".";
    var config = {
        baseUrl: baseUrl,
        paths: {
            "jquery": "framework/jQuery/jquery",
            "angular": "framework/angular/angular",
            "angular-route": "framework/angular/angular-route",
            "angular-sanitize": "framework/angular/angular-sanitize"
        },
        shim: {
            "angular": {
                exports: 'angular'
            },
            'angular-route': {
                deps: ['angular'],
                exports: 'angular-route'
            }
        }
    };

    require.config(config);

})(window);