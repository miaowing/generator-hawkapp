/**
 * Created by <%= authorName %> on <%= nowDate %>.
 */
require.config({
    // baseUrl: '/modules',
    paths: {
        'lib': 'lib',
        'angular': '../bower_components/angular/angular',
        'angular-route': '../bower_components/angular-route/angular-route',
        'angular-cookies': '../bower_components/angular-cookies/angular-cookies',
        'angular-sanitize': '../bower_components/angular-sanitize/angular-sanitize',
        'angular-resource': '../bower_components/angular-resource/angular-resource',
        'angular-animate': '../bower_components/angular-animate/angular-animate',
        'angular-ui-utils': '../bower_components/angular-ui-utils/ui-utils',
        'angular-ui-router': '../bower_components/angular-ui-router/release/angular-ui-router',
        'jquery': '../bower_components/jquery/dist/jquery',
        'moment': '../bower_components/moment/moment'
    },
    shim: {
        'angular': {
            deps: ['jquery'],
            exports: 'angular'
        },
        'angular-route': ['angular'],
        'angular-cookies': ['angular'],
        'angular-sanitize': ['angular'],
        'angular-resource': ['angular'],
        'angular-animate': ['angular'],
        'angular-ui-utils': ['angular'],
        'angular-ui-router': ['angular', 'angular-ui-utils']
    }
});
require(['core/main']);



