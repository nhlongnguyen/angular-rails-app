'use strict';

/**
 * @ngdoc overview
 * @name cinemaApp
 * @description
 * # cinemaApp
 *
 * Main module of the application.
 */
angular
  .module('cinemaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('movies', {
        url: '/',
        templateUrl: 'views/movies/index.html',
        controller: 'MoviesCtrl'
      })
      .state('showMovie', {
        url: '/movies/:id/show',
        templateUrl: 'views/movies/show.html',
        controller: 'MovieShowCtrl'
      })
      .state('editMovie', {
        url: '/movies/:id/edit',
        templateUrl: 'views/movies/edit.html',
        controller: 'MovieEditCtrl'
      })
      .state('newMovie', {
        url: '/movies/new',
        templateUrl: 'views/movies/new.html',
        controller: 'MovieCreateCtrl'
      });
  });
