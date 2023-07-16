(function () {
    'use strict';
    
    var shoppingList = [
      "Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol", "Pepto Bismol (Chocolate flavor)", "Pepto Bismol (Cookie flavor)"
    ];
    
    angular.module('ShoppingListCheckOff', [])
    .controller('ShoppingListController', ShoppingListController);
    .controller('AlreadyBoughtController', AlreadyBoughtController);
    .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

    ShoppingListController.$inject = ['ShoppingListCheckOffService'];
    function ShoppingListController(ShoppingListCheckOffService) {
      var itemAdd = this;

      itemAdder.itemName = "";
      itemAdder.itemQuantity = "";
    
      itemAdder.addItem = function () {
        ShoppingListCheckOffService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
      }
    }

    AlreadyBoughtController.$inject=['ShoppingListCheckOffService']
    function AlreadyBoughtController (ShoppingListCheckOffService){
        var showList = this;

        showList.items = ShoppingListCheckOffService.getItems();
      
        showList.removeItem = function (itemIndex) {
          ShoppingListCheckOffService.removeItem(itemIndex);
        };
    }


    function ShoppingListCheckOffService(){
        var service = this;

        var items = [];
      
        service.addItem = function (itemName, quantity) {
          var item = {
            name: itemName,
            quantity: quantity
          };
          items.push(item);
        };
      
        service.removeItem = function (itemIndex) {
          items.splice(itemIndex, 1);
        };
      
        service.getItems = function () {
          return items;
        };
      }


    })();