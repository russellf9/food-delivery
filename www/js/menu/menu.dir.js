(function() {
    angular.module('food-delivery')
        .directive('menu', GetMenu);

    function GetMenu(MenuService) {
        return {
            restrict: 'E',
            scope: {
                onReceived: '&'
            },
            templateUrl: 'js/menu/menu.html',
            link: function(scope) {
                // the function get the set of all food to order
                MenuService.getMenuItems().then(function(res) {
                    console.log('results: ',res);
                    scope.onReceived()()
                    scope.items = res;
                })
            }
        };
    }

})();

