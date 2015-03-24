(function() {
  'use strict';

  angular
    .module('employeePortal.layout.routes', ['ui.router'])
    .config(configuration);

  configuration.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configuration($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');

    $stateProvider.state('root', {
      abstract: true,
      views: {
        "": {
          templateUrl: "layout/layout.template.html"
        },
        "header@root": {
          templateUrl: "header/header.template.html",
          controller: "headerController"
        },
        "content@root": {
          templateUrl: "login/login.template.html",
          controller: "loginController"
        },
        "footer@root": {
          templateUrl: "footer/footer.template.html",
          controller: "footerController"
        }
      }
    });
  }
})();
