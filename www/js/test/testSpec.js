'use strict';

// A test to get a Unit Test for simple directive to work
// Uses a very simple Directive with an in-line template

describe('The Test Directive', function() {

    var element,   // our directive jqLite element
        scope,     // the scope where our directive is inserted
        name = 'Russell';

    // necessary as the text to test for some reason has a line break at the end
    function removeAllLineBreaks(string) {
        //This javascript code removes all 3 types of line breaks
       return string.replace(/(\r\n|\n|\r)/gm,"");
    }

    beforeEach(function() {
        // add the app module
        module('food-delivery');
        // add the templates as js files
        module('templates');

        inject(function(_$rootScope_, _$compile_) {
            scope = _$rootScope_.$new();
            scope.name = name;
            element = _$compile_('<test-drtv/>')(scope);
            scope.$digest();
        });
    });

    it('says hello', function() {
        console.log('hi test is: ', element.text());
        var text = removeAllLineBreaks(element.text());
        expect(text).toBe('Hello Russell');
    })
});
