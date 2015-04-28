'use strict';

describe("Login Controller Unit Tests", function() {

    beforeEach(module('food-delivery.customer'));

    beforeEach(module('ui.router'));

    var ctrl,
        scope,
        state;

    beforeEach(inject(function($rootScope, $state, $controller) {
        scope = $rootScope.$new();
        state = $state;
        ctrl = $controller('Login', {$scope: scope, $state: $state});
        spyOn(state, 'go');

    }));

    it('should have a controller', function () {
        expect(ctrl).not.toBe(null);
    });

    describe('The goMenu function', function() {

        it('should have a `goMenu` function', function () {
            expect(scope.goMenu).not.toBe(null);
        });

        it('should change state', function () {
            scope.goMenu();
            expect(state.go).toHaveBeenCalledWith('menu');
        });
    });
});

