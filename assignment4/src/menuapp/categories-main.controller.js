(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesMainController', CategoriesMainController);


CategoriesMainController.$inject = ['items'];
function CategoriesMainController(items) {
  var categories = this;
  categories.items = items.data;
}

})();
