'use strict';

describe("The Menu Service", function() {

    beforeEach(module('food-delivery.menu'));

    var MenuService,
        rootScope,
        mockData;

    beforeEach(inject(function (_MenuService_, _$rootScope_, $q) {
        MenuService = _MenuService_;
        rootScope = _$rootScope_;

        mockData =  [{id:1, title: 'Gazpacho', image:''}];

        var deferred = $q.defer();
        deferred.resolve(mockData); //  always resolved, you can do it from your spec

        spyOn(MenuService, 'getMenuItems').and.returnValue(deferred.promise);

    }));

    it('should have a service', function () {
        expect(MenuService).not.toBe(null);
    });

    it("should do return a list of items", function () {
        var result;
        MenuService.getMenuItems().then(function(res){
            result = res;
        });
        rootScope.$apply(); // promises are resolved/dispatched only on next $digest cycle
        expect(result).toBe(mockData);
    });
});
