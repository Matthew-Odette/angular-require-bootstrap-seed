/*global require*/
'use strict';

require.config({
	baseUrl: 'app',
	paths: {
		jquery     :  ['https://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min',
				       '../lib/jquery.min.1.10.1'],

		angular    : ['https://ajax.googleapis.com/ajax/libs/angularjs/1.3.0-beta.8/angular.min',
				      '../lib/angular.min.1.3.0-beta.8'],
		ngAnimate  : ['https://ajax.googleapis.com/ajax/libs/angularjs/1.3.0-beta.8/angular-animate.min',
				      '../lib/angular-animate.min.1.3.0-beta.8'],
		ngCookies  : ['https://ajax.googleapis.com/ajax/libs/angularjs/1.3.0-beta.8/angular-cookies.min',
				      '../lib/angular-cookies.min.1.3.0-beta.8'],
		ngResource : ['https://ajax.googleapis.com/ajax/libs/angularjs/1.3.0-beta.8/angular-resource.min',
				      '../lib/angular-resource.min.1.3.0-beta.8'],
		ngRoute    : ['https://ajax.googleapis.com/ajax/libs/angularjs/1.3.0-beta.8/angular-route.min',
				      '../lib/angular-route.min.1.3.0-beta.8'],
		ngSanitize : ['https://ajax.googleapis.com/ajax/libs/angularjs/1.3.0-beta.8/angular-sanitize.min',
					  '../lib/angular-sanitize.min.1.3.0-beta.8'],
		ngTouch    : ['https://ajax.googleapis.com/ajax/libs/angularjs/1.3.0-beta.8/angular-touch.min',
					  '../lib/angular-touch.min.1.3.0-beta.8'],

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
		ngAnimate: {
			exports: 'ngAnimate',
			deps: ['angular']
		},
		ngCookies: {
			exports: 'ngCookies',
			deps: ['angular']
		},
		ngResource: {
			exports: 'ngResource',
			deps: ['angular']
		},
		ngRoute: {
			exports: 'ngRoute',
			deps: ['angular']
		},
		ngSanitize: {
			exports: 'ngSanitize',
			deps: ['angular']
		},
		ngTouch: {
			exports: 'ngTouch',
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
		'../lib/less.min.1.7.0',  
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
