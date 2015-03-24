(function() {
  'use strict';

  angular
    .module('benefitMarket')
    .directive('contentTile', contentTile);

  contentTile.$inject = [];

  function contentTile() {
    return {
      scope: {
        tileInfo: '=info'
      },
      templateUrl: 'components/contentTile/contentTile.directive.html'
    };
  }

})();