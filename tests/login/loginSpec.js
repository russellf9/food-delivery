'use strict';

describe("Login Controller Unit Tests", function() {

    beforeEach(module('food-delivery.customer'));

    beforeEach(module('ui.router'));

    var ctrl,
        scope,
        state;

    beforeEach(inject(function($rootScope, $state, $controller) {
        scope = $rootScope.$new();
        ctrl = $controller('Login', {$scope: scope, $state: $state});
    }));

    it('should have a controller', function () {
        expect(ctrl).not.toBe(null);
    });


    it('should have a function to go to the goMenu', function () {
        expect(scope.goMenu).not.toBe(null);
    });



});
