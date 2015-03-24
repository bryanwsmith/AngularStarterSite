(function() {
  'use strict';

  angular
    .module('benefitMarket')
    .directive('stickyFooter', stickyFooter);

  stickyFooter.$inject = [];

  function stickyFooter() {
    return {
      templateUrl: 'components/stickyFooter/stickyFooter.directive.html'
    };
  }
})();