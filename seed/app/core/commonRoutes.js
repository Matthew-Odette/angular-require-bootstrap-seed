/*global define*/
'use strict';


// set up base routes
define(['angular', 'app'], function (angular, app) {

	return app.config([ '$routeProvider', function ($routeProvider) {

		$routeProvider.
			when('/',
			{
				templateUrl: 'app/core/home.html',
				controller:  'ViewHomeController'
			}).
			otherwise({redirectTo: '/'});

	}]);
	
});


