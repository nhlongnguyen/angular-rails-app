'use strict';

/**
 * @ngdoc function
 * @name cinemaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cinemaApp
 */
angular.module('cinemaApp')
  .controller('MoviesCtrl', ['$scope', '$state', 'MoviesFactory', function ($scope, $state, MoviesFactory) {
 		$scope.movies = MoviesFactory.query();
 		
    $scope.deleteMovie = function(movie) { // Delete a movie. Issues a DELETE to /api/movies/:id
      movie.$delete(function () {
      	$state.go($state.current, {}, {reload: true});;
      });
	  };
  }])
  .controller('MovieShowCtrl', ['$scope', '$stateParams', 'MoviesFactory', function ($scope, $stateParams, MoviesFactory) {
  	$scope.movie = MoviesFactory.get({id: $stateParams.id});
  }])
  .controller('MovieEditCtrl', ['$scope', '$stateParams', '$state', 'MoviesFactory', function ($scope, $stateParams, $state, MoviesFactory) {
  	$scope.movie = MoviesFactory.get({id: $stateParams.id});

  	$scope.updateMovie = function () {
	    $scope.movie.$update(function() {
	      $state.go('movies');
	    });
	  };
  }])

  .controller('MovieCreateCtrl', ['$scope', '$state', 'MoviesFactory',function ($scope, $state, MoviesFactory){
  	$scope.movie = new MoviesFactory();

	  $scope.createMovie = function () {
	    $scope.movie.$save(function () {
	      $state.go('movies');
	    });
	  };
  }]);
