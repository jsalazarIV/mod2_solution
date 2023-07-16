(function () {
    'use strict';
    
    
    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
      var buyList = this;

      buyList.itemsToBuy = ShoppingListCheckOffService.getItems();
      
      buyList.removeItem = function (itemIndex) {
        ShoppingListCheckOffService.removeItem(itemIndex);
      };
    }

    AlreadyBoughtController.$inject=['ShoppingListCheckOffService']
    function AlreadyBoughtController (ShoppingListCheckOffService){
        var boughtList = this;

        boughtList.items = ShoppingListCheckOffService.boughtItems();
    }



    function ShoppingListCheckOffService(){
        var service = this;

        var itemsToBuy = ["cookies", 'milk', 'chips'];
        var itemsBought =[];

        service.getItems = function () {
          return itemsToBuy;
        };

        service.boughtItems = function () {
          return itemsBought;
        };
        service.removeItem = function (itemIndex) {
          itemsBought.push(itemsToBuy[itemIndex]);
          itemsToBuy.splice(itemIndex, 1);
        };
      

    }

})();