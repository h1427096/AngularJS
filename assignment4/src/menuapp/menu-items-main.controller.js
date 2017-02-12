(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuItemsMainController', MenuItemsMainController);


MenuItemsMainController.$inject = ['items'];
function MenuItemsMainController(items) {
  var menuItems = this;
  menuItems.items = items.data.menu_items;
  menuItems.category = items.data.category.name
}

})();
