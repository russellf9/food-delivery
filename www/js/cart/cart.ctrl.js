// this will be the Angular Controller for the Cart Tab

(function () {

    angular.module('food-delivery.cart',[])
        .controller('Cart', CartCtrl);


    //
    function CartCtrl($scope, $http) {

        console.log('Cart!');
    }

})();


