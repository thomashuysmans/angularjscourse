(function() {
  'use strict';

  angular.module('datepicker.filters', []);

  angular
    .module('datepicker', ['ngAnimate', 'ngCookies', 
    'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 
    'ngResource', 'ngRoute', 'ui.bootstrap', 'toastr', 'datepicker.filters']);

})();
