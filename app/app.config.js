/**
 * The employee portal configuration module
 * @namespace employeePortal.config
 */
(function() {
  'use strict';

  angular
    .module('employeePortal.config', ['ui.router'])
    .config(configure);

  configure.$inject = ['$httpProvider', '$provide'];

  function configure($httpProvider, $provide) {
    enableCORS($httpProvider);
    defaultErrorHandler($provide);
  }

  /**
   * Enables cross origin resource sharing for $http calls
   * @memberof employeePortal.config
   * @method enableCORS
   * @param $httpProvider angular http provider
   */
  function enableCORS($httpProvider) {
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.defaults.headers.post['Accept'] = 'application/json, text/javascript';
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
    $httpProvider.defaults.headers.common['Accept'] = 'application/json, text/javascript';
    $httpProvider.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8';
    $httpProvider.defaults.useXDomain = true;
  }

  /**
   * Decorates the exception handler to provide server-side logging
   * @memberof employeePortal.config
   * @param $provide angular $provide service
   * @todo Must add server-side logging either to application storage or as an analytic
   */
  function defaultErrorHandler($provide) {

    $provide.decorator("$exceptionHandler", exceptionHandlerDecorator);

    exceptionHandlerDecorator.$inject = ['$delegate'];

    function exceptionHandlerDecorator($delegate) {
      return function(exception, cause) {
        $delegate(exception, cause);
      }
    }
  }

})();
