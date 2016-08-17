'use strict';

/**
 * @ngdoc overview
 * @name zenfitsApp
 * @description
 * # zenfitsApp
 *
 * Main module of the application.
 */
angular
  .module('zenfitsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
