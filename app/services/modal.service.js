(function() {
  'use strict';

  angular
    .module('employeePortal.services')
    .factory('modalService', modalService);

  modalService.$inject = ['$timeout'];

  function modalService($timeout) {
    var definition = {
      showMessage: showMessage
    };

    return definition;

    function showMessage(title, message, delay) {

      $('#MessageBox .modal-title').html(title === undefined ? '' : title);

      $('#MessageBox .modal-body').html(message === undefined ? '' : message);

      $('#MessageBox').modal('show');

      $timeout(function() {
        $('#MessageBox').modal('hide');
      }, delay === undefined ? 800 : delay);
    }
  }
})();
