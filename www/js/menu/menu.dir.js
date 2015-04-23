(function() {
    angular.module('qudini.QueueApp')
        .directive('menu', GetMenu);

    function GetMenu($http) {
        return {
            restrict: 'E',
            scope: {
                // add function call back here...
                onReceived: '&'
            },
            templateUrl: '/menu/menu.html',
            link: function(scope) {
                // the function get the set of all food to order

                // TODO can we always get this?
                scope.getMenu = function() {
                    $http.post('/api/menu').then(function(res) {
                        scope.onReceived()(); // note double parenthesis
                    });
                }
            }
        };
    }

})();

