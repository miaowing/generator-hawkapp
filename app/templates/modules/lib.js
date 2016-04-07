/**
 * Created by <%= authorName %> on <%= nowDate %>.
 */
define(
    [
        'jquery',
        'angular',
        'moment',
        'angular-route',
        'angular-cookies',
        'angular-sanitize',
        'angular-resource',
        'angular-animate',
        'angular-ui-utils',
        'angular-ui-router'
    ], function ($, angular, moment) {
        /**
         * 快速定义App
         */
        var ApplicationConfiguration = (function () {
            // Init module configuration options
            var applicationModuleName = '<%= projectName %>';
            var applicationModuleVendorDependencies = ['ngResource', 'ngCookies', 'ngAnimate', 'ngSanitize', 'ui.router', 'ui.utils'];

            // 调试url头，生产环境设为空字符串
            var debugUrl = window.debugUrl || '';

            // Add a new vertical module
            var registerModule = function (moduleName, dependencies) {
                // Create angular module
                angular.module(moduleName, dependencies || []);
                // Add the module to the AngularJS configuration file
                angular.module(applicationModuleName).requires.push(moduleName);
            };

            var setRootModule = function (rootModuleName) {
                applicationModuleName = rootModuleName;
            };

            return {
                getApplicationModuleName: function () {
                    return applicationModuleName
                },
                applicationModuleVendorDependencies: applicationModuleVendorDependencies,
                registerModule: registerModule,
                setRootModule: setRootModule,
                debugUrl: debugUrl
            };
        })();
        return {
            $: $,
            moment: moment,
            angular: angular,
            ApplicationConfiguration: ApplicationConfiguration
        }
    }
);