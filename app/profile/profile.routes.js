/**
 * The employee portal profile routes
 * @namespace employeePortal.profile.routes
 */
(function() {
  'use strict';

  angular
    .module('employeePortal.profile.routes', ['ui.router'])
    .config(configure);

  configure.$inject = ['$stateProvider'];

  function configure($stateProvider) {

    $stateProvider
      .state('root.profile', {
        parent: 'root',
        url: '/profile',
        views: {
          "content": {
            templateUrl: 'profile/profile.template.html',
            controller: 'profileController'
          }
        }
      });

  }
})();
