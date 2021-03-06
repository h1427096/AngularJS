(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$http']
function MenuDataService($http) {
  var service = this;

  service.getAllCategories = function() {

      var response = $http({
          method: "GET",
          url: ("https://davids-restaurant.herokuapp.com/categories.json")
      })
      .catch(function (error) {
          console.log("Something went terribly wrong.");
      });

      return response;
  };

  service.getItemsForCategory = function(categoryShortName) {

      var response = $http({
          method: "GET",
          url: (" https://davids-restaurant.herokuapp.com/menu_items.json?category="
                    + categoryShortName)
      })
      .catch(function (error) {
          console.log("Something went terribly wrong.");
      });

      return response;
  };
}

})();
