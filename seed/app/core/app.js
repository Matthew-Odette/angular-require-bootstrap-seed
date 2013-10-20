/*global define*/
'use strict';

// Hook up all modules to the 'app' module
// Returns TheApp (see commonRoutes.js for usage)
define(['angular', 'ngRoute', 'ngSanitize', 'ngBootstrap'], function (angular, ngRoute, ngSanitize, ngBootstrap) {

	angular.module('HashBangURLs', ['ngRoute']).config(['$locationProvider', function($location) {
	   	$location.hashPrefix('!');
	}]);

	angular.module('HTML5ModeURLs', ['ngRoute']).config(['$locationProvider', function($location) {
	   	$location.html5Mode(true);
	}]);

	// Choose to inject either HashBangs or HTML5 mode, your preference.
	var TheApp = angular.module('TheApp', ['HashBangURLs', 'ui.bootstrap', 'ngSanitize'], function ($routeProvider, $locationProvider, $httpProvider) {

	});

	TheApp.controller("AppCtrl", function ($scope, $log, $q, $timeout) {

    	console.log("AppCtrl working");

    });

	return TheApp;

});




