/**
 * The employee portal header routes
 * @namespace employeePortal.header.routes
 */
(function() {
  'use strict';

  angular
    .module('employeePortal.footer.routes', ['ui.router'])
    .config(configuration);

  configuration.$inject = ['$stateProvider'];

  function configuration($stateProvider) {
    $stateProvider
      .state('root.footer', {
        parent: 'root',
        views: {
          "footer": {
            templateUrl: 'footer/footer.template.html',
            controller: 'footerController'
          }
        }
      });
  }
})();
