/**
 * entry
 * Created by <%= authorName %> on <%= nowDate %>.
 */
define(
    [
        'lib',
        'core/app'
    ],
    function () {
        var args = [].slice.call(arguments),
            Lib = args.shift(),
            angular = Lib.angular,
            ApplicationConfiguration = Lib.ApplicationConfiguration;

        // 初始化根module
        angular.module(ApplicationConfiguration.getApplicationModuleName(), ApplicationConfiguration.applicationModuleVendorDependencies);

        args.forEach(function(module) {
            module.start();
        });

        //Then define the init function for starting up the application
        angular.element(document).ready(function () {
            //Then init the app
            angular.bootstrap(document, [ApplicationConfiguration.getApplicationModuleName()]);
        });
    }
);
