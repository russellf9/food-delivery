// this will be the Angular Controller for the Menu Tab

(function () {

    angular.module('food-delivery.menu',[])
        .controller('Menu', MenuCtrl);


    function MenuCtrl($scope, $state, $http) {

        console.log('Menu!');

        // the notification that the menu data has been got
        $scope.onReceived = function() {
            console.log('onReceived!');
        };


        // the notification that a user has selected an item
        $scope.onSelectItem = function(id) {
            console.log('User has selected item: ',id);
        };

        // navigate to the cart
        $scope.goCart = function() {
            $state.go('cart');
        };

    }

})();


