(function(){
    'use strict';

    angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItemsDirective);

    function FoundItemsDirective() {
      var ddo = {
        templateUrl: 'foundItems.html',
        scope: {
          items: '<',
          onRemove: '&'
        },
        controller: FoundItemsDirectiveController,
        controllerAs: 'found',
        bindToController: true
      };

      return ddo;
    }

    function FoundItemsDirectiveController() {

    };

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {

        var ctrl = this;

        ctrl.found = [];

        ctrl.narrowItDown = function() {
            var promise = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);


            promise.then(function (response) {
                console.log(response);
                ctrl.found = response;
            })
            .catch(function (error) {
                console.log("Something went terribly wrong.");
            });
        };

        ctrl.removeItem = function(index) {
            ctrl.found.splice(index, 1);
        };

    };

    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http) {

        var service = this

        service.getMatchedMenuItems = function(searchTerm) {

            var response = $http({
                method: "GET",
                url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
            }).then(function(result) {
                var allItems = result.data.menu_items;
                var foundItems = [];
                for (var i=0; i < allItems.length; i++) {
                    var item = allItems[i];
                    if (item.description.indexOf(searchTerm) >= 0) {
                        foundItems.push(item);
                    };
                };
                return foundItems;
            }).catch(function (error) {
                console.log("Something went terribly wrong.");
            });

            return response;

        };

    };

})();
