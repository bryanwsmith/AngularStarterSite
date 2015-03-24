(function() {
  'use strict';

  angular
    .module('employeePortal.login')
    .controller('loginController', loginController);

  loginController.$inject = ['securityService', 'modalService', '$state', '$timeout'];

  /**
   * Creates a new login controller
   * @module
   * @constructor loginController
   */
  function loginController(securityService, modalService, $state, $timeout) {
    /* jshint validthis: true */
    var vm = this;

    vm.title = 'login controller';
    vm.authenticate = authenticate;

    function authenticate() {
      securityService
        .authenticate(vm.username, vm.password)
        .success(function() {
          $state.go('root.portal');
        })
        .error(function() {
          modalService.showMessage("Login Failed", "Invalid username or password", 2000);
        });
    }
  }
})();
