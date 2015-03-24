/**
 * The employee portal market routes
 * @namespace employeePortal.market.routes
 */
(function() {
  'use strict';

  angular
    .module('employeePortal.market.routes', ['ui.router'])
    .config(configure);

  configure.$inject = ['$stateProvider'];

  function configure($stateProvider) {

    $stateProvider
      .state('root.market', {
        parent: 'root',
        url: '/market',
        views: {
          "content": {
            templateUrl: 'market/market.template.html',
            controller: 'marketController'
          }
        }
      });
  }
})();
