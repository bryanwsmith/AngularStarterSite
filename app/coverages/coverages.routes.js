/**
 * The employee portal coverages routes
 * @namespace employeePortal.coverages.routes
 */
(function() {
  'use strict';

  angular
    .module('employeePortal.coverages.routes', ['ui.router'])
    .config(configure);

  configure.$inject = ['$stateProvider'];

  function configure($stateProvider) {

    $stateProvider
      .state('root.coverages', {
        parent: 'root',
        url: '/coverages',
        views: {
          "content": {
            templateUrl: 'coverages/coverages.template.html',
            controller: 'coveragesController'
          }
        }
      });

  }
})();
