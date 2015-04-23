// this will be the Angular Controller for the Menu Tab

(function () {

    angular.module('food-delivery.menu',[])
        .controller('Menu', MenuCtrl);


    //
    function MenuCtrl($scope, $http) {

        console.log('Menu!');
    }

})();


