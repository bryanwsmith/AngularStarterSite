(function() {
  'use strict';

  angular
    .module('employeePortal.services')
    .factory('securityService', securityService);

  securityService.$inject = ['$http'];

  function securityService($http) {
    var definition = {
      authenticate: authenticate
    };

    return definition;

    function authenticate(username, password) {
      return $http.post('http://localhost:9000/Authentication', {
        Username: username,
        Password: password
      });
    }
  }
})();
