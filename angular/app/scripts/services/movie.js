'use strict';

angular.module('cinemaApp')
	.factory('MoviesFactory', ['$resource', function ($resource) {
		return $resource('http://localhost:3000/movies/:id', {id: '@id'}, {
        	'update': { method:'PUT' }
    	});
	}]);
