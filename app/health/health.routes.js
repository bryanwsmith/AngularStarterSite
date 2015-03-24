/**
 * The employee portal health routes
 * @namespace employeePortal.health.routes
 */
(function() {
  'use strict';

  angular
    .module('employeePortal.health.routes', ['ui.router'])
    .config(configure);

  configure.$inject = ['$stateProvider'];

  function configure($stateProvider) {

    $stateProvider
      .state('root.health', {
        parent: 'root',
        url: '/health',
        views: {
          "content": {
            templateUrl: "health/health.template.html",
            controller: "healthController"
          }
        }
      });

  }
})();
