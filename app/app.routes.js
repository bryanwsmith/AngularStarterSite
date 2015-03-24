 /**
  * The employee portal routes module
  * @namespace employeePortal.routes
  */
 (function() {
   'use strict';

   angular
     .module('employeePortal.routes', ['ui.router'])
     .config(configure);

   configure.$inject = ['$stateProvider'];

   function configure($stateProvider) {
    
   }
 })();
