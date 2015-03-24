(function() {
  'use strict';

  angular
    .module('employeePortal.portal')
    .controller('portalController', portalController);

  portalController.$inject = ['employerService'];

  /**
   * Creates a new portal controller
   * @module
   * @constructor portalController
   */
  function portalController(employerService) {
  }

})();
