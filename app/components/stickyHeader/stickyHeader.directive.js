(function() {
  'use strict';

  angular
    .module('benefitMarket')
    .directive('stickyHeader', stickyHeader);

  stickyHeader.$inject = [];

  function stickyHeader() {
    return {
      templateUrl: 'components/stickyHeader/stickyHeader.directive.html'
    };
  }
})();