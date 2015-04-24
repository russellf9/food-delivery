(function() {

    angular.module('food-delivery.customer', [])
        .controller('Login', LoginCtrl);


    //
    function LoginCtrl($scope, $state, $http) {

        console.log('Login!');


        $scope.goMenu = function() {
            console.log('go menu');
            $state.go('menu');
        }
    }

})();


