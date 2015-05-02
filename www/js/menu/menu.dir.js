(function() {
    angular.module('food-delivery')
        .directive('menu', GetMenu);

    function GetMenu(MenuService) {
        return {
            restrict: 'E',
            scope: {
                onReceived: '&',
                onSelect: '&',
                onGo: '&'
            },
            templateUrl: 'js/menu/menu.html',

            link: function(scope) {
                // the function get the set of all food to order
                MenuService.getMenuItems().then(function(res) {
                    //console.log('menu::results: ',res);
                    scope.onReceived()();
                    scope.items = res;
                });

                // an item has been selected
                scope.selectItem = function(id) {
                    //console.log('menu::selectItem: ',id);
                    scope.onSelect()(id);
                };

                // the user has selected to go to the shopping cart
                scope.goCart = function() {
                    scope.onGo()();
                };
            }
        };
    }

})();

