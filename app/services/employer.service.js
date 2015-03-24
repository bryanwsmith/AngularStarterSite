(function () {
  'use strict';

  angular
  .module('employeePortal.services')
  .factory('employerService',employerService);

  employerService.$inject = [];

  function employerService(){
    var definition = {
      getEmployer : getEmployer
    };

    return definition;

    function getEmployer()
    {
      return { Name: 'Mock Employer', UniqueId: -1};
    }
  }
})();
