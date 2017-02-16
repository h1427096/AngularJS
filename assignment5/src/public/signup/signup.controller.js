(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['SignupService', 'MenuService']
function SignupController(SignupService, MenuService) {
  var $ctrl = this;

  $ctrl.submit = function() {
      $ctrl.noSuchMenuNumber = false;

      var promise = MenuService.getMenuItem($ctrl.user.favoriteDish)

      promise.then(function(data) {
          $ctrl.noSuchMenuNumber = false;
          SignupService.setUserPreference($ctrl.user);
          $ctrl.saved = true;
      })
      .catch(function (error) {
          $ctrl.noSuchMenuNumber = true;
      });
  }
}

})();
