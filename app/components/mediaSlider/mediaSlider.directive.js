(function() {
  'use strict';

  angular
    .module('benefitMarket')
    .directive('mediaSlider', mediaSlider);

  mediaSlider.$inject = [];

  function mediaSlider() {
    return {
      scope: {
        mediaInfo: '=info'
      },
      link: function() {
        $(document).ready(
          setTimeout(2000, function() {
            $('.slider').slider({
              full_width: false
            });
          }))
      },
      templateUrl: 'components/mediaSlider/mediaSlider.directive.html'
    };
  }

})();