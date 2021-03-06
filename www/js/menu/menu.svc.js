// the Service for the Menu

// A service responsible for all calls to the back-end to get menu data
(function() {

    'use strict';


    angular.module('food-delivery.menu').service('MenuService',  ['$q', function($q) {

        // add mock data for now
        var _menuItems = [
            {id:1, title: 'Gazpacho', image:''},
            {id:2, title: 'Best roast leg of lamb', image:''},
            {id:3, title: 'Risotto', image:''} ,
            {id:4, title: 'Chocolate Pudding',  image:''}
        ];

        return {

            getMenuItems: function() {

                // There will always be a promise so always declare it.
                var deferred = $q.defer();

                if (_menuItems) {
                    // Resolve the deferred $q object before returning the promise
                    deferred.resolve(_menuItems);
                    return deferred.promise;
                }
                // else- not in cache
                $http.get('/api/menu').success(function(data){
                    _menuItems = data;
                    deferred.resolve(data);
                }).error(function(data, status, headers, config) {
                    deferred.reject("Error: request returned status " + status);
                });
                return deferred.promise;
            }
        }
    }]);
}());
