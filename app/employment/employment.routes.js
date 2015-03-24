/**
 * The employee portal employment routes
 * @namespace employeePortal.employment.routes
 */
(function() {
  'use strict';

  angular
    .module('employeePortal.employment.routes', ['ui.router'])
    .config(configure);

  configure.$inject = ['$stateProvider'];

  function configure($stateProvider) {

    $stateProvider
      .state('root.employment', {
        parent: 'root',
        url: '/employment',
        views: {
          "content": {
            templateUrl: 'employment/employment.template.html',
            controller: 'employmentController'
          }
        }
      });

  }
})();
