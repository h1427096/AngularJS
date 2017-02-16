(function() {
    "use strict";

    angular.module("common")
    .service('SignupService', SignupService);

    SignupService.$inject = [];
    function SignupService() {
      var service = this;


      service.setUserPreference = function(user) {
          service.user = user;
      }

      service.getUserPreference = function() {
          return service.user;
      }

    }
})();
