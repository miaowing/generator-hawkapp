/**
 * Created by <%= authorName %> on <%= nowDate %>.
 */
define(
    [
        'lib'
    ],
    function (Lib) {
        var $ = Lib.$,
            angular = Lib.angular;
        return function () {
            angular.module('<%= moduleName %>')
                .factory('<%= storeName %>Store', ['$http', '$q', '$resource',
                    function ($http, $q, $resource) {

                    }
                ]);
        }
    }
);