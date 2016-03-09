(function() {
  'use strict';

  angular
    .module('datepicker')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/invite', {
          templateUrl: 'app/invite/invite.html',
          controller: 'InviteController',
          controllerAs: 'invite'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
