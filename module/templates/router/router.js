define([
    'lib',
    'text!<%= moduleName %>/views/<%= moduleName %>.view.html'
], function (lib) {
    var angular = lib.angular;
    var tpl = [].slice.call(arguments, 1);
    return function () {
        angular.module('<%= moduleName %>')
            .config(['$stateProvider', function ($stateProvider) {
                $stateProvider
                    .state('<%= moduleName %>', {
                        url: '/<%= moduleName %>',
                        template: tpl[0]
                    })
            }]);
    }
});