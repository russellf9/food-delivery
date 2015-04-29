// this will be the Angular Controller for the Menu View

(function () {

    angular.module('food-delivery.menu',[])
        .controller('Menu', MenuCtrl);


    function MenuCtrl($scope, $state) {

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
            console.log('go cart!');
            $state.go('cart');
        };

    }

})();


