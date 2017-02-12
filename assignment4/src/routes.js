(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  // Premade list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menuapp/templates/categories-main.template.html',
    controller: 'CategoriesMainController as catCtrl',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
    }
  })

  .state('menuItems', {
    url: '/menu-items/{shortName}',
    templateUrl: 'src/menuapp/templates/menu-items-main.template.html',
    controller: 'MenuItemsMainController as miCtrl',
    resolve: {
      items: ['$stateParams', 'MenuDataService',
            function ($stateParams, MenuDataService) {
              return MenuDataService.getItemsForCategory($stateParams.shortName);
            }]
    }
  });
}

})();
