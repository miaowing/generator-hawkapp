/**
 * Created by <%= authorName %> on <%= nowDate %>.
 */
define(
    [
        'lib',
        'core/controllers/core.controller'
    ],
    function () {
        var args = [].slice.call(arguments);
        var Lib = args.shift();
        var ApplicationConfiguration = Lib.ApplicationConfiguration;
        return {
            start: function () {
                ApplicationConfiguration.registerModule('core');
                args.forEach(function (fn) {
                    fn();
                });
            }
        }
    }
);