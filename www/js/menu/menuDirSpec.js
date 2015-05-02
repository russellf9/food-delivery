'use strict';

describe("The Menu Directive", function() {

    var element,   // our directive jqLite element
        scope,     // the scope where our directive is inserted
        compile;

    // before each test, creates a new fresh scope
    // the inject function interest is to make use of the angularJS
    // dependency injection to get some other services in our test
    // here we need $rootScope to create a new scope
    beforeEach(function() {

        // add the app module
        module('food-delivery');

        module('food-delivery.menu');

        // add the templates as js files
        module('templates');

        inject(function(_$rootScope_, _$compile_) {
            compile = _$compile_;
            scope = _$rootScope_.$new();

            // have to make a dummy functions
            scope.onReceived = function() {
                console.log('onReceived!');
            };
            spyOn(scope, 'onReceived');

            scope.selectItem = function() {
                console.log('selectItem');
            };
            spyOn(scope, 'selectItem');

            element = angular.element('<menu on-received="onReceived" on-select="onSelectItem" on-go="goCart"></menu>');

            compile(element)(scope);

            scope.$digest();
        });
    });


    describe('when the page compiles the menu Directive', function() {

        describe('the menu list', function() {
            it('should notify when the list items have been received', function() {
                expect(scope.onReceived).toHaveBeenCalled();
            });

            it('should display a list of items', function() {
                // use the `find` syntax to count the number of squares
                var items = element.find('.square');
                expect(items.length).toBeGreaterThan(0);
            });

            it('should have the ability to select an item', function() {
            });

            it('should notify once an item has been selected', function() {
                // find something to select
                var images = element.find('.image');
                var image = angular.element(images[0]);

                // TODO
                //scope.selectItem();
            });
        });

        describe('the cart navigation button', function() {

            it('should have a button to select the cart', function() {
                //var button = element(by.buttonText('Purchase'));
            })
        });
    });
});

