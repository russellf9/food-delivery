'use strict';

// A test to get a Unit Test for simple directive to work
// Uses a very simple Directive with an in-line template

describe('The Test Directive', function() {

    var element,   // our directive jqLite element
        scope,     // the scope where our directive is inserted
        name = 'Russell',
        httpBackend;

    beforeEach(function() {
        module('food-delivery');

        inject(function(_$rootScope_, _$compile_, _$injector_) {
            httpBackend = _$injector_.get('$httpBackend');

            // will only work with the ngMockE2E module
            //httpBackend.whenGET(/^\/templates\//).passThrough();

            httpBackend.whenGET(/templates/).respond(200, '');

            scope = _$rootScope_.$new();
            scope.name = name;
            element = _$compile_('<test-drtv/>')(scope);
            scope.$digest();
        });
    });

    it('says hello', function() {
        expect(element.text()).toBe('Hello Russell');
    })
});
