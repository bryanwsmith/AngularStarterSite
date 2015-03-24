/**
 * The portal module for employee portal
 * @namespace employeePortal.portal
 */
(function() {
  'use strict';

  angular.module('employeePortal.portal', [
    /* Angular modules */
    'ngAnimate',
    /* Feature modules*/
    'employeePortal.services',
    'employeePortal.portal.routes'
  ])
})();
