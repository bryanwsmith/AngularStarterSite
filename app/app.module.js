/**
 * The base employee portal  module
 * @namespace employeePortal
 */
(function() {
  'use strict';

  angular.module('employeePortal', [
    /* Angular modules */
    'ngAnimate',
    /* Application modules */
    'employeePortal.services',
    'employeePortal.config',
    'employeePortal.routes',
    'employeePortal.layout',
    'employeePortal.header',
    'employeePortal.footer',
    'employeePortal.login',
    'employeePortal.portal',
    'employeePortal.profile',
    'employeePortal.coverages',
    'employeePortal.employment',
    'employeePortal.health',
    'employeePortal.market',
    'employeePortal.help'
  ]);
})();
