/**
 * The employee portal help routes
 * @namespace employeePortal.help.routes
 */
(function() {
  'use strict';

  angular
    .module('employeePortal.help.routes', ['ui.router'])
    .config(configure);

  configure.$inject = ['$stateProvider'];

  function configure($stateProvider) {

    $stateProvider
      .state('root.help', {
        parent: 'root',
        url: '/help',
        views: {
          "content": {
            templateUrl: 'help/help.template.html',
            controller: 'helpController'
          }
        }
      });

  }
})();
