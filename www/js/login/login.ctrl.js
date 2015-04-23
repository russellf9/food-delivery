(function () {

    angular.module('food-delivery.customer',[])
        .controller('Login', LoginCtrl);


    //
    function LoginCtrl($scope, $http) {

       console.log('Login!');
    }

})();


