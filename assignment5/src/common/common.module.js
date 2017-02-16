(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://h1427096-angularjs.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
