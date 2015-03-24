/**
 * The employee portal header routes
 * @namespace employeePortal.header.routes
 */
(function() {
  'use strict';

  angular
    .module('employeePortal.header.routes', ['ui.router'])
    .config(configuration);

  configuration.$inject = ['$stateProvider'];

  function configuration($stateProvider) {
    $stateProvider
      .state('root.header', {
        parent: 'root',
        views: {
          "header": {
            templateUrl: 'header/header.template.html',
            controller: 'headerController'
          }
        }
      });
  }
})();
