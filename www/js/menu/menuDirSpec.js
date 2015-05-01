'use strict';

describe("The Menu Directive", function() {

    var element,   // our directive jqLite element
        scope,     // the scope where our directive is inserted
        compile,
        template,
        compiledElement,
        isolatedScope;



    function compileDirective(template) {

    }

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
            // have to make a dummy function
            scope.onReceived = function() {
                console.log('onReceived!');
            };

            element = angular.element('<menu on-received="onReceived" on-select="onSelectItem" on-go="goCart"></menu>');
            //
            compile(element)(scope);

            scope.$digest();

        });
    });


    describe('when the page compiles the menu Directive', function() {

        it('should have some loaded the templates', function () {

        });

        xdescribe('the menu list', function() {
            // <div class="list">
            it('should display a list of items', function() {
            });

            it('should notify when the list items have been received');

            it('should have the ability to select an item');

            it('should notify once an item has been selected');
        });

        xdescribe('the cart navigation button', function() {

            it('should have a button to select the cart')

        });

    });



});
