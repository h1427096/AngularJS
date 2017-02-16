(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['user', 'MenuService']
function MyInfoController(user, MenuService) {
    var $ctrl = this;

    if (user) {
        $ctrl.user = user;
        MenuService.getMenuItem($ctrl.user.favoriteDish)
        .then(function(data) {
            $ctrl.menu = data;
        })
        .catch(function (error) {
            console.log("Cannot load favorite dish")
        });
    }

}

})();
