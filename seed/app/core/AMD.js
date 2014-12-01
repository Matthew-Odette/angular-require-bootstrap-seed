/*global require*/
'use strict';

require.config({
	baseUrl: 'app',
	paths: {
		jquery     :  ['https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min',
				       '../lib/jquery.min.1.11.1'],

		angular    : ['https://ajax.googleapis.com/ajax/libs/angularjs/1.3.4/angular.min',
				      '../lib/angular.min.1.3.4'],
		ngAnimate  : ['https://ajax.googleapis.com/ajax/libs/angularjs/1.3.4/angular-animate.min',
				      '../lib/angular-animate.min.1.3.4'],
		ngAria	   : ['https://ajax.googleapis.com/ajax/libs/angularjs/1.3.4/angular-aria.min',
				      '../lib/angular-aria.min.1.3.4'],
		ngCookies  : ['https://ajax.googleapis.com/ajax/libs/angularjs/1.3.4/angular-cookies.min',
				      '../lib/angular-cookies.min.1.3.4'],
		ngMessages : ['https://ajax.googleapis.com/ajax/libs/angularjs/1.3.4/angular-messages.min',
				      '../lib/angular-messages.min.1.3.4'],
		ngMocks    : ['https://ajax.googleapis.com/ajax/libs/angularjs/1.3.4/angular-mocks',
				      '../lib/angular-mocks.1.3.4'],
		ngResource : ['https://ajax.googleapis.com/ajax/libs/angularjs/1.3.4/angular-resource.min',
				      '../lib/angular-resource.min.1.3.4'],
		ngRoute    : ['https://ajax.googleapis.com/ajax/libs/angularjs/1.3.4/angular-route.min',
				      '../lib/angular-route.1.3.4'],
		ngSanitize : ['https://ajax.googleapis.com/ajax/libs/angularjs/1.3.4/angular-sanitize.min',
					  '../lib/angular-sanitize.min.1.3.4'],
		ngTouch    : ['https://ajax.googleapis.com/ajax/libs/angularjs/1.3.0-beta.8/angular-touch.min',
					  '../lib/angular-touch.min.1.3.4'],

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
		ngAria: {
			exports: 'ngAria',
			deps: ['angular']
		},
		ngCookies: {
			exports: 'ngCookies',
			deps: ['angular']
		},
		ngMessages: {
			exports: 'ngMessages',
			deps: ['angular']
		},
		ngMocks: {
			exports: 'ngMocks',
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
