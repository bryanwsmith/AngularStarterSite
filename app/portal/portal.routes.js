/**
 * The employee portal routes
 * @namespace employeePortal.portal.routes
 */
(function() {
  'use strict';

  angular
    .module('employeePortal.portal.routes', ['ui.router'])
    .config(configure);

  configure.$inject = ['$stateProvider'];

  function configure($stateProvider) {

    $stateProvider
      .state('root.portal', {
        parent: 'root',
        url: '/portal',
        views: {
          "content": {
            templateUrl: 'portal/portal.template.html',
            controller: 'portalController'
          }
        }
      });

  }
})();
