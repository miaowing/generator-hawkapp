define(
    [
        'lib',
        '<%= moduleName %>/controllers/<%= moduleName %>.controller',
        '<%= moduleName %>/services/<%= moduleName %>.service'
    ],
    function (Lib, <%= moduleName%>Controller, <%= moduleName%>Service) {
        var ApplicationConfiguration = Lib.ApplicationConfiguration;
        return {
            start: function () {
                ApplicationConfiguration.registerModule('<%= moduleName %>');
                <%= moduleName%>Controller();
                <%= moduleName%>Service();
            }
        }
    }
);