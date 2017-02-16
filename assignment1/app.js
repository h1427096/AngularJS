(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunchMenu = "";

  $scope.checkMenu = function () {
    var spl = $scope.lunchMenu.split(",");
    if ($scope.lunchMenu.length == 0) {
      $scope.msg = "Please enter data first";
    } else if (spl.length <= 3) {
      $scope.msg = "Enjoy!";
    } else {
      $scope.msg = "Too much!";
    }
  };


}


})();
