/**
 * The login module for employee portal
 * @namespace employeePortal.login
 */
(function() {
  'use strict';

  angular.module('employeePortal.login', [
    /* Angular modules */
    'ngAnimate',
    'ui.router',
    /* Feature modules*/
    'employeePortal.services',
    'employeePortal.login.routes'
  ]);
})();
