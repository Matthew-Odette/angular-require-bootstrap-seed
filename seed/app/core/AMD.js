/*global require*/
'use strict';

require.config({
	baseUrl: 'app',
	paths: {
		jquery     :  ['https://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min',
				       '../lib/jquery.min.1.10.1'],

		angular    : ['https://ajax.googleapis.com/ajax/libs/angularjs/1.2.0-rc.2/angular.min',
				      '../lib/angular.min.1.2.0-rc.2'],
		ngRoute    : ['https://ajax.googleapis.com/ajax/libs/angularjs/1.2.0-rc.2/angular-route.min',
				      '../lib/angular-route.min.1.2.0-rc.2'],
		ngCookies  : ['https://ajax.googleapis.com/ajax/libs/angularjs/1.2.0-rc.2/angular-cookies.min',
				      '../lib/angular-cookies.min.1.2.0-rc.2'],  
		ngAnimate  : ['https://ajax.googleapis.com/ajax/libs/angularjs/1.2.0-rc.2/angular-animate.min',
				      '../lib/angular-animate.min.1.2.0-rc.2'], 
		ngSanitize : ['https://ajax.googleapis.com/ajax/libs/angularjs/1.2.0-rc.2/angular-sanitize.min',
					  '../lib/angular-sanitize.min.1.2.0-rc.2'],

        // From http://angular-ui.github.io/bootstrap/ 
        // --Boostrap 3 port is still incomplete
		ngBootstrap : '../lib/angular-ui',

		app: 'core/app',
	},
	shim: {
		jquery: {
			exports: '$'
		},
		angular: {
			exports: 'angular',
		},
		ngRoute: {
			exports: 'ngRoute',
			deps: ['angular']
		},
		ngCookies: {
			exports: 'ngCookies',
			deps: ['angular']
		},
		ngAnimate: {
			exports: 'ngAnimate',
			deps: ['angular']
		},
		ngSanitize: {
			exports: 'ngSanitize',
			deps: ['angular']
		},
		ngBootstrap: {
			exports: 'ngBootstrap',
			deps: ['angular']
		}
	}
});

require(
	[
	// Dependencies from lib
		'angular', 
		'ngRoute',
		'../lib/less.min.1.3.3',  
	// Angular directives/controllers/services
		'app',
		'core/viewHomeController',
		'core/commonRoutes',
		'core/header'
	], 
	function (angular) {
		var AppRoot = angular.element(document.getElementById('ng-app'));
		AppRoot.attr('ng-controller','AppCtrl');
		angular.bootstrap(document, ['TheApp']);
	}
);
