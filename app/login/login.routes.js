/**
 * The employee portal login routes
 * @namespace employeePortal.login.routes
 */
(function() {
  'use strict';

  angular
    .module('employeePortal.login.routes', ['ui.router'])
    .config(configure);

  configure.$inject = ['$stateProvider'];

  function configure($stateProvider) {

    $stateProvider
      .state('root.login', {
        parent: 'root',
        url: '/login',
        views: {
          "content": {
            templateUrl: 'login/login.template.html',
            controller: 'loginController as loginVM'
          }
        }
      })
      .state('root.login.help', {
        parent: 'root',
        url: '/login/help',
        views: {
          "content": {
            templateUrl: 'login/help.template.html',
            controller: 'helpController as helpVM'
          }
        }
      });
  }

})();
