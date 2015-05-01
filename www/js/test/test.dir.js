(function() {

    angular.module('food-delivery')
        .directive('testDrtv', Test);

    function Test() {
        return {
            restrict: 'E',
            replace: false,
            //template: '<div>Hello {{name}}</div>'
            templateUrl: 'js/test/test.html'
        };
    }
})();

