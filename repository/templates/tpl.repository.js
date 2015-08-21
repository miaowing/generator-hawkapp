/**
 * Created by <%= authorName %> on <%= nowDate %>.
 */
define(
    [
        'lib',
    ],
    function (Lib) {
        var $ = Lib.$,
            angular = Lib.angular;
        return function () {
            angular.module('<%= moduleName %>')
                .factory('<%= repositoryName %>Repository', ['$http', '$q', '$resource'
                    function ($http, $q, $resource) {
                        

                        // 离开该路由前执行清理工作
                        $scope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
                            // TODO 清理工作
                        });

                    }
                ]);
        }
    }
);