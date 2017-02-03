(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {

  var list = this;

  list.items = ShoppingListCheckOffService.getToBuyItems();

  list.transfer = function(index) {
    ShoppingListCheckOffService.removeItem(index);
  };

};

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {

  var list = this;

  list.items = ShoppingListCheckOffService.getboughtItems();

};

function ShoppingListCheckOffService() {

  var service = this;

  var toBuyItems = [{ name: "cookies", quantity: 10 },
                { name: "chips", quantity: 20 },
                { name: "sugary drinks", quantity: 15 },
                { name: "milk", quantity: 1 },
                { name: "beers", quantity: 6 },
    ];
  var boughtItems = [];

  service.getToBuyItems = function () {
    return toBuyItems;
  };
  service.getboughtItems = function () {
    return boughtItems;
  };

  service.removeItem = function(index) {
    boughtItems.push(toBuyItems[index]);
    toBuyItems.splice(index, 1);
  }
};


})();
