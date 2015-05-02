'use strict';

describe("Menu Controller Unit Tests", function() {

    // define the required modules firts
    beforeEach(module('food-delivery.menu'));
    beforeEach(module('ui.router'));

    var ctrl,
        scope,
        state;

    beforeEach(inject(function($rootScope, $state, $controller) {
        scope = $rootScope.$new();
        state = $state;
        ctrl = $controller('Menu', {$scope: scope, $state: $state});
        spyOn(state, 'go');

    }));

    it('should have a controller', function () {
        expect(ctrl).not.toBe(null);
    });

    it('should have a `onReceived` property which is a function', function () {
        expect(scope.onReceived).not.toBe(null);
        expect(scope.onReceived).toEqual(jasmine.any(Function));
    });

    it('should have a `onSelectItem` property which is a function', function () {
        expect(scope.onSelectItem).not.toBe(null);
        expect(scope.onSelectItem).toEqual(jasmine.any(Function));
    });

    describe('The goCart function', function() {
        it('should have a `goCart` function', function () {
            expect(scope.goCart).not.toBe(null);
        });

        it('should change state', function () {
            scope.goCart();
            expect(state.go).toHaveBeenCalledWith('cart');
        });
    });
});
