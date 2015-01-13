/**
 * app.js.js
 *
 *
 * User: ethanh
 * Email: l2weekly.cn@gmail.com
 * Date: 2015-01-12
 */
'use strict';

var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {templateUrl: '/views/templates/welcome.html', controller: 'WelcomeCtrl'})
		.otherwise({redirectTo: '/'});
	$locationProvider.html5Mode(true);
}]);