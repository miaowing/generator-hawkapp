define(
    [
        'lib',
        '<%= moduleName %>/router/router',
        '<%= moduleName %>/controllers/<%= moduleName %>.controller',
        '<%= moduleName %>/services/<%= moduleName %>.service'
    ],
    function () {
        vvar args = [].slice.call(arguments);
        var Lib = args.shift();
        var ApplicationConfiguration = Lib.ApplicationConfiguration;
        return {
            start: function () {
                ApplicationConfiguration.registerModule('<%= moduleName %>');
                args.forEach(function (fn) {
                    fn();
                });
            }
        }
    }
);