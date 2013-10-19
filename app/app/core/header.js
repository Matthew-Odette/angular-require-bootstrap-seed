/*global define*/
'use strict';

define(['angular', 'app'], function (angular, app) {

	app.directive("commonHeader", function () {
		return {
			restrict: "EA",
			templateUrl: "app/core/header.html",
			controller:  'HeaderCtrl'
		};
	});

	app.controller("HeaderCtrl", function ($scope) {
		console.log('HeaderCtrl working');
	});
	
});